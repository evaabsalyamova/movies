import React from "react";
import "./styles.css";
import NavigationBlock from "./NavigationBlock";
import { Outlet } from "react-router-dom";

const AppHeader = () => {
  return (
    <>
      <div className="appHeader">
        <div className="appName">MOVIE</div>
        <NavigationBlock />
      </div>
      <Outlet />
    </>
  );
};

export default AppHeader;
