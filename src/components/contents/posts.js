import React from "react";
import {
  //   BrowserRouter as Router,
  //   Switch,
  //   Route,
  useHistory,
  Link,
} from "react-router-dom";

// <div>
//   <hr />
//   <h2>News</h2>
//   <ul>
//     <li>
//       <Link to="/post">News 1</Link>
//     </li>
//     <li>
//       <Link to="/post">News 1</Link>
//     </li>
//     <li>
//       <Link to="/post">News 1</Link>
//     </li>
//   </ul>

// </div>

// <style scoped>
// .create_post_cont {
//   text-align: right;
//   position: relative;
//   top: -113px;
// }
// .create_post_cont a {
//   color: #111;
// }
// .create_post_cont a:hover {
//   text-decoration: underline;
// }
// </style>

export default class Banner extends React.Component {
  constructor(props) {
    super(props);
    // this.loadMore = this.loadMore.bind(this);
    // this.loadMore = this.redirect.bind(this);
    // this.state = {
    //   active: false,
    //   current_banner_image: 1,
    //   number_of_banner_image: 4,
    // };
  }
  // loadMore() {
  //   this.props.loadMoreHandler();
  // }

  // redirect() {
  //   const history = useHistory();
  //   this.history.push("/home");
  // }

  render() {
    console.log(" I am this.props");
    console.log(this.props);
    let counter = 0;
    return (
      <div class="content">
        {/* <div class="content_head head1_font">NEWS</div> */}
        <div class="main_top">
          <h1 class="h1_title">News</h1>
          {this.props.state ? (
            this.props.state.isLogged == "yes" ? (
              <div class="create_post_cont">
                <Link to="/post_create">Create Post</Link>
              </div>
            ) : null
          ) : null}
        </div>
        <div class="content_body">
          {JSON.parse(localStorage.getItem("posts")).map((item) => (
            <Link
              to={"/post/" + item.id}
              class={
                this.props.state.loadMore == "no"
                  ? counter >= 6
                    ? "display_hide"
                    : (counter = counter + 1)
                  : null
              }
            >
              <div class={"post_data "}>
                <img
                  src={
                    item.image ==
                    window.location.origin + "/assets/images/post_img1.jpg"
                      ? window.location.origin + "/assets/images/post_img.jpg"
                      : item.image
                  }
                  alt="post image"
                />
                {/* <img src={item.image} alt="post image" /> */}
                <div class="content_txt">
                  <span class="cont_date">2019.10.20</span>
                  <p>{item.title}</p>
                </div>
              </div>
            </Link>
          ))}
          {/* <Link to="/post">
            <div class="post_data">
              <img src="assets/images/post_img.jpg" alt="post image" />
              <div class="content_txt">
                <span class="cont_date">2019.10.20</span>
                <p>
                  サンプルテキストサンプル
                  ルテキストサンプルテキストサンプルテキストサンプル ルテキスト
                </p>
              </div>
            </div>
          </Link> */}
        </div>
        <div class="load_more_cont">
          <button onClick={() => this.props.loadMoreHandler()}>
            {" "}
            Load More{" "}
          </button>
        </div>
      </div>
    );
  }
}
