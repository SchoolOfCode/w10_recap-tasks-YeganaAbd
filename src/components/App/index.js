import "./App.css";
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Main from "../Main";
import Log from "../Log";
import Header from "../Header";

function App() {
  return (
    <div className="App">
      <Header htext="WikiPigeon" />
      <Routes>
        <Route path="/" element={<Log />} />
        <Route path="/article" element={<Main />} />
      </Routes>
      <nav className="nav-bar">
        <Link to="/article">Read Articles...</Link>
      </nav>
    </div>
  );
}

export default App;
