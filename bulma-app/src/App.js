import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Navbar from './navbar/Navbar'
// import FormField from './fomrfield/FormField'
import Message from './message/Message'
import Signup from './signup/Signup'

function App() {
  return (
    <div className="App">
      <Navbar/>

      <Message isInfo title='Hello World'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>.
      </Message>
      
      {/* <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" /> */}
      <Signup/>

      {/* <div>
          <CoolButton classes="btn button is-rounded my-class is-danger is-small" value="Button 1"/>
          <CoolButton classes="btn button is-small is-success" value="Button 2"/>
      </div> */}


    </div>
  )
}

export default App;
