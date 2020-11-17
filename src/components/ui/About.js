import React from "react";

const About = () => {
  return (
    <div className="about-container">
      <h1>About</h1>
      <p>
        Before becoming a web developer I went to univeristy and earned a
        Bachelor of Science degree in Biological Sciences.
      </p>

      <p>
        I chose this degree because I was curious about the inner workings of
        things, especially in the field of molecular biology and biochemistry. I
        worked in the field for a short time but my curiousity for this field
        remained.
      </p>

      <p>
        I created this app for myself so I could keep up with science news,
        especially anything new that was being reported in Canada.
      </p>

      <p>
        This app is built with React and Node.js and displays data from
        gnews.io, using Axios to fetch the data from the backend. The API call
        to gnews.io occurs in the Node.js backend. React Router is used for
        routing between the home and about pages. My original intention was to
        include an "Article" page displaying the entire text form the original
        source. However, the free developer plan from the API does not give the
        entire article content. Instead, I placed a link on each card that takes
        the user to the original article.
      </p>
    </div>
  );
};

export default About;
