import React from "react";
import {Header} from "./components/layouts/Header";

export class App extends React.Component {
    render() {
        return <div className="container">
            <div className="row">
            <div className="col-xs-10 col-xs-offset-1">
            <Header />
            </div>
            </div>
            <hr/>
            <div className="row">
            <div className="col-xs-10 col-xs-offset-1">
            {this.props.children}
            </div>
            </div>
            </div>;
    }
}

console.log('header running');