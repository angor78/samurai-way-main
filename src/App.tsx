import React from "react";
import { ChakraProvider} from '@chakra-ui/react'
import Profile from "./components/Profile/Profile";
import "./App.css"
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {StoreType} from "./redux/store";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import HeaderWithAction from "./components/HeaderWithActionType/HeaderWithActionType";
import {MainImage} from "./components/MainImage/MainImage";


type AppPropsType = {
  store: StoreType
}

function App(props: AppPropsType) {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <HeaderWithAction/>
        <div className="app-wrap">
          <div className="app-wrap-content">
            <Routes>
              <Route path="/" element={<MainImage/>}/>
              <Route path="/main" element={<MainImage/>}/>
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
    </ChakraProvider>
  );
}

export default App;