import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import "./App.css"
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {StoreType} from "./redux/store";
import DialogsContainer from "./components/Dialogs/DialogsContainer";


type AppPropsType = {
  store: StoreType
}

function App(props: AppPropsType) {
  return (
    <BrowserRouter>
      <div className="app-wrap">
        <Header/>
        <Navbar/>
        <div className="app-wrap-content">
          <Routes>
            <Route path={"/dialogs"}
                   element={<DialogsContainer
                     store={props.store}
                   />}/>
            <Route path={"/profile"}
                   element={<Profile
                     store={props.store}
                   />}/>

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