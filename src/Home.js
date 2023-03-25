import React from "react";

import { Link } from "react-router-dom";

import "./App.css";

const Home = () => {
  return (
    <div className="home__container">
      <div
        style={{
          width: "100%",
          maxWidth: 300,
          background: "green",
          height: 130,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Link
          to="/getuser"
          style={{ border: "none", textDecoration: "none", color: "white" }}
        >
          <p>Get the user</p>
        </Link>
        <Link
          to="/newuser"
          style={{ border: "none", textDecoration: "none", color: "white" }}
        >
          <p>New User Account</p>
        </Link>
      </div>
    </div>
  );
};

export default Home;
