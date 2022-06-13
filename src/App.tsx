import React from "react";
import {ChakraProvider} from '@chakra-ui/react'
import "./App.css"
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import {Route, Routes} from "react-router-dom";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import HeaderWithAction from "./components/HeaderWithActionType/HeaderWithActionType";
import {MainImage} from "./components/MainImage/MainImage";
import {ProfileContainer} from "./components/Profile/ProfileContainer";

function App() {
  return (
    <ChakraProvider>
      <HeaderWithAction/>
      <div className="app-wrap">
        <div className="app-wrap-content">
          <Routes>
            <Route path="/" element={<MainImage/>}/>
            <Route path="/main" element={<MainImage/>}/>
            <Route path={"/dialogs"}
                   element={<DialogsContainer/>}/>
            <Route path={"/profile"}
                   element={<ProfileContainer/>}/>
            <Route path={"/music"} element={<Music/>}/>
            <Route path={"/news"} element={<News/>}/>
            <Route path={"/settings"} element={<Settings/>}/>
          </Routes>
        </div>
      </div>
    </ChakraProvider>
  );
}

export default App;