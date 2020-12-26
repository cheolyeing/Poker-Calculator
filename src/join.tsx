import React, { useState } from "react";
import join_main from "./images/join_main.jpg";

function SaveAtLocalStorage(id: string, pw: string): void {}

function LoadFromLocalStorage(id: string, pw: string): string {
  return "";
}

function Join() {
  const [id, setID] = useState<string>("");
  const [pw, setPW] = useState<string>("");
  const [remember, setRemember] = useState<boolean>(false);

  return (
    <div className="container">
      <div className="content">
        <img src={join_main} alt="error" />
        <div className="inp_area">
          <div className="inp_txt">
            <input
              className="inp_id"
              onChange={(e) => {
                setID(e.target.value);
              }}
              type="id"
              placeholder="ID"
            />
            <div className="txt_clear">❌</div>
          </div>
          <div className="inp_txt">
            <input
              className="inp_pw"
              onChange={(e) => {
                setPW(e.target.value);
              }}
              type="password"
              placeholder="PASSWORD"
            />
            <div className="txt_clear">❌</div>
          </div>
        </div>
        <div className="chk_area">
          <input
            className="chk_box"
            onChange={(e) => setRemember(e.target.checked)}
            type="checkbox"
          />
          <div className="chk_detail">REMEMBER USER ID/PW</div>
        </div>
        <div className="btn_area" onClick={clickLogIn}>
          LOG IN
        </div>
      </div>
    </div>
  );

  function clickLogIn() {
    console.log("ID", id);
    console.log("PW", pw);
    console.log("REMEMBER", remember);
  }
}

export default Join;
