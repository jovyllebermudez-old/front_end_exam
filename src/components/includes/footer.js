import React from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";


export default function() {
  return (
    // <footer>
    //   <div class="wrapper">
    //     <div class="ftr_cont">
    //       <div class="ftr_top">
    //         <div class="wrapper2">
    //           <div class="ftr_txt">
    //             <figure>
    //               <img src="assets/images/logo2.png" alt="logo" />
    //             </figure>
    //             <p>
    //               サンプルテキストサンプル
    //               ルテキストサンプルテキストサンプルテキストサンプル ルテキスト
    //             </p>
    //           </div>
    //           <span class="bck_top">Top <img src="assets/images/arr-top.png" alt="arrow"
    //           /></span>
    //         </div>
    //       </div>
    //       <div class="ftr_btm">
    //         <div class="wrapper2">
    //           <span class="copyright">asdasd</span>
    //         </div>
    //       </div>
    //     </div>
    //     <div class="ftr_fixed"></div>
    //   </div>
    // </footer>
    <footer>
      <div class="wrapper">
        <div class="ftr_cont">
          <div class="ftr_top">
            <div class="wrapper2">
              <div class="ftr_txt">
                <figure>
                  <img src="assets/images/logo2.png" alt="logo" />
                </figure>
                <p>
                  {" "}
                  サンプルテキストサンプル
                  ルテキストサンプルテキストサンプルテキストサンプル ルテキスト{" "}
                </p>
              </div>
              <span
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
                class="bck_top"
              >
                Top <img  src="assets/images/arr-top.png" alt="arrow" />
              </span>
            </div>
          </div>
          <div class="ftr_btm">
            <div class="wrapper2">
              <span class="copyright">Copyright©2017-2019 Blog Inc.</span>
            </div>
          </div>
        </div>
        <div class="ftr_fixed"></div>
      </div>
    </footer>
  );
}