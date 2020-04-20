import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Navbar from './navbar/Navbar'
import FormField from './fomrfield/FormField'
import CoolButton from './coolbutton/CoolButton.js'

function App() {
  return (
    <div className="App">
      <Navbar/>
      
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />

      {/* <div>
          <CoolButton classes="btn button is-rounded my-class is-danger is-small" value="Button 1"/>
          <CoolButton classes="btn button is-small is-success" value="Button 2"/>
      </div> */}


    </div>
  )
}

export default App;
