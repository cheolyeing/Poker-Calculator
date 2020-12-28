import React, { useState } from "react";
import "./CSS/join_check.css";

const INVITE_CODE = "limi";

function Join_Check() {
  const [code, setCode] = useState<string>("");

  return (
    <div>
      <div className="logo"></div>
      <div className="container">
        <div className="content">
          <input
            className="inp_code"
            value={code}
            onChange={(e) => {
              setCode(e.target.value);
            }}
            placeholder="Enter Invite Code"
          />
          <button className="btn_area" onClick={() => checkCode(code)}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

function checkCode(code: string) {
  if (code === INVITE_CODE) {
    window.location.href = "join_member";
  } else {
    alert("Invite Code does not matched");
  }
}

export default Join_Check;
