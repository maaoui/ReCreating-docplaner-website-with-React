import React from "react";

class CompanyLinks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      linksarray: [
        "znanylerkz",
        "doctoralia",
        "miodottre",
        "doctorskivsli",
        "znamyleaker"
      ]
    };
  }

  render() {
    return (
      <div className="campanylinks">
        {this.state.linksarray.map((e, i) => (
          <div className="link-container">
            <div className="link-image">
              <img src="https://www.docplanner.com/img/sygnet.png" alt="" />
            </div>

            <div className="link-name">{this.state.linksarray[i]}</div>
          </div>
        ))}
      </div>
    );
  }
}

export default CompanyLinks;
