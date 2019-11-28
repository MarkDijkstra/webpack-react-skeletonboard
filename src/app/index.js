import React from "react";
import {render} from "react-dom";
import {Router, Route} from "react-router";
// import {Router, Route,  IndexRoute} from "react-router";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

import {App} from "./App";
import {Home} from "./components/pages/Home";
import {Users} from "./components/pages/Users";
import {Pages} from "./components/pages/Pages";

class Root extends React.Component {
    render() {
        return <Router history={history}>
        <Route path={"/"} component={App} >
            <Route path={"users/:id"} component={Users} />
            <Route path={"home"} component={Home} />
            <Route path={"pages"} component={Pages} />
        </Route>
        <Route path={"home-single"} component={Home}/>
        </Router>;
    }

}

render(<Root />, window.document.getElementById('root'));
console.log('index running');
