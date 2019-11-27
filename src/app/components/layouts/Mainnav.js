import React from 'react';

import { Link } from 'react-router-dom';

function Mainnav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <a className="navbar-brand ml-5" href="#"> logo </a>


    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav m-auto">
        <li className="nav-item active">
        <Link className="nav-link text-white text-uppercase ml-5" to="/">
        Home&nbsp;
<i className="fas fa-home" />
        <span className="sr-only">(current)</span>
        </Link>
        </li>
        <li className="nav-item">
        <Link
    className="nav-link text-white text-uppercase ml-5"
    to="/news"
        >
        news
        </Link>
        </li>
        <li className="nav-item">
        <Link
    className="nav-link text-white text-uppercase ml-5"
    to="/contacts"
        >
        contact us
    </Link>
    </li>
    </ul></div></nav>
);
}

export default Mainnav;