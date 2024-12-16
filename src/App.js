import React from "react";
import Ticker from "./components/Ticker";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import Cards from "./components/Cards";
import Offer from "./components/Offer";
import Download from "./components/Download";
import Footer from "./components/Footer";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "reactstrap/lib";

const App = () => {
  return (
    <React.Fragment>
      <div className="app-bg">
        <Ticker />
        <NavBar />
        <Banner />
        <Cards />
        <Offer />
        <Download />
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default App;
