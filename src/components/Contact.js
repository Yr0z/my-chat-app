import React from 'react';
import './Contact.css';

const Contact = (props) => {
    return (
        <div className = "Contact">
            <img className="avatar" src={props.avatar} alt="avatar"/>
            <div>
                <h4 className="name">{props.name}</h4>
                <div className="status">
                    <div className={props.status ?"status-online" : "status-offline"}></div>
                    <p className="status-text">{props.status ? "online" : "offline"}</p>
                </div>

            </div>
        </div>
    );
}

export default Contact;