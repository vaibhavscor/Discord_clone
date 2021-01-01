import {
  EditLocationRounded,
  HelpRounded,
  Notifications,
  SearchRounded,
  SendRounded,
} from "@material-ui/icons";
import React from "react";

import "./chatheader.css";

import PeopleAltRounded from "@material-ui/icons/PeopleAltRounded";

export default function Chatheader() {
  return (
    <div className="chatheader">
      {/* left */}
      <div className="chatheader__left">
        <h3>
          <span className="chatheader__hash">#</span>
          Test Channel Name
        </h3>
      </div>

      {/* right */}
      <div className="chatheader__right">
        <Notifications />
        <EditLocationRounded />
        <PeopleAltRounded />

        <div className="chatheader__search">
          <input placeholder="Search" />
          <SearchRounded />
        </div>

        <SendRounded />
        <HelpRounded />
      </div>
    </div>
  );
}
