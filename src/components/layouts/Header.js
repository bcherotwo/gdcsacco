import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div className="header-area">
        <div className="container">
          <div className="row">
            <div className="col-md-3 align-self-center">
              <div className="logo d-lg-inline-block d-none">
                <Link className="initiate-scripts" to={"/"}>
                  <img
                    src={process.env.PUBLIC_URL + "/assets/img/logo.png"}
                    alt="img"
                  />
                </Link>
              </div>
            </div>
            <div className="col-lg-9 col-md-12 text-lg-right text-center">
              <div className="media d-sm-inline-flex m-0">
                <div className="media-left align-self-center">
                  <img
                    src={process.env.PUBLIC_URL + "/assets/img/icon/phone.png"}
                    alt="phone"
                  />
                </div>
                <div className="media-body text-left">
                  <p>Free Call To Us:</p>
                  <p> 0723-400611</p>
                </div>
              </div>
              <div className="media d-sm-inline-flex">
                <div className="media-left align-self-center">
                  <img
                    src={process.env.PUBLIC_URL + "/assets/img/icon/clock.png"}
                    alt="phone"
                  />
                </div>
                <div className="media-body text-left">
                  <p>Open Time: </p>
                  <p>Mon-Sat (8 AM - 6 PM)</p>
                </div>
              </div>
              <button
                id="account"
                className={
                  this.props.design === "home_2"
                    ? "btn btn-round d-lg-inline-block d-none bg-pink"
                    : "btn btn-round d-lg-inline-block d-none"
                }
              >
                Open AN Account
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
