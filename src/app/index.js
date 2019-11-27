import React from "react";
import {render} from "react-dom";
import {Router, Route} from "react-router";
// import {Router, Route,  IndexRoute} from "react-router";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();


import {App} from "./App";
import {Home} from "./components/pages/Home";
import {User} from "./components/pages/User";

class Root extends React.Component {
    render() {
        return <Router history={history}>
        <Route path={"/"} component={App} >
        <Route path={"user/:id"} component={User} />
        <Route path={"home"} component={Home} />
        </Route>
        <Route path={"home-single"} component={Home}/>
        </Router>;
    }

}

render(<Root />, window.document.getElementById('root'));
console.log('index running');
