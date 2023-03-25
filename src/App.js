import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import GetUser from "./GetUser";

import Home from "./Home";

import NewUser from "./NewUser";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/newuser" exact element={<NewUser />} />
          <Route path="/getuser" exact element={<GetUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
