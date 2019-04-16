import React from "react";
import { Link } from "react-router-dom";

import "./styles/BadgeList.css";
import Gravatar from "./Gravatar";

class BadgesList extends React.Component {
  render() {
    if (this.props.badges.length === 0) {
      return (
        <React.Fragment>
          <h3>No badge were found!</h3>
          <Link className="btn btn-primary" to="/badges/new">
            Create new badge
          </Link>
        </React.Fragment>
      );
    }
    return (
      <ul className="list-unstyled">
        {this.props.badges.map(badge => {
          return (
            <li key={badge.id}>
              <Link
                className="text-reset text-decoration-none"
                to={`/badges/${badge.id}`}
              >
                <div className="container">
                  <div className="row Badges">
                    <div className="Badge__section-name">
                      <Gravatar
                        className="Badge__avatar"
                        email={badge.email}
                        alt="Avatar"
                      />
                    </div>
                    <div className="Badge__section-name">
                      {badge.firstName} {badge.lastName}
                      <br />@{badge.twitter}
                      <br />
                      {badge.jobTitle}
                    </div>
                  </div>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default BadgesList;
