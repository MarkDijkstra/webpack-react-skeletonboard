import React from "react";
import {render} from "react-dom";
import { BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams} from "react-router-dom";
// import {Router, Route,  IndexRoute} from "react-router";
//import { createBrowserHistory } from "history";

//const history = createBrowserHistory();

import {App} from "./App";

// class Root extends React.Component {
//     render() {
//         return <Router history={history}>
//         <Route path={"/"} component={App} >
//             <Route path={"users/:id"} component={Users} />
//             <Route path={"home"} component={Home} />
//             <Route path={"pages"} component={Pages} />
//         </Route>
//         <Route path={"home-single"} component={Home}/>
//         </Router>;
//     }
//
// }

// class Root extends React.Component {
//     render() {
//         return
//           <Router>
//         <App/>
//         </Router>;
//     }
// }
render(<App />, window.document.getElementById('root'));
console.log('index running');
