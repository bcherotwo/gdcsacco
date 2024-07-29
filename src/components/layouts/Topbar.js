import React, { Component } from "react";

class Topbar extends Component {
  render() {
    return (
      <div
        className={
          this.props.design === "home_2" ? "topbar-area bg-pink" : "topbar-area"
        }
      >
        <div className="container">
          <div className="row">
            <div className="col-md-6 align-self-center">
              <div className="topbar-left text-md-left text-center">
                <p>
                  <i className="fa fa-map-marker" />
                  GDC Sacco Society Limited, GITHUNGURI.
                </p>
              </div>
            </div>
            <div className="col-md-6 text-md-right text-center">
              <div className="topbar-right">
                <p>
                  <i className="fa fa-envelope" />
                  <span>9</span>
                </p>
                <p>
                  <i className="fa fa-bell" />
                  <span>6</span>
                </p>
                <div className="user">
                  <img
                    src={process.env.PUBLIC_URL + "/assets/img/author.png"}
                    alt="img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Topbar;
