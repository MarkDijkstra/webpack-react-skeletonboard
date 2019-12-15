import React from "react";
import {render} from "react-dom";
import {BrowserRouter as Router,
        Switch,
        Route,
        Link,
        useRouteMatch,
        useParams} from "react-router-dom";

import {App} from "./App";

render(<App />, window.document.getElementById('root'));
console.log('index running');
