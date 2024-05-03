import './App.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';


function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/events/')
    .then((response) => {
      setData(response.data);
    })
    .catch((error) => {
      console.log(error);
    })
  }, []);

  return (
      <div>
        <h1>Data from API:</h1>
        <ul>
          {data ? (
              <pre>{JSON.stringify(data, null, 2)}</pre>
          ) : (
              <p>Loading...</p>
          )}
        </ul>
      </div>
  );
}

export default App;
