import logo from "./../images/logo.png";
import React from "react";
import "./Header.css"


const Header = ()=>{
  return(
    <header className="header">
      <img src={logo} width={100}
           alt="logo"/>
    </header>
  )
}
export default Header