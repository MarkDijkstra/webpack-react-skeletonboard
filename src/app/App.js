import React, { Component } from 'react';
import Mainnav from './components/layout/Mainnav';
// import Footer from './components/layouts/Footer';
// React Router Import
import { Switch, Route } from 'react-router-dom';
// Import Pages
import Home from './components/pages/Home';
import News from './components/pages/News';

//import NotFoundPage from './components/pages/NotFoundPage';

class App extends Component {
    render() {
        return (
            <div>
            <Mainnav />
            <Switch>
            <Route exact path="/" component={Home} />
        <Route path="/news" component={News} />
        <Route path="/user" component={User} />
       // <Route component={NotFoundPage} />
        </Switch>
       // <Footer />
        </div>
    );
    }
}

export default App;

console.log('app js running');