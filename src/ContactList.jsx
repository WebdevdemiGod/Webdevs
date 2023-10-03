
import React from 'react';

export default function ContactList({ contact, editContact, deleteToHandler }) {
    return (
        <div className='contact-list'>
        <h2>Contact List</h2>
        <ul>
            {contact.map((item) => (
            <li className='box' key={item.id}>
                <p>Name: {item.name}</p>
                <p>Contact: {item.contact}</p>
                <p>Age: {item.age}</p>
                <div className='btn'>
                    <button onClick={() => editContact(item.id)}>Edit</button>
                    <button onClick={() => deleteToHandler(item.id)}>Delete</button>
                </div>
                
            </li>
            ))}
        </ul>
        </div>
    );
}

