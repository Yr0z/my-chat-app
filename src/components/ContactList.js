import React from 'react'
import Contact from './Contact'

const contact = [
    {
        avatar:'https://randomuser.me/api/portraits/women/12.jpg',
        name: 'Martha Knight', 
        online: true,
    },
    {
        avatar:'https://randomuser.me/api/portraits/women/91.jpg',
        name: 'Bonnie Caldwell', 
        online: false,
    },
    {
        avatar:'https://randomuser.me/api/portraits/women/33.jpg',
        name: 'Brianna Snyder', 
        online: true,
    },
    {
        avatar:'https://randomuser.me/api/portraits/men/21.jpg',
        name: 'Oscar Washington', 
        online: true,
    },
    {
        avatar:'https://randomuser.me/api/portraits/men/48.jpg',
        name: 'Adam Matthews', 
        online: false,
    },
]

const Contactlist = () => (
    <div>
        {contact.map(contactItem => ( 
            <Contact avatar ={contactItem.avatar} name={contactItem.name} online={contactItem.online} />
        ))}
    </div>
); 

export default ContactList
