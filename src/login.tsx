import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./CSS/login.css";

const localStorageKey = "memberInfo";

const initInfo = loadFromLocalStorage();

function Login() {
  const history = useHistory();
  const [id, setID] = useState<string>(initInfo[0]);
  const [pw, setPW] = useState<string>(initInfo[1]);
  const [remember, setRemember] = useState<boolean>(initInfo[2]);

  return (
    <div>
      <div className="logo"></div>

      <div className="container">
        <div className="content">
          <div className="inp_area">
            <div className="inp_txt">
              <input
                className="inp_id"
                onChange={(e) => {
                  setID(e.target.value);
                }}
                value={id}
                type="id"
                placeholder="ID"
              />
              <div
                className="txt_clear"
                onClick={() => {
                  setID("");
                }}
              >
                ❌
              </div>
            </div>
            <div className="inp_txt">
              <input
                className="inp_pw"
                onChange={(e) => {
                  setPW(e.target.value);
                }}
                value={pw}
                type="password"
                placeholder="PASSWORD"
              />
              <div
                className="txt_clear"
                onClick={() => {
                  setPW("");
                }}
              >
                ❌
              </div>
            </div>
          </div>
          <div className="chk_area">
            <input
              className="chk_box"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
              type="checkbox"
            />
            <div className="chk_detail">REMEMBER USER ID/PW</div>
          </div>
          <button className="btn_area" onClick={clickLogIn}>
            LOG IN
          </button>
          <Link to="/join_check">
            <button className="btn_area">JOIN MEMBER</button>
          </Link>
        </div>
      </div>
    </div>
  );

  function clickLogIn() {
    if (id === "admin" && pw === "1234") {
      saveAtLocalStorage(remember, id, pw);
      console.log("YES");
      history.push("home");
    }
  }
}

function loadFromLocalStorage(): Array<any> {
  var loadedInfo = localStorage.getItem(localStorageKey);
  if (loadedInfo != null) {
    var memberInfo = JSON.parse(loadedInfo);

    return [memberInfo.id, memberInfo.pw, true];
  } else return ["", "", false];
}

function saveAtLocalStorage(remember: boolean, id: string, pw: string): void {
  if (remember) {
    var json = { id: id, pw: pw };
    localStorage.setItem(localStorageKey, JSON.stringify(json));
  } else {
    localStorage.removeItem(localStorageKey);
  }
}

export default Login;
