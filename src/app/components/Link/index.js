import React from 'react';
import './index.css';

function Link(props){
    return <a
    className="App-link"
    href={props.href}
    target={props.target||'_blank'}
    rel="noopener noreferrer"
  >
    {props.children}
  </a>;
}

export default Link;