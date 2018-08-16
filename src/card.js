import React from "react";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="card">
        <div className="card-head">
          <div className="card-little-title">for patient</div>
          <div className="card-big-title">
            Find a doctor, book a visit and<br />
            solve any health-related doubt
          </div>
        </div>

        <div className="card-body">
          <img
            className="card-image"
            src="https://www.docplanner.com/img/screen-marketplace@2x.png"
            alt=""
          />
        </div>
      </div>
    );
  }
}

export default Card;
