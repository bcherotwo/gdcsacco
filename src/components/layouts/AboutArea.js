import React, {Component} from "react";
import {Link} from "react-router-dom";

class AboutArea extends Component {
    render() {
        return (
            <div className="about-us-area pd-100">
                <div className="container">
                    <div className="row">
                        {/*video-area start*/}
                        <div className="col-lg-5 col-md-8 align-self-center">
                            <div className="about-us-video">
                                <img className="thumb" src={process.env.PUBLIC_URL + '/assets/img/video/1.png'} alt="img" />
                                <a className="play-btn" href="https://www.youtube.com/embed/Wimkqo8gDZ0" data-effect="mfp-zoom-in"><img src={process.env.PUBLIC_URL + '/assets/img/video/play-btn.png'} alt="img" /></a>
                            </div>
                        </div>
                        {/*video-area end*/}
                        <div className="col-lg-6 offset-lg-1">
                            <div className="about-us-details">
                                <div className="section-title">
                                    <h6 className={this.props.design === 'home_2' ? 'subtitle text-pink' : 'subtitle'}>About The E-Banking</h6>
                                    <h2 className="title">Nothing is impossible. We can help you achieve your goals!</h2>
                                    <p>Online banking can save you a lot of time and effort, you can undertake most transactions from the comforts of your home. However, it is crucial to use internet banking safely.</p>
                                </div>
                                <div className="media media-1">
                                    <div className={this.props.design === 'home_2' ? 'media-left bg-pink' : 'media-left'}>
                                        <img src={process.env.PUBLIC_URL + '/assets/img/about/01.png'} alt="img" />
                                    </div>
                                    <div className="media-body">
                                        <p>Nro eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus dolor sit.</p>
                                    </div>
                                </div>
                                <div className="media media-2">
                                    <div className="media-left">
                                        <img src={process.env.PUBLIC_URL + '/assets/img/about/02.png'} alt="img" />
                                    </div>
                                    <div className="media-body">
                                        <p>Easy pament process belief Lorem Ipsum is not simply random text. It has roots in a McClintock.</p>
                                    </div>
                                </div>
                                <Link className={this.props.design === 'home_2' ? 'btn btn-blue bg-pink initiate-scripts' : 'btn btn-blue initiate-scripts'} to={'/about'}>Learn More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutArea;