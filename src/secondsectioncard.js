import React from "react";

class SecondSectioncard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      infoarray1: [
        {
          img: "https://www.docplanner.com/img/flag.png",
          title: "Leader in 8 countries",
          description:
            "Poland, Turkey, Spain, Italy, Mexico, Brazil, Argentina and Chile"
        },
        {
          img: "https://www.docplanner.com/img/visits.png",
          title: "600 000 appointments",
          description: "booked last month"
        }
      ],
      infoarray2: [
        {
          img: "https://www.docplanner.com/img/patients.png",
          title: "20 million unique patients",
          description: "visit us every month"
        },
        {
          img: "https://www.docplanner.com/img/doctors.png",
          title: "35 000 active doctors",
          description: "trust in our solutions"
        }
      ]
    };
  }

  render() {
    return (
      <div className="card-container">
        <div className="first-div">
          <div className="second-section-card">
            {this.state.infoarray1.map((e, i) => (
              <div className="second-section-card-container">
                <div className="second-section-card-img">
                  <img src={this.state.infoarray1[i].img} alt="" />
                </div>

                <div className="second-section-card-title">
                  {this.state.infoarray1[i].title}
                </div>

                <div className="second-section-card-description">
                  {this.state.infoarray1[i].description}
                </div>
              </div>
            ))}
          </div>
          <div className="second-div">
            {this.state.infoarray2.map((e, i) => (
              <div className="second-section-card-container">
                <div className="second-section-card-img">
                  <img src={this.state.infoarray2[i].img} alt="" />
                </div>

                <div className="second-section-card-title">
                  {this.state.infoarray2[i].title}
                </div>

                <div className="second-section-card-description">
                  {this.state.infoarray2[i].description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default SecondSectioncard;
