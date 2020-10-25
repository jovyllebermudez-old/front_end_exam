import React, { useState } from "react";
import Routes from "./routes";
import Layout from "./layout";

import './css/global.css';

export default class App extends React.Component {
  render() {
    return <Routes />;
    // return <Layout />;
  }
}
