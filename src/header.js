import React from "react";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="header-container">
        <div className="header-image">
          <img
            className="header-image-modification"
            src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1 "
            alt=""
          />
        </div>

        <div className="header-links">
          <a href="#" style={{ color: "#00b39b" }}>
            About us
          </a>
          <a href="#">Carear</a>
          <a href="#">Department</a>
        </div>
      </div>
    );
  }
}

export default Header;
