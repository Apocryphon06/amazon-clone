import React from "react";
import { Route, Routes } from "react-router-dom";
import classes from "./App.module.css";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";

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
      <Route
        path="/"
        element={
          <Home/>
        }
      ></Route>
    </Routes>
  );
}

export default App;
