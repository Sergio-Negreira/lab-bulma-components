import React, { Component } from 'react';
// import Navbar from '../navbar/Navbar.js'
import FormField from '../fomrfield/FormField'
import CoolButton from '../coolbutton/CoolButton'


class SignUp extends Component {
    render() {
        return (
            <div>
                {/* <Navbar /> */}
                
                
                <FormField  label="Name" type="text" placeholder="e.g Alex Smith" />
                <FormField  label="Email" type="email" placeholder="ASmith8888@gmail.com" />
                <FormField  label="Password" type="password"  />

                <CoolButton styles="is-success button" text="Submit" />
            </div>
        );
    }
}

export default SignUp;