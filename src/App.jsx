import { useState } from 'react'
import './App.css'
import ContactList from './ContactList';

function App() {
  const [inputValues, setInputValues] = useState({});
  const [contact, setContact] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);

  const handleInputChange = (event) => {
    setInputValues((prevValues) => {
      return { ...prevValues, [event.target.name]: event.target.value };
    });
  };

  const addToHandler = () => {
    if (selectedContact) {
      setContact((prevContact) => {
        return prevContact.map((item) => {
          if (item.id === selectedContact.id) {
            return { ...inputValues, id: selectedContact.id };
          }
          return item;
        });
      });
      setSelectedContact(null);
    } else {
      setContact((prevContact) => [
        ...prevContact,
        { ...inputValues, id: Date.now() },
      ]);
    }
    setInputValues({ name: "", contact: "", age: "" });
  };

  const editContact = (id) => {
    const selected = contact.find((item) => item.id === id);
    if (selected) {
      setSelectedContact(selected);
      setInputValues(selected);
    }
  };

  const deleteToHandler = (id) => {
    setContact((prevContact) =>
      prevContact.filter((item) => item.id !== id)
    );
  };

  return (
    <div className='main'>
      <h1>Contact List</h1>
      
      <div className='input-box'>
        <label htmlFor="">Name: </label>
        <input type="text" name="name" value={inputValues.name} onChange={handleInputChange} />
      </div>
      <div className='input-box'>
        <label htmlFor="">Contact: </label>
        <input type="text" name="contact" value={inputValues.contact} onChange={handleInputChange} />
      </div>
      <div className='input-box'>
        <label htmlFor="">Age: </label>
        <input type="text" name="age" value={inputValues.age} onChange={handleInputChange} />
      </div>
      <button onClick={addToHandler}>
        {selectedContact ? "Update" : "Add"}
      </button>

      <ContactList contact={contact} editContact={editContact} deleteToHandler={deleteToHandler}/>
    </div>
  );
}

export default App;
