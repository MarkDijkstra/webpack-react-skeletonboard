import React from "react";
import { NavLink } from "react-router-dom";

export const Header = (props) => {

    return  <div className="header-main">
                <div className="header-main__inner" role="banner">
                    <div className="header-main__logo">
                    Skeleton
                    </div>
                    <div className="header-main__nav">
                        <nav>
                        <NavLink activeClassName='active__nav' exact to="/">Home</NavLink>
                        <NavLink activeClassName='active__nav' to="/pages">Pages</NavLink>
                        <NavLink activeClassName='active__nav' to="/users">Users</NavLink>
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