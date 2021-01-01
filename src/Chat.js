import React from "react";
import Chatheader from "./Chatheader.js";

import "./chat.css";
import {
  AddCircle,
  CardGiftcard,
  EmojiEmotions,
  Gif,
} from "@material-ui/icons";

import Message from "./Message.js";

export default function Chat() {
  return (
    <div className="chat">
      <Chatheader />

      <div className="chat__messages">
        <Message />
      </div>

      <div className="chat__input">
        <AddCircle />
        <form>
          <input placeholder="{}" />
          <button className="chat__inputbtn" type="submit">
            Send Message
          </button>
        </form>

        <div className="chat__inputIcons">
          <CardGiftcard fontSize="large" />
          <Gif fontSize="large" />
          <EmojiEmotions fontSize="large" />
        </div>
      </div>
    </div>
  );
}
