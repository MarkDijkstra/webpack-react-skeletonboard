import React from "react";
import {Header} from "./components/layouts/Header";
import {Footer} from "./components/layouts/Footer";

export class App extends React.Component {
    render() {
        return <div class="container__main">
        <Header />
            <div class="content-main">
                <div class="content-main__inner">
                    {this.props.children}
                </div>
            </div>
            <Footer />
        </div>;
    }
}

console.log('header running');