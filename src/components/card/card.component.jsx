import React from "react";

import "./card-style.css";

export const Card = props => (
  <div className="card-container">
    <img
      alt="monster"
      src={`https://robohash.org/${props.rapper.id}?set=set2`}
    />
    <h3> {props.rapper.name} </h3>
    <p>{props.rapper.email}</p>
  </div>
);
