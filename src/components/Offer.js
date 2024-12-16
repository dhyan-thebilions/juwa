import React from "react";
import "../styles/Offer.css";
import { Container, Row, Col, Card, CardBody } from "reactstrap";

const Offer = () => {
    return (
        <React.Fragment>
            <div className="cards-bg">
                <Container>
                    <Row>
                        <Col xs={12} sm={12} md={12} lg={6} className="offer-card-one">
                            <Card className="h-100 offer-card-override-one">
                                <CardBody>
                                    <Row>
                                        <Col xs={12} sm={5} md={5} lg={5}>
                                            <img
                                                alt="offer-1"
                                                src="../assets/offer-1.svg"
                                                width={280}
                                            />
                                        </Col>
                                        <Col xs={12} sm={7} md={7} lg={7}>
                                            <h6 className="offer-h6">1st Deposit Offer</h6>
                                            <div className="offer-bonus">200% WELCOME BONUS</div>
                                            <h5 className="offer-h5">Up to $500 credits</h5>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col xs={12} sm={12} md={12} lg={6}>
                            <Card className="h-100 offer-card-override-two">
                                <CardBody>
                                    <Row>
                                        <Col xs={12} sm={5} md={5} lg={5}>
                                            <img
                                                alt="offer-2"
                                                src="../assets/offer-2.svg"
                                                width={280}
                                            />
                                        </Col>
                                        <Col xs={12} sm={7} md={7} lg={7}>
                                            <h6 className="offer-h6">Keep the excitement alive with</h6>
                                            <div className="offer-reload">50% RELOAD BONUS</div>
                                            <h5 className="offer-h5">on every reload</h5>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default Offer;
