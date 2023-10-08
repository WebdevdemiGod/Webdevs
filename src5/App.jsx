import { useState, useEffect } from 'react';
import './App.css';
import ContactList from './ContactList';

function App() {
  const [inputValues, setInputValues] = useState({});
  const [contact, setContact] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);
  const [errors, setErrors] = useState({
    nameError: '',
    contactError: '',
    ageError: '',
  });

  const [isAddButtonDisabled, setIsAddButtonDisabled] = useState(true);

  useEffect(() => {
    const namePattern = /^[A-Za-z\s]+$/;
    const contactPattern = /^\d+$/;
    const agePattern = /^\d+$/;

    if (inputValues.name && !namePattern.test(inputValues.name)) {
      setErrors((prevErrors) => ({ ...prevErrors, nameError: 'No numbers and special characters' }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, nameError: '' }));
    }


    if (inputValues.contact && !contactPattern.test(inputValues.contact)) {
      setErrors((prevErrors) => ({ ...prevErrors, contactError: 'Only numbers' }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, contactError: '' }));
    }

    if (inputValues.age && !agePattern.test(inputValues.age)) {
      setErrors((prevErrors) => ({ ...prevErrors, ageError: 'Only numbers' }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, ageError: '' }));
    }


    setIsAddButtonDisabled(
      !inputValues.name || !inputValues.contact || !inputValues.age
    );
  }, [inputValues]);

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
    setInputValues({ name: '', contact: '', age: '' });
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
        <label htmlFor='name'>Name: </label>
        <input
          type='text'
          name='name'
          id='name'
          value={inputValues.name}
          onChange={handleInputChange}
        />
        <p style={{ color: 'red' }} className='error'>{errors.nameError}</p>
      </div>
      <div className='input-box'>
        <label htmlFor='contact'>Contact: </label>
        <input
          type='text'
          name='contact'
          id='contact'
          value={inputValues.contact}
          onChange={handleInputChange}
        />
        <p style={{ color: 'red' }} className='error'>{errors.contactError}</p>
      </div>
      <div className='input-box'>
        <label htmlFor='age'>Age: </label>
        <input
          type='text'
          name='age'
          id='age'
          value={inputValues.age}
          onChange={handleInputChange}
        />
        <p style={{ color: 'red' }} className='error'>{errors.ageError}</p>
      </div>
      <button onClick={addToHandler} disabled={isAddButtonDisabled}>
        {selectedContact ? 'Update' : 'Add'}
      </button>

      <ContactList
        contact={contact}
        editContact={editContact}
        deleteToHandler={deleteToHandler}
      />
    </div>
  );
}

export default App;
