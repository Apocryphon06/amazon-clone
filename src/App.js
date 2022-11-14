import React from "react";
import { Route, Routes } from "react-router-dom";
import classes from "./App.module.css";

import Login from "./components/Login/Login";
import Home from "./pages/Home/Home";

function App() {
  return (
    <Routes>
      <Route
        path="/login"
        element={
          <div className={classes.container}>
            <Login />
          </div>
        }
      ></Route>
      <Route path="/" element={<Home />}></Route>
    </Routes>
  );
}

export default App;
