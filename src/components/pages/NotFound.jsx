import React from "react";
import PropTypes from "prop-types";

const NotFound = props => {
  return (
    <div>
      <h1>Not Found</h1>
      <p className="Lead">The page you are looking for does not exist.</p>
    </div>
  );
};

NotFound.propTypes = {};

export default NotFound;
