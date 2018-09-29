import React, { Component, Fragment } from 'react';
import { Link } from "react-router-dom";
import '../../styles/css/Header.css';

const Header = () => {
    return (
        <header className="header site-header">
            <h1 className="site-title">Tournament Generator</h1>
        </header>
    )
}

export default Header;