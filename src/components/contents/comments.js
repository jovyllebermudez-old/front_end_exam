import React from "react";
import {
  //   BrowserRouter as Router,
  //   Switch,
  //   Route,
  Link,
  // useParams,
} from "react-router-dom";

export default class Comments extends React.Component {
  constructor(props) {
    super(props);
    // this.removeFile = this.removeFile.bind(this);
    this.state = {
      current_comment: "",
      comments: [],
    };
    this.comments_array = [];

    // localStorage.setItem("comments", JSON.stringify(""));
    // if (localStorage.getItem("comments")) {
    //   this.state.comments_array = JSON.parse(localStorage.getItem("comments"));
    // }
  }
  addComment() {
    console.log(1);
    console.log(this.comments_array);
    this.comments_array.push({
      id: this.props.id,
      time: new Date().getTime(),
      text: this.state.current_comment,
    });
    this.setState({ comments: this.comments_array });
    //     const currDate = new Date('Tue Feb 13 2018 13:04:58 GMT+0200 (EET)')
    // const oldDate  = new Date('Tue Feb 13 2018 12:00:58 GMT+0200 (EET)')
    // (currDate - oldDate) / 60000 // 64
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  render() {
    console.log("this.comments_array");
    console.log(this.comments_array);
    console.log(this.state);
    return (
      <div id="comments">
        <div class="wrapper">
          <div class="comments_cont">
            <div class="wrapper2">
              <h2 data-v-0d061477="">Comments</h2>
              <div class="comment_con">
                {this.state.comments.map((item) => (
                  <div class="comment_sect">
                    <p data-v-0d061477="">{item.text}</p>
                    <div class="comment_date">
                      {(Math.floor(
                        ((new Date().getTime() - item.time) %
                          (1000 * 60 * 60)) /
                          (1000 * 60)
                      )<=0)?"Just now":Math.floor(
                        (
                          (new Date().getTime() - item.time) %
                          (1000 * 60 * 60)) /
                          (1000 * 60)
                        )+" Minutes has passed"
                        }
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div class="comment_form">
            <textarea
              value={this.state.current_comment}
              name="current_comment"
              onChange={(target) => this.handleChange(target)}
              placeholder="Write Comment"
            />
            <div class="btn_container">
              <button onClick={() => this.addComment()}>Submit</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
