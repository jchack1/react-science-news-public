const express = require("express");
const request = require("request");
const path = require("path");
let port = process.env.PORT || 3000;
const app = express();
const cors = require("cors");
//for dev purposes: // "proxy": "http://localhost:5000",  in package.json
//this is port 5000, react app is port 3000

//front end and back end use different urls on render.com
//need to specify that the front end url is allowed to make requests to avoid cors error
app.use(
  cors({
    origin: process.env.ORIGIN,
  })
);

app.get("/getArticles", (req, res) => {
  request(
    "https://gnews.io/api/v4/top-headlines?topic=science&lang=en&country=ca&token=${apiKey}",
    function (error, response, body) {
      if (!error && response.statusCode === 200) {
        const parsedBody = JSON.parse(body);
        const articles = parsedBody["articles"];

        res.send({ articles });
      } else if (error) {
        res.send({message: error});
      }
    }
  );
});

app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, "build")));
app.get("/ping", function (req, res) {
  return res.send("pong");
});
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});
app.listen(port, () => console.log(`Listening on port ${port}`));
