import React from 'react';
import './index.css';

function Header(props){
    return (
    <header className="Header">
        <h1 className="Header--title">{props.children}</h1>
        <hr className="Header--separator" />
        <h2 className="Header--subtitle">Gali ir nebuti</h2>
    </header>
    );
}

export default Header;