import React from "react";

class FirstSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="first-section">
        <div className="first-section-logo">
          <img
            className="first-section-logo-modify"
            src="https://www.docplanner.com/img/sygnet.png"
            alt=""
          />
        </div>

        <div className="first-section-title">
          <h1>Making the healthcare experience more human</h1>
        </div>
        <div className="first-section-paragraphe">
          <p>
            We want patients to find the perfect doctor and book an <br />
            appointment in the most easy way. The patient journey should be{" "}
            <br />
            enjoyable, and that's why we are always next to them: to help them{" "}
            <br />
            find the best possible care. Anytime, anywhere.
          </p>

          <p>
            We also help doctors to better manage their practice and build{" "}
            <br />
            their online reputation. With our integrated end-to-end solution,
            doctors <br /> are able not only to improve their online presence,
            but also to devote <br />
            their time to what really matters: their patients.
          </p>
        </div>
      </div>
    );
  }
}

export default FirstSection;
