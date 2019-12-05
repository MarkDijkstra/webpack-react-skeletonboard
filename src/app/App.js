import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";

import {Header}   from "./components/layouts/Header";
import {Main}     from "./components/layouts/Main";
import {Footer}   from "./components/layouts/Footer";
import {Home}     from "./components/pages/Home";
import {Users}    from "./components/pages/Users";
import {Pages}    from "./components/pages/Pages";
import {NotFound} from "./components/pages/NotFound";

export class App extends React.Component {
    render() {
        return (
            <Router>
                <Header/>
                <Main>
                    <Switch>
                        <Route path="/" exact component={Home}/>
                        <Route path="/users" component={Users}/>
                        <Route path="/pages" component={Pages}/>
                        <Route component={NotFound} />
                    </Switch>
                </Main>
                <Footer/>
            </Router>
        );
    }
}