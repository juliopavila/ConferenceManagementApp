import React from "react";
import { Link } from "react-router-dom";

import "./styles/HomePage.css";
import confLogo from "../images/platziconf-logo.svg";
import astronauts from "../images/astronauts.svg";

class HomePage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="Homepage__hero">
          <div className="container">
            <div className="row">
              <div className="col-4">
                <img className="img-fluid" src={confLogo} alt="logo" />
                <div className="label">
                  <h1>Badge</h1>
                  <h1>Management</h1>
                  <h1>System</h1>
                </div>
                <Link to="/badges" className="btn btn-primary">
                  Start
                </Link>
              </div>
              <div className="col-8">
                <img src={astronauts} alt="astronauts" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default HomePage;
