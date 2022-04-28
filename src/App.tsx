import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Profile from "./components/Profile";
import "./App.css"

function App() {
  return (
    <div className="app-wrap">
      <Header/>
      <Navbar/>
      <Profile/>
    </div>
  );
}
export default App;