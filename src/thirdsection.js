import React from "react";

class ThirdSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      destinationarray: [
        {
          image: "https://www.docplanner.com/images/warsaw.png",
          name: "Warsaw"
        },
        {
          image: "https://www.docplanner.com/images/barcelona.png",
          name: "Barcelona"
        },
        {
          image: "https://www.docplanner.com/images/istanbul.png",
          name: "Istanbul"
        },
        {
          image: "https://www.docplanner.com/images/rome.png",
          name: "Rome"
        },
        {
          image: "https://www.docplanner.com/images/mexico-city.png",
          name: "Mexico city"
        },
        {
          image: "https://www.docplanner.com/images/curitiba.png",
          name: "Curitiba"
        }
      ]
    };
  }

  render() {
    return (
      <div className="third-section">
        <div className="third-section-title">
          <h1>
            Improve the lives of millions. <br />
            Change yours forever
          </h1>
        </div>

        <div className="third-section-description">
          <p>
            More than 500 team mates share our same vision, goals and passion.{" "}
            <br />
            With offices in Warsaw, Barcelona, Istanbul, Rome, Mexico City and{" "}
            <br />
            Curitiba, our search for great talent never stops.
          </p>
        </div>
        <div className="destination-container">
          {this.state.destinationarray.map((e, i) => (
            <div className="destination-container-single">
              <div className="destination-image">
                <img
                  className="destination-image-style"
                  src={this.state.destinationarray[i].image}
                  alt=""
                />
              </div>
              <div className="destination-name">
                <h3> {this.state.destinationarray[i].name}</h3>
                <div className="destination-button">
                  <button className="destination-button-desg">
                    see openings
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default ThirdSection;
