import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Image from './Image'
import eye from '../assests/image/eye-hide-solid.svg'
import user from '../assests/image/user.svg'
import lock from '../assests/image/lock-line.svg'
import login from '../assests/image/Login.png'
import qq from '../assests/image/qq.svg'
import './Signup.css'
// import Background from './Background';

class SignUpForm extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      confirm_password: '',
      name: '',
      hasAgreed: true,
      isPasswordShown: true,
      isConfirmPasswordShown:true
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let target = e.target;
    let value = target.type === 'checkbox' ? target.checked : target.value;
    let name = target.name;
    let password = target.password;
    let confirm_password = target.confirm_password

    this.setState({
      [name]: value,
      [password]: value,
      [confirm_password]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    console.log('The form was submitted with the following data:');
    console.log(this.state);
  }

  togglePasswordVisiblity = () => {
    const { isPasswordShown } = this.state;
    this.setState({ isPasswordShown: !isPasswordShown });
  };

  toggleConfirmPasswordVisiblity = () => {
    const { isConfirmPasswordShown } = this.state;
    this.setState({ isConfirmPasswordShown: !isConfirmPasswordShown });
  };

  render() {
    const { isPasswordShown } = this.state;
    const { isConfirmPasswordShown } = this.state;
    return (
      <div className='login-App'>
        <div className='signup-container'>
          <div className='signup-form'>
            <div className='signup'>Sign up</div>
            <div className='please'>Please fill the information for creating<br></br> the account</div>
            <form onSubmit={this.handleSubmit} className="Signup-FormFields">
              <div className="Signup-FormField">
                <img className='signup-user' src={user} />&emsp;
                <input type="text" id="name" className="Signup-FormField__Input" placeholder="User Name" name="name" value={this.state.name} onChange={this.handleChange} />
              </div>
              <div className="Signup-FormField">
                <img className='signup-lock' src={lock} />&emsp;
              <input type={isPasswordShown ? "text" : "password"} id="password" className="Signup-FormField__Input" placeholder="New Password" name="password" value={this.state.password} onChange={this.handleChange} />&emsp;
              <img className='signup-eye' src={eye} onClick={this.togglePasswordVisiblity} />
              </div>
              <div className="Signup-FormField">
                <img className='signup-lock' src={lock} />&emsp;
              <input type={isConfirmPasswordShown ? "text" : "confirm_password"} id="confirm_password" className="Signup-FormField__Input" placeholder="Confirm Password" name="confirm_password" value={this.state.confirm_password} onChange={this.handleChange} />&emsp;
              <img className='signup-eye' src={eye} onClick={this.toggleConfirmPasswordVisiblity} />
              </div>
              <div className="Signup-FormField_Button">
                <button className="Signup-FormField__Button"
                onClick={() => {
                  this.props.history.push({
                    pathname: '/sign_in',
                    state: { isFromHome: true }
                  });
                }}>Sign up</button>
              </div>
            </form>
          </div>
        </div>
       <Image/>
      </div>
    );
  }
}

export default SignUpForm;
