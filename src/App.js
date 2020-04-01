import React from "react";
import { Helmet } from "react-helmet";
import Card from "./card.js";
import calculator from "./calculator.svg";
import karma from "./karma.svg";
import supervisor from "./supervisor.svg";
import teamBuilder from "./teamBuilder.svg";
import "./App.css";

const data = [
  {
    title: "Supervisor",
    content: "Monitors activity to identify project roadblocks",
    image: supervisor,
    color: "hsl(180, 62%, 55%)"
  },
  {
    title: "Team Builder",
    content:
      "Scans our talent network to create the optimal team for your project",
    image: teamBuilder,
    color: "hsl(0, 78%, 62%)"
  },
  {
    title: "Karma",
    content: "Regularly evaluates our talent to ensure quality",
    image: karma,
    color: "hsl(34, 97%, 64%)"
  },

  {
    title: "Calculator",
    content:
      "Uses data from past projects to provide better delivery estimates",
    image: calculator,
    color: "hsl(212, 86%, 64%)"
  }
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dummy: ""
    };
  }

  render() {
    return (
      <div className="App">
        <Helmet>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="../images/favicon-32x32.png"
          />
        </Helmet>
        <div className="header">
          <h1 className="headingLight"> Reliable, efficient delivery </h1>
          <h1 className="headingBold"> Powered by Technology </h1>
          <p className="bodyContent">
            Our Artificial Intelligence powered tools use millions of project
            data points to ensure that your project is successful
          </p>
        </div>
        <div className="row">
          <div className="col-4 col-s-4">
            <Card
              title={data[0].title}
              content={data[0].content}
              color={data[0].color}
              image={data[0].image}
              style="floatCardRight"
            />
          </div>
          <div className="col-4 col-s-4">
            <Card
              title={data[1].title}
              content={data[1].content}
              color={data[1].color}
              image={data[1].image}
            />
            <div style={{ height: "30px" }} />
            <Card
              title={data[2].title}
              content={data[2].content}
              color={data[2].color}
              image={data[2].image}
            />
          </div>
          <div className="col-4 col-s-4">
            <Card
              title={data[3].title}
              content={data[3].content}
              color={data[3].color}
              image={data[3].image}
              style="floatCardLeft"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
