import React from "react";
import { Container, Row, Col, Card } from "reactstrap";
import "../styles/Download.css";

const Download = () => {
    return (
        <React.Fragment>
            <Container>
                <div className="download-app">
                    Download the App
                </div>
                <div className="follow-these">
                    Follow these steps to download and install the app on your device
                </div>
            </Container>

            <Container>
                <Row className="g-4">
                    <Col xs={12} sm={12} md={6} lg={6}>
                        <Card className="h-100 download-card-override">
                            <div className="download-img-wrapper">
                                <img
                                    alt="google-play"
                                    className=""
                                    loading="lazy"
                                    src="../assets/google-play.svg"
                                />
                                <img
                                    alt="google-play"
                                    className="qr-image"
                                    loading="lazy"
                                    src="../assets/qr-code.svg"
                                />
                            </div>
                            <div className="download-for">
                                Download for Android
                            </div>
                            <ol className="click-on-the-container">
                                <li>
                                    Click on the link or scan the QR code with your camera. (Avoid using Google Chrome; use the standard Android browser.)
                                </li>
                                <li>Click "DOWNLOAD."</li>
                                <li>
                                    Approve the download when prompted.
                                </li>
                                <li>
                                    Approve the file size download.
                                </li>
                                <li>Allow installation from unknown sources in your settings if prompted. (Go to Settings {">"} Security {">"} Install unknown apps.)</li>
                                <li>
                                    Open the downloaded file from your web browser. (Google Chrome won't have this option; use the standard Android browser.)
                                </li>
                                <li>Click "INSTALL."</li>
                                <li>
                                    Open the app once installed.
                                </li>
                                <li>
                                    Allow or deny call permissions as per your preference.
                                </li>
                                <li>Log in and start playing the game!</li>
                            </ol>
                        </Card>
                    </Col>

                    <Col xs={12} sm={12} md={6} lg={6}>
                        <Card className="h-100 download-card-override">
                            <div className="download-img-wrapper">
                                <img
                                    alt="app-store"
                                    className=""
                                    loading="lazy"
                                    src="../assets/app-store.svg"
                                />
                                <img
                                    alt="google-play"
                                    className="qr-image"
                                    loading="lazy"
                                    src="../assets/qr-code.svg"
                                />
                            </div>
                            <div className="download-for">Download for iOS</div>
                            <ol className="click-on-the-container">
                                <li>
                                    Click on the link to download the app.
                                </li>
                                <li>
                                    Press "Download" to start the process.
                                </li>
                                <li>
                                    Follow the on-screen instructions to complete the
                                    installation.
                                </li>
                                <li>
                                    Finish installing Orion Stars.
                                </li>
                                <li>
                                    Enter the download code provided by your account holder.
                                </li>
                                <li>Start playing Orion Stars.</li>
                            </ol>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
};

export default Download;
