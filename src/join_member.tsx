import React, { useState } from "react";
import "./CSS/join_member.css";

function Join_Member() {
  const [id, setID] = useState<string>("");
  const [pw, setPW] = useState<string>("");
  const [cpw, setCPW] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [nickname, setNickname] = useState<string>("");

  return (
    <div>
      <div className="logo"></div>
      <div className="container">
        <div className="content">
          <h3 className="join_title">ID</h3>
          <h3 className="info_check">{id === "" ? "enter ID" : ""}</h3>
          <div className="inp_join">
            <input
              className="inp_id"
              onChange={(e) => {
                setID(e.target.value);
              }}
              type="id"
              value={id}
              placeholder="로그인 아이디"
            />
          </div>
          <h3 className="join_title">PASSWORD</h3>
          <h3 className="info_check">{pw === "" ? "enter PW" : ""}</h3>
          <div className="inp_join">
            <input
              className="inp_pw"
              onChange={(e) => {
                setPW(e.target.value);
              }}
              type="password"
              value={pw}
              placeholder="로그인 비밀번호"
            />
          </div>
          <h3 className="join_title">CHECK PASSWORD</h3>
          <h3 className="info_check">
            {pw === cpw ? "" : "password not matched!"}
          </h3>
          <div className="inp_join">
            <input
              className="inp_pw"
              onChange={(e) => {
                setCPW(e.target.value);
              }}
              type="password"
              value={cpw}
              placeholder="비밀번호 확인"
            />
          </div>

          <h3 className="join_title">NAME</h3>
          <h3 className="info_check">{name === "" ? "enter Name" : ""}</h3>
          <div className="inp_join">
            <input
              className="inp_id"
              onChange={(e) => {
                setName(e.target.value);
              }}
              type="id"
              value={name}
              placeholder="한국어로 입력해주세요."
            />
          </div>

          <h3 className="join_title">NICK NAME</h3>
          <h3 className="info_check">
            {nickname === "" ? "enter Nickname" : ""}
          </h3>
          <div className="inp_join">
            <input
              className="inp_id"
              onChange={(e) => {
                setNickname(e.target.value);
              }}
              type="id"
              value={nickname}
              placeholder="Poker Stars 아이디를 입력해주세요."
            />
          </div>
          <div className="inp_join"></div>
          <button
            className="btn_area"
            onClick={() => {
              createAccount(id, pw, cpw, name, nickname);
            }}
          >
            CREATE ACCOUNT
          </button>
        </div>
      </div>
    </div>
  );
}

function createAccount(
  id: string,
  pw: string,
  cpw: string,
  name: string,
  nickname: string
) {
  if (id === "") {
    alert("Please Enter ID");
  } else if (pw === "") {
    alert("Please Enter PW");
  } else if (pw !== cpw) {
    alert("Please Check your PW");
  } else if (name === "") {
    alert("Please Enter Name");
  } else if (nickname === "") {
    alert("Please Enter Nickname");
  } else {
    var json = { id: id, pw: pw };
    localStorage.setItem("memaberInfo", JSON.stringify(json));
    alert("Account Created!");
    window.location.href = "/";
  }
}

export default Join_Member;
