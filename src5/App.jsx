import { useState, useEffect } from 'react';
import './App.css';
import ContactList from './ContactList';

export default function App() {
  const [inputValues, setInputValues] = useState({});
  const [contact, setContact] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);
  const [errors, setErrors] = useState({
    nameError: '',
    contactError: '',
    ageError: '',
    idError: '',
    courseError: '',
  });

  const [isAddButtonDisabled, setIsAddButtonDisabled] = useState(true);

  useEffect(() => {
    const namePattern = /^[A-Za-z\s]+$/;
    const contactPattern = /^\d+$/;
    const agePattern = /^\d+$/;
    const idPattern = /^\d+$/;
    const coursePattern = /^[A-Za-z\s]+$/;

    if (inputValues.id && !idPattern.test(inputValues.id)) {
      setErrors((prevErrors) => ({ ...prevErrors, idError: 'Only numbers' }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, idError: '' }));
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

    if (inputValues.name && !namePattern.test(inputValues.name)) {
      setErrors((prevErrors) => ({ ...prevErrors, nameError: 'No numbers and special characters' }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, nameError: '' }));
    }
    if (inputValues.course && !coursePattern.test(inputValues.course)) {
      setErrors((prevErrors) => ({ ...prevErrors, courseError: 'No numbers and special characters' }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, courseError: '' }));
    }


    setIsAddButtonDisabled(
      !inputValues.name || !inputValues.contact || !inputValues.age || !inputValues.id || !inputValues.course
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
        { ...inputValues },
      ]);
    }
    setInputValues({ name: '', contact: '', age: '', id: '', course: '' });
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

    if (selectedContact && selectedContact.id === id) {
      setSelectedContact(null);
      setInputValues({ name: '', contact: '', age: '', id: '', course: '' });
    }
  };

  useEffect(() => {
    
    fetch('https://my-json-server.typicode.com/troy1129/jsonplaceholder/db')
      .then((response) => response.json())
      .then((data) => {
        if (data && data.data) {
          setContact(data.data); 
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

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
      <div className='input-box'>
        <label htmlFor='id'>ID: </label>
        <input
          type='text'
          name='id'
          id='id'
          value={inputValues.id}
          onChange={handleInputChange}
        />
        <p style={{ color: 'red' }} className='error'>{errors.idError}</p>
      </div>
      <div className='input-box'>
        <label htmlFor='course'>Course: </label>
        <input
          type='text'
          name='course'
          id='course'
          value={inputValues.course}
          onChange={handleInputChange}
        />
        <p style={{ color: 'red' }} className='error'>{errors.courseError}</p>
      </div>
      <button onClick={addToHandler} disabled={isAddButtonDisabled}>
        {selectedContact ? 'Update' : 'Add'}
      </button>

      <ContactList contact={contact} editContact={editContact} deleteToHandler={deleteToHandler}
      />
    </div>
  );
}

