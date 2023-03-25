import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import "./App.css";

const GetUser = () => {
  const [email, setEmail] = useState("");
  const [isTrue, setIsTrue] = useState(false);
  const [isTrue1, setIsTrue1] = useState(false);
  const [success, setSucces] = useState("");
  const [error, setError] = useState("");
  const formHandle = async (e) => {
    e.preventDefault();

    const response = await fetch(
      `https://test-api-v3.myways.ai/user?email=${email}`
    );
    console.log(response);
    if (response.status === 200) {
      const resObject = await response.json();
      setIsTrue(true);
      setSucces(resObject.message);
      setIsTrue1(false);
      setError("");
    } else {
      setIsTrue(false);
      setIsTrue1(true);
      setSucces("");
      setError("User Not Found");
    }
  };
  return (
    <div className="First_container">
      <div className="card-container">
        <Link
          to="/"
          style={{ border: "none", textDecoration: "none", color: "pink" }}
        >
          <p>Home page--------></p>
        </Link>
        <h1 className="new__user__heading">Find The User</h1>
        <form onSubmit={formHandle}>
          <div style={{ marginBottom: 10, marginTop: 10 }}>
            <label>Email</label>
            <br />
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ padding: 10, marginTop: 5 }}
            />
          </div>
          <button
            type="submit"
            style={{
              backgroundColor: "red",
              padding: 10,
              border: "none",
              color: "white",
            }}
          >
            Submit
          </button>
          {isTrue && <p style={{ color: "green" }}>{success}</p>}
          {isTrue1 && <p style={{ color: "red" }}>User Not Found</p>}
        </form>
      </div>
    </div>
  );
};

export default GetUser;
