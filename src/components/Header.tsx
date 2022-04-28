import logo from "./../images/logo.png";
import React from "react";

const Header = ()=>{
  return(
    <header className="header">
      <img src={logo} width={100}
           alt="logo"/>
    </header>
  )
}
export default Header