import React, { useState } from "react";
import Banner from "./components/contents/banner"
import Posts from "./components/contents/posts";
import Header from "./components/includes/header"
import Footer from "./components/includes/footer";

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="wrapper">
        <Header />
        <div class="container">
          <Banner />
          <Posts />
        </div>
        <Footer />
      </div>
    );
  }
}
