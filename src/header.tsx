import React from "react";
import { useHistory } from "react-router-dom";
import "./CSS/header.css";

function Header(props: any) {
  const history = useHistory();

  return (
    <header>
      <div className="header">
        <div
          className="icon"
          onClick={() => {
            clickMenu("home");
          }}
        ></div>
        <div className="menu_container">
          <div
            className="menu"
            onClick={() => {
              clickMenu("notice");
            }}
          >
            <h3 className="menu_txt">Notice</h3>
          </div>
          <div
            className="menu"
            onClick={() => {
              clickMenu("game");
            }}
          >
            <h3 className="menu_txt">Game</h3>
          </div>
          <div
            className="menu"
            onClick={() => {
              clickMenu("community");
            }}
          >
            <h3 className="menu_txt">Community</h3>
          </div>
          <div
            className="menu"
            onClick={() => {
              clickMenu("statistics");
            }}
          >
            <h3 className="menu_txt">Statistics</h3>
          </div>
        </div>
        <div
          className="settings"
          onClick={() => {
            clickMenu("setting");
          }}
        ></div>
        <div className="logout" onClick={clickLogout}></div>
      </div>
    </header>
  );

  function clickMenu(menu: string) {
    props.setMenu(menu);
  }

  function clickLogout() {
    history.push("");
  }
}

export default Header;
