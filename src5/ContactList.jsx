import React from 'react';

export default function ContactList({ contact, editContact, deleteToHandler }) {
    return (
        <div className='contact-list'>
        {contact.length === 0 ? (
            <h2>NO LIST SO FAR</h2>
        ) : (
            <>
            <h2>List:</h2>
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Contact Number</th>
                    <th>Course</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {contact.map((item) => (
                    <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.age}</td>
                    <td>{item.contact}</td>
                    <td>{item.course}</td>
                    <td>
                        <button onClick={() => editContact(item.id)}>Edit</button>
                        <button onClick={() => deleteToHandler(item.id)}>Delete</button>
                    </td>
                    </tr>
                ))}
                </tbody>
            </table>
            </>
        )}
        </div>
    );
}
