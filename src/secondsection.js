import React from "react";
import SecondSectioncard from "./secondsectioncard";
class SecondSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="secondsection">
        <div className="second-section-all-text">
          <div className="second-section-big-title">
            <h1>
              The world's <br />
              biggest healthcare platform
            </h1>
          </div>
          <div className="second-sectioon-text">
            <p>
              We work from 6 offices all over the world, bringing Docplanner
              Group to life in almost 20 countries.
            </p>
          </div>
        </div>
        <SecondSectioncard />
      </div>
    );
  }
}

export default SecondSection;
