import React from "react";
import {ChakraProvider, CircularProgress, Progress} from '@chakra-ui/react'
import "./App.css"
import Music from "./components/Music/Music";
import News from "./components/News/News";
import {Login} from "./components/Login/Login";
import {Settings} from "./components/SettingsProfile/Settings";
import {Route, Routes} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {MainImage} from "./components/MainImage/MainImage";
import ProfileContainer from "./components/Profile/ProfileContainer";
import {UsersContainer} from "./components/Users/UsersContainer";
import {HeaderContainer} from "./components/Header/HeaderContainer";
import {connect} from "react-redux";
import {AppStateType} from "./redux/redux-store";
import {inititializeApp} from "./redux/app-reducer";


class App extends React.Component<AppClassContainerType> {
  componentDidMount() {
    this.props.inititializeApp()
  }

  render() {

    if (!this.props.initialized) {
      return (
        <ChakraProvider>
          <CircularProgress isIndeterminate color='teal.300' size='220px'/>
        </ChakraProvider>
      )
    }

    return (
      <ChakraProvider>
        <HeaderContainer/>
        <div className="app-wrap">
          <div className="app-wrap-content">
            <Routes>
              <Route path="/samurai-way-main/" element={<MainImage/>}/>
              <Route path={"/samurai-way-main/dialogs"}
                     element={<DialogsContainer/>}/>
              <Route path={"/samurai-way-main/users"}
                     element={<UsersContainer/>}/>
              <Route path={'/samurai-way-main/profile/:userId'}
                     element={
                         <ProfileContainer/>
                     }/>
              <Route path={"/samurai-way-main/music"} element={<Music/>}/>
              <Route path={"/samurai-way-main/news"} element={<News/>}/>
              <Route path={"/samurai-way-main/settings"} element={<Settings/>}/>
              <Route path={"/samurai-way-main/login"} element={<Login/>}/>
            </Routes>
          </div>
        </div>
      </ChakraProvider>
    )
  }
}

type MapStatePropsType = {
  initialized: boolean
  isAuth: boolean
}
type MapDispatchPropsType = {
  inititializeApp: () => void
}
export type AppClassContainerType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: AppStateType) => {
  return {initialized: state.app.initialized, isAuth: state.auth.isAuth}
}
export default connect(mapStateToProps, {inititializeApp})(App)
