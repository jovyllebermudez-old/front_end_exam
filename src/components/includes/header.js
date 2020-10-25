import React from "react";
import {
  //   BrowserRouter as Router,
  //   Switch,
  //   Route,
  useLocation,
  Link,
} from "react-router-dom";

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    // this.handleLogout = this.handleLogout.bind(this);
    // const location = useLocation();
    // this.path = location.pathname;
  }
  // handleLogout(event) {
  //   // alert('A name was submitted: ');
  //   event.preventDefault();
  //   this.props.handleLogout();
  //   // this.props.handleLogin.handleLogin();
  //   // localStorage.setItem("isLogged", "yes");
  //   // console.log(localStorage.getItem("isLogged"));
  //   // return <h1>asd</h1>;
  //   // <Redirect to="/" />;
  // }

  render() {
    // console.log(this.props.currentPath+"ASd");
    return (
      // <div>
      //   <ul>
      //     <li>
      //       <Link to="/">Close or Home</Link>
      //     </li>
      //     {this.props.isLogged != "no" ? (
      //       <li>
      //         <a onClick={() => this.handleLogout()}>Logout</a>
      //       </li>
      //     ) : (
      //       <>
      //         <li>
      //           <Link to="/login" asd="test">
      //             Login
      //           </Link>
      //         </li>
      //         {/* <li>
      //             <Link to="/register">Register</Link>
      //           </li> */}
      //       </>
      //     )}
      //   </ul>
      //   <hr />
      // </div>
      // <div>
      //   <header>
      //     <div class="wrapper2">
      //       <div class="header_cont">
      //         <div class="logo_cont">
      //           <img src="assets/images/logo.png" alt="logo" />
      //         </div>
      //         <div class="login_btn">
      //           {this.props.isLogged != "no" ? (
      //             <li>
      //               <a href="javascript:;" onClick={() => this.handleLogout()}>
      //                 Logout
      //               </a>
      //             </li>
      //           ) : (
      //             <>
      //               <li>
      //                 <Link to="/login" asd="test">
      //                   Login
      //                 </Link>
      //               </li>
      //               {/* <li>
      //                       <Link to="/register">Register</Link>
      //                     </li> */}
      //             </>
      //           )}
      //         </div>
      //         <div class="clearfix"></div>
      //       </div>
      //     </div>
      //   </header>
      // </div>

      <header>
        <div className="wrapper2">
          <div className="header_cont">
            <div className="logo_cont">
              <img
                src={window.location.origin + "/assets/images/logo.png"}
                alt="logo"
              />
            </div>
            <div className="login_btn">
              {this.props.isLogged != "no" ? (
                <a
                  href="javascript:;"
                  onClick={() => this.props.handleLogout()}
                >
                  Logout
                </a>
              ) : this.props.currentPath == "/login" ? (
                <>
                  <Link to="/">Close</Link>
                </>
              ) : (
                <>
                  <Link to="/login">Login</Link>
                </>
              )}
            </div>
            <div className="clearfix"></div>
          </div>
        </div>
      </header>
    );
  }
}
