import React, {Component} from "react";
import {Link} from "react-router-dom";

class MoneyOption extends Component {
    render() {
        return (
            <div className="money-option-area">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-3 col-md-6">
                            <div className="single-work mt-0 text-center">
                                <div className="work-icon">
                                    <img className="" src={this.props.design === 'home_2' ? process.env.PUBLIC_URL + '/assets/img/icon/arrow-down-pink.png' : process.env.PUBLIC_URL + '/assets/img/icon/arrow-down.png'} alt="icon" />
                                </div>
                                <h5><Link className="initiate-scripts" to={'/apply-loan'}>Withdraw</Link></h5>
                                <p>Lorem ipsum dolor sit amet, consectetur</p>
                                <Link className="angle-btn initiate-scripts" to={'/apply-loan'}><img src={process.env.PUBLIC_URL + '/assets/img/icon/angle-left-round.png'} alt="icon" /></Link>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="single-work mt-md-0 text-center">
                                <div className="work-icon">
                                    <img className="" src={this.props.design === 'home_2' ? process.env.PUBLIC_URL + '/assets/img/icon/arrow-right-pink.png' : process.env.PUBLIC_URL + '/assets/img/icon/arrow-right.png'} alt="icon" />
                                </div>
                                <h5><Link className="initiate-scripts" to={'/apply-loan'}>Send Money</Link></h5>
                                <p>Lorem ipsum dolor sit amet, consectetur</p>
                                <Link className="angle-btn initiate-scripts" to={'/apply-loan'}><img src={process.env.PUBLIC_URL + '/assets/img/icon/angle-left-round.png'} alt="icon" /></Link>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="single-work text-center">
                                <div className="work-icon">
                                    <img className="" src={this.props.design === 'home_2' ? process.env.PUBLIC_URL + '/assets/img/icon/card-pink.png' : process.env.PUBLIC_URL + '/assets/img/icon/card.png'} alt="icon" />
                                </div>
                                <h5><Link className="initiate-scripts" to={'/apply-loan'}>Cards</Link></h5>
                                <p>Lorem ipsum dolor sit amet, consectetur</p>
                                <Link className="angle-btn initiate-scripts" to={'/apply-loan'}><img src={process.env.PUBLIC_URL + '/assets/img/icon/angle-left-round.png'} alt="icon" /></Link>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="single-work text-center">
                                <div className="work-icon">
                                    <img className="" src={this.props.design === 'home_2' ? process.env.PUBLIC_URL + '/assets/img/icon/exchange-pink.png' : process.env.PUBLIC_URL + '/assets/img/icon/exchange.png'} alt="icon" />
                                </div>
                                <h5><Link className="initiate-scripts" to={'/apply-loan'}>Exchange</Link></h5>
                                <p>Lorem ipsum dolor sit amet, consectetur</p>
                                <Link className="angle-btn initiate-scripts" to={'/apply-loan'}><img src={process.env.PUBLIC_URL + '/assets/img/icon/angle-left-round.png'} alt="icon" /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MoneyOption;