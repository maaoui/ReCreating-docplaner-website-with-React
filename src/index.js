import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import Header from "./header";
import FirstSection from "./firstSection";
import Card from "./card";
import CompanyLinks from "./companylinks";
import SecondSection from "./secondsection";
import ThirdSection from "./thirdsection";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Header />
        <FirstSection />
        <div className="theCards">
          <Card />
          <Card />
        </div>
        <div className="first-section-footer">
          <div className="first-section-footer-title">
            <h1>
              {" "}
              We are a global company <br />
              with local culture
            </h1>
          </div>
          <div className="first-sectioon-fotter-links">
            <CompanyLinks />
          </div>
        </div>

        <SecondSection />
        <ThirdSection />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
