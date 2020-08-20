import React from "react";
import { Link } from "react-router-dom";
const Portfolios = () => (
  <div>
    <h1>My Work</h1>
    <p>Chekout the stuffs I've done:</p>
    <Link to="/portfolio/1">Thing One</Link>
    <Link to="/portfolio/2">Thing Two</Link>
  </div>
);

export default Portfolios;
