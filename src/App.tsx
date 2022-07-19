import React from "react";
import {ChakraProvider} from '@chakra-ui/react'
import "./App.css"
import Music from "./components/Music/Music";
import News from "./components/News/News";
import {Login} from "./components/Login/Login";
import Settings from "./components/Settings/Settings";
import {Route, Routes} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {MainImage} from "./components/MainImage/MainImage";
import ProfileContainer from "./components/Profile/ProfileContainer";
import {UsersContainer} from "./components/Users/UsersContainer";
import {HeaderContainer} from "./components/Header/HeaderContainer";

function App() {
  return (
    <ChakraProvider>
      <HeaderContainer/>
      <div className="app-wrap">
        <div className="app-wrap-content">
          <Routes>
            <Route path="/" element={<MainImage/>}/>
            <Route path="/main" element={<MainImage/>}/>
            <Route path={"/dialogs"}
                   element={<DialogsContainer/>}/>
            <Route path={"/users"}
                   element={<UsersContainer/>}/>
            <Route path={'/profile/:userId'}
                   element={<ProfileContainer />}/>
            <Route path={"/music"} element={<Music/>}/>
            <Route path={"/news"} element={<News/>}/>
            <Route path={"/settings"} element={<Settings/>}/>
            <Route path={"/login"} element={<Login/>}/>
          </Routes>
        </div>
      </div>
    </ChakraProvider>
  );
}

export default App;