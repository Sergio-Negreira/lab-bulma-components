import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Navbar from './navbar/Navbar'
import FormField from './fomrfield/FormField'

function App() {
  return (
    <div className="App">
      <Navbar/>
      
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />

    </div>
  )
}

export default App;
