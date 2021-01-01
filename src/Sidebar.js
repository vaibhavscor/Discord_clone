import React, { useState, useEffect } from "react";
import "./sidebar.css";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";

import Sidebarchannel from "./Sidebarchannel.js";

import SignalCellularAltIcon from "@material-ui/icons/SignalCellularAlt";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import CallIcon from "@material-ui/icons/Call";

import { Avatar } from "@material-ui/core";
import MicIcon from "@material-ui/icons/Mic";
import HeadsetIcon from "@material-ui/icons/Headset";
import SettingsIcon from "@material-ui/icons/Settings";
import { useSelector } from "react-redux";
import { selectuser } from "./features/userSlice";
import db, { auth } from "./Firebase";

export default function Sidebar() {
  const user = useSelector(selectuser);
  const [channels, setchannels] = useState([]);

  const Handelatchannel = () => {
    const channelName = prompt("enter a new channel name");
  };

  useEffect(() => {
    db.collection("channels").onSnapshot((snapshot) =>
      setchannels(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          channel: doc.data(),
        }))
      )
    );
  }, []);

  return (
    <div className="sildebar">
      This is sidebar
      <div className="sidebar__top ">
        <h2>This is awesome</h2>
        <ExpandMoreIcon />
      </div>
      <div className="sidebar__channels">
        {/* 1 */}
        <div className="sidebar__channelsHeader">
          <div className="sidebar__header">
            <ExpandMoreIcon />
            <h4>Text Channels</h4>
          </div>

          <AddIcon className="sidebar_addchannel" onClick={Handelatchannel} />
        </div>

        {/* 2 */}
        <div className="sidebar__channelsList">
          {channels.map((channel) => (
            <Sidebarchannel />
          ))}
        </div>
      </div>
      {/* 3 */}
      <div className="sidebar__voice">
        <SignalCellularAltIcon className="sidebar_voiceIcon" fontSize="large" />

        <div className="sidebar__voiceInfo">
          <h3>Voice Connected</h3>
          <p>Stream</p>
        </div>

        <div className="sidebar__voiceIcons">
          <InfoOutlinedIcon />
          <CallIcon />
        </div>
      </div>
      {/* 4 */}
      <div className="sidebar__profile">
        <Avatar src={user.photo} onClick={() => auth.signOut()} />
        <div className="sidebar__profileInfo">
          <h3>{user.displayName}</h3>
          <p>#{user.uid}</p>
        </div>
        <div className="sidebar__profileIcons">
          <MicIcon />
          <HeadsetIcon />
          <SettingsIcon />
        </div>
      </div>
    </div>
  );
}
