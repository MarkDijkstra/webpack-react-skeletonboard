import React from "react";
import {Link} from "react-router-dom";

export const Header = (props) => {
    return <div class="header-main">
               <div class="header-main__inner" role="banner">
                    <div class="header-main__logo">
                     Skeleton
                    </div>
                    <div class="header-main__nav">
                        <nav>
                            <Link to={"/home"}>Home</Link>
                            <Link to={"/pages"}>Pages</Link>
                            <Link to={"/users"}>Users</Link>
                        </nav>
                        <div class="header-main__user">
                           <span>
                              <img src="./assets/images/user.jpg"/>
                           </span>
                        </div>
                    </div>
               </div>
           </div>;
};