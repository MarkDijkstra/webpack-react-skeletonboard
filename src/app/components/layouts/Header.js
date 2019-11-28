import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

// export const Header = (props) => {
// //     return <div class="header-main">
// //                <div class="header-main__inner" role="banner">
// //                     <div class="header-main__logo">
// //                      Skeleton
// //                     </div>
// //                     <div class="header-main__nav">
// //                         <nav>
// //                             <Link to={"/home"}>Home</Link>
// //                             <Link to={"/pages"}>Pages</Link>
// //                             <Link to={"/users"}>Users</Link>
// //                         </nav>
// //                         <div class="header-main__user">
// //                            <span>
// //                               <img src="./assets/images/user.jpg"/>
// //                            </span>
// //                         </div>
// //                     </div>
// //                </div>
// //            </div>;
// // };

// export const Header = (props) => {
//     return (
//         <Router>
//               <nav>
//         <ul>
//         <li>
//         <Link to="/">Home</Link>
//         </li>
//         <li>
//         <Link to="/about">About</Link>
//         </li>
//         <li>
//         <Link to="/users">Users</Link>
//         </li>
//         </ul>
//         </nav>
//         </Router>);
// }

//
export const Header = (props) => {

    return  <div className="header-main">
                <div className="header-main__inner" role="banner">
                    <div className="header-main__logo">
                    Skeleton
                    </div>
                    <div className="header-main__nav">
                        <nav>
                        <Link to="/" >Home</Link>
                        <Link to="/pages">Pages</Link>
                        <Link to="/users">Users</Link>
                        </nav>
                        <div className="header-main__user">
                            <span>
                                <img src="./assets/images/user.jpg"/>
                            </span>
                        </div>
                    </div>
                </div>
            </div>;
};