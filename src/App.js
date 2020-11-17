import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import axios from "axios";
import Header from "./components/ui/Header";
import CardContainer from "./components/cards/CardContainer";
import About from "./components/ui/About";

const App = () => {
  const url = "/getArticles";

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //code may seem a little verbose for an "axios" API call, however I am using  all this code for "cancel" so app doesn't make too many requests to API - otherwise it continues making requests when one is all that's required
  useEffect(() => {
    let cancel;
    axios
      .get(url, {
        cancelToken: new axios.CancelToken((c) => (cancel = c)),
      })
      .then((res) => {
        setIsLoading(false);
        setItems(res.data.articles);
      });

    return () => cancel();
  }, [url]);

  return (
    <Router>
      <div className="container">
        <Header />

        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <CardContainer
                items={items}
                isLoading={isLoading}
                className="card-container"
              />
            )}
          />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
