import React from 'react';
import './index.css';

function Item(data){
    const Icon = data.icon;
    return(
        <a className="Contacts--item" href={data.link}>
            <Icon className="Contacts--item-icon" />
            <span className="Contacts--item-text">{data.text}</span>
        </a>  
    );
}

function Contacts(props){
    return (<section className="Contacts">
        <h3>Contacts</h3>
        {props.items.map(Item)}
    </section>);
}

export default Contacts;