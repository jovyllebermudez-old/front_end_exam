import React from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
import Posts from "./posts";

export default function () {
  return (
    <div>
      <div>
        <div id="banner">
          <div class="wrapper">
            <div class="brn_cont"></div>
          </div>
        </div>
      </div>
      <Posts state={this.props.state} />
    </div>
  );
}
