import { useState , useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {
  const [data, setData] = useState([]);
  const [idInput, setIdInput] = useState('');
  const [filteredStudent, setFilteredStudent] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://my-json-server.typicode.com/troy1129/jsonplaceholder/data');
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    const filteredData = idInput
      ? data.filter(({ id }) => id.toString().startsWith(idInput))
      : data;
    setFilteredStudent(filteredData);
  }, [idInput, data]);

  const handleInputChange = (e) => {
    setIdInput(e.target.value);
  };

  return (
    <div>
      {data.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <div>
          <input type='text' id='studentInput' value={idInput} onChange={handleInputChange} placeholder='Search by ID' />
          {filteredStudent.length === 0 ? (
            <p>No student with that ID</p>
          ) : (
            filteredStudent.map(({ id, name, age,course }) => (
              <div className='box' key={id}>
                <p>ID: {id}</p>
                <p>Name: {name}</p>
                <p>Age: {age}</p>
                <p>Course: {course}</p>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}

export default App;


