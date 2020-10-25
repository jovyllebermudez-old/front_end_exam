import React from "react";
import {
  //   BrowserRouter as Router,
  //   Switch,
  //   Route,
  Link,
} from "react-router-dom";

export default class breadcrumbs extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="breadcrumbs">
        <div class="wrapper">
          <div class="bread_cont">
            <div class="wrapper2">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                  <span class="sparator">&gt;</span>
                </li>
                <li class="pst_name">
                  {this.props.title
                    ? this.props.title
                    : "サンプルテキストサンプルルテキストサンプルテキストサンプルテキストサンプル ルテキスト"}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
