import React from "react";
import { Link } from "react-router-dom";

import "./styles/BadgeList.css";
import Gravatar from "./Gravatar";

function userSearchBadges(badges) {
  const [query, setQuery] = React.useState("");
  const [filteredBadges, setFilteredBages] = React.useState(badges);
  React.useMemo(() => {
    const result = badges.filter(badge => {
      return `${badge.firstName} ${badge.lastName}`
        .toLowerCase()
        .includes(query.toLocaleLowerCase());
    });
    setFilteredBages(result);
  }, [badges, query]);
  return { query, setQuery, filteredBadges };
}

function BadgesList(props) {
  const badges = props.badges;
  const { query, setQuery, filteredBadges } = userSearchBadges(badges);
  if (filteredBadges.length === 0) {
    return (
      <React.Fragment>
        <div className="form-group">
          <label>Filter Badges</label>
          <input
            type="text"
            className="form-control"
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
        </div>
        <h3>No badge were found!</h3>
        <Link className="btn btn-primary" to="/badges/new">
          Create new badge
        </Link>
      </React.Fragment>
    );
  }
  return (
    <ul className="list-unstyled">
      <div className="form-group">
        <label>Filter Badges</label>
        <input
          type="text"
          className="form-control"
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
      </div>
      {filteredBadges.map(badge => {
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

export default BadgesList;
