import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/troy1129/jsonplaceholder/db')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  if (data === null) return 'Loading...';

  return (
    <div>
      <h1>Data:</h1>
      <h2>Students:</h2>
      {data.data.map((student, index) => (
        <div key={index}>
          <p>ID: {student.id}</p>
          <p>Name: {student.name}</p>
          <p>Age: {student.age}</p>
          <p>Course: {student.course}</p>
        </div>
      ))}
      <h2>Passengers:</h2>
      {data.passengers.map((passenger, index) => (
        <div key={index}>
          <p>Name: {passenger.name}</p>
          <p>ID: {passenger.id}</p>
          <p>Destination: {passenger.destination}</p>
        </div>
      ))}
      <h2>Destinations:</h2>
      {data.destinations.map((destination, index) => (
        <div key={index}>
          <p>ID: {destination.id}</p>
          <p>Destination: {destination.destination}</p>
          <p>Price: {destination.price}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
