import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Search from "../users/Search";
import Users from "../users/Users";

const Home = () => {
  return (
    <Fragment>
      <Search />
      <Users />
    </Fragment>
  );
};

Home.propTypes = {};

export default Home;
