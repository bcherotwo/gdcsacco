import React, { Component } from "react";
import { Link } from "react-router-dom";

class Banner extends Component {
  render() {
    return (
      <div
        className={
          this.props.design === "home_2"
            ? "banner-area style-two"
            : "banner-area style-one"
        }
      >
        <div className="banner-slider owl-carousel">
          <div
            className={
              this.props.design === "home_2" ? "item bg-two" : "item bg-one"
            }
          >
            <div className="container">
              <div className="row">
                <div className="col-xl-7 offset-xl-0 col-lg-6 offset-xl-1 offset-lg-1">
                  <div className="banner-inner-area">
                    <h5 className="subtitle">Welcome to Online Banking</h5>
                    <h1 className="title">
                      Best Banking Services System In The World
                    </h1>
                    <p className="brd-1">
                      We are very fast to provide Banking services. Please check
                      included multiple feature & Investment plan .
                    </p>
                    <h5>How much do you want?</h5>
                    <p>We provide online instant cash loans with quick</p>
                    <div className="row">
                      <div className="col-md-6">
                        <select>
                          <option>Amount</option>
                          <option value="1">KES 1000</option>
                          <option value="2">KES 2000</option>
                          <option value="3">KES 3000</option>
                          <option value="4">KES 4000</option>
                        </select>
                      </div>
                      <div className="col-md-6">
                        <select>
                          <option>Month</option>
                          <option value="1">3 Month</option>
                          <option value="2">6 Month</option>
                          <option value="3">9 Month</option>
                          <option value="4">12 Month</option>
                        </select>
                      </div>
                    </div>

                    <Link
                      className="btn btn-blue initiate-scripts"
                      to={"/services"}
                    >
                      Continue
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={
              this.props.design === "home_2" ? "item bg-two" : "item bg-one"
            }
          >
            <div className="container">
              <div className="row">
                <div className="col-xl-7 offset-xl-0 col-lg-6 offset-xl-1 offset-lg-1">
                  <div className="banner-inner-area">
                    <h5 className="subtitle">Welcome to Online Banking</h5>
                    <h1 className="title">
                      Best Banking Services System In The World
                    </h1>
                    <p className="brd-1">
                      We are very fast to provide Banking services. Please check
                      included multiple feature & Investment plan .
                    </p>
                    <h5>How much do you want?</h5>
                    <p>We provide online instant cash loans with quick</p>
                    <div className="row">
                      <div className="col-md-6">
                        <select>
                          <option>Amount</option>
                          <option value="1">KES 1000</option>
                          <option value="2">KES 2000</option>
                          <option value="3">KES 3000</option>
                          <option value="4">KES 4000</option>
                        </select>
                      </div>
                      <div className="col-md-6">
                        <select>
                          <option>Month</option>
                          <option value="1">3 Month</option>
                          <option value="2">6 Month</option>
                          <option value="3">9 Month</option>
                          <option value="4">12 Month</option>
                        </select>
                      </div>
                    </div>

                    <Link
                      className="btn btn-blue initiate-scripts"
                      to={"/services"}
                    >
                      Continue
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Banner;
