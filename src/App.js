import React, { useState } from "react";
import "./App.css";
import MyCounter from "./components/MyCounter";
import MyUser from "./components/MyUser";

function App() {
  return (
    <div className="App">
      <MyCounter />
      <MyUser />
    </div>
  );
}

export default App;
