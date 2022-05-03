import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import "./App.css"
import Dialogs from "./components/Dialogs/Dialogs";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="app-wrap">
        <Header/>
        <Navbar/>
        <div className="app-wrap-content">
          <Routes>
            <Route path={"/dialogs"} element={<Dialogs/>}/>
            <Route path={"/profile"} element={<Profile/>}/>
            <Route path={"/music"} element={<Music/>}/>
            <Route path={"/news"} element={<News/>}/>
            <Route path={"/settings"} element={<Settings/>}/>
          </Routes>

        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;