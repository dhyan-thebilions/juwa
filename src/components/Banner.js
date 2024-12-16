import React from "react";
import { Row, Col } from "reactstrap";
import "../styles/Banner.css";

const Banner = () => {
    return (
        <React.Fragment>
            <div className=" overflow-hidden">
                <Row>
                    <Col xs={12} sm={12} md={12} lg={6}>
                        <div className="banner-container">
                            <div className="banner-online">
                                BE A BIG WINNER WITH OUR HOT JACKPOT
                            </div>
                            <div className="banner-orion-star">
                                EXPERIENCE UNMATCHED QUALITY IN GAME PLAY AND CUSTOMER SERVICE
                            </div>
                        </div>
                        <div className="banner-container-two">
                            <div className="banner-button-wrapper">
                                <button className="banner-button">Download JUWA Now!</button>
                            </div>
                            <div className="banner-so-whats">
                                So, what’s keeping you from joining in the fun? Download Juwa
                                mobile game app and start gaming in the palm of your hand.
                            </div>
                            <div className="banner-text-wrapper">
                                <div className="anydevice">ANYDEVICE!</div>
                                <div className="anytime">ANYTIME!</div>
                                <div className="anydevice">ANYWHERE!</div>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={6}>
                        <div className="banner-img-bg" />
                    </Col>
                </Row>
            </div>
        </React.Fragment>
    );
};

export default Banner;
