import { Avatar } from "@material-ui/core";
import React from "react";
import "./message.css";

export default function Message() {
  return (
    <div className="message">
      <Avatar />
      <div className="message__info">
        <h4>
          Scorpion{" "}
          <span className="message__timestamp">Thsi is a time stamp</span>
        </h4>

        <p>This is a meassage</p>
      </div>
    </div>
  );
}
