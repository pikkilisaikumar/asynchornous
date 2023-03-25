import React, { useState } from "react";

import { Link } from "react-router-dom";

import "./App.css";

const NewUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const formHandle = async (e) => {
    e.preventDefault();
    const newUser = {
      name: name,
      email: email,
      phone: phone,
    };

    console.log(newUser);
    console.log(JSON.stringify(newUser));
    const extraInformation = {
      method: "POST",
      body: JSON.stringify(newUser),
    };
    const response = await fetch(
      "https://test-api-v3.myways.ai/user",
      extraInformation
    );

    console.log(await response.json());

    if (response.ok === true) {
      const responseData = await response.json();
      alert(responseData.message);
    } else {
      alert("User Already Existed");
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
        <h1 className="new__user__heading">New User</h1>
        <form onSubmit={formHandle}>
          <div style={{ marginBottom: 10, marginTop: 10 }}>
            <label>Name</label>
            <br />
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              value={name}
              style={{ padding: 10, marginTop: 5 }}
            />
          </div>
          <div style={{ marginBottom: 10 }}>
            <label>Email</label>
            <br />
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ padding: 10, marginTop: 5 }}
            />
          </div>
          <div style={{ marginBottom: 10 }}>
            <label>Phone Number</label>
            <br />
            <input
              type="number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
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
        </form>
      </div>
    </div>
  );
};

export default NewUser;
