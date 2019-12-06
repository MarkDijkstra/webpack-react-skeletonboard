import React from "react";
import {NavLink, Route, Switch} from "react-router-dom";

import {SubHeaderHome} from "./headers/Home";
import {SubHeaderPages} from "./headers/Pages";
import {SubHeaderUsers} from "./headers/Users";

export const Header = (props) => {

    return  <div className="header-main">
                <div className="header-main__top">
                    <div className="x3_container-fluid" role="banner">
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
                </div>
                <div className="header-main__bottom">
                    <Switch>
                        <Route path="/" exact component={SubHeaderHome}/>
                        <Route path="/pages" exact component={SubHeaderPages}/>
                        <Route path="/users" exact component={SubHeaderUsers}/>
                    </Switch>
                </div>
            </div>;
};