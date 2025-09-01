import { Outlet } from 'react-router';
import './App.css'
import SideNav from './sideNav/sideNav';

function App() {
  return (
    <div className="app">
      <SideNav />
      <img src="src\assets\Pixel-Art-cartoon-cloud.png" className="logo" alt="logo" />
      <div className='outlet-wrapper'>
        <Outlet />
      </div>
    </div>
  )
}

export default App



/*

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function MyComponent() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://api.example.com/data')
      .then(response => {
        setData(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Data from API:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default MyComponent;

*/