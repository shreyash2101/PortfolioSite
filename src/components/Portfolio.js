import React from "react";

const Portfolio = (props) => (
  <div>
    <h1>A Thing I've Done</h1>
    <p>This is portfolio with id {props.match.params.id}</p>
  </div>
);

export default Portfolio;
