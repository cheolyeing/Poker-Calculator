import React from "react";
import "./CSS/content.css";

function Content(props: any) {
  return (
    <div className="content_container">
      <h1>TITLE</h1>
      {props.menu}
    </div>
  );
}

export default Content;
