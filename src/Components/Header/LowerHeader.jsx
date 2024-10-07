import React from "react";
import classes from "./Header.module.css";
import { AiOutlineMenu } from "react-icons/ai";
function LowerHeader() {
  return (
    <div className={classes.lower_container}>
      <ul>
        <li>
          <AiOutlineMenu />
          <p>ALL</p>
        </li>
        <li>Today's Deal's</li>
        <li>Customer Service</li>
        <li>Registry</li>
        <li>Gift Cards</li>
        <li>sell</li>
      </ul>
    </div>
  );
}

export default LowerHeader;
