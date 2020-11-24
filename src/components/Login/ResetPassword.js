import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Image from './Image'
import lock from '../assests/image/lock-line.svg'
import eye from '../assests/image/eye-hide-solid.svg'
import login from '../assests/image/Login.png'
import qq from '../assests/image/qq.svg'
import './ResetPassword.css'

class ResetPassword extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      confirm_password: '',
      name: '',
      hasAgreed: false,
      isPasswordShown: true
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let target = e.target;
    let value = target.type === 'checkbox' ? target.checked : target.value;
    let name = target.name;

    this.setState({
      [name]: value
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
  render() {
    const { isPasswordShown } = this.state;
    return (
      <div className='login-App'>
        <div>
          <div className="reset-form">
            <div className='reset-password'>Reset Password</div>
            <div className='create'>create new password for changing the<br></br>current password</div>
            <form onSubmit={this.handleSubmit} className="Reset-FormFields">
              <div className="reset-FormField">
                {/* <label className="FormField__Label" htmlFor="password">Password</label> */}
                <div className='reset-lock-container'>
                  <img className='reset-lock' src={lock} />
                </div>
                <input type={isPasswordShown ? "text" : "password"} id="password" className="R-FormField__Input" placeholder="New password" name="password" value={this.state.password} onChange={this.handleChange} />
                <div className='reset-eye-container'>
                  <img className='reset-eye' src={eye} onClick={this.togglePasswordVisiblity} />
                </div>
              </div>
              <div className="reset-FormField">
                <div className='reset-lock-container'>
                  <img className='reset-lock' src={lock} />
                </div>
                <input type={isPasswordShown ? "text" : "password"} id="password" className="R-FormField__Input" placeholder="Confirm Password" name="confirm_password" value={this.state.confirm_password} onChange={this.handleChange} />
                <div className='reset-eye-container'>
                  <img className='reset-eye' src={eye} onClick={this.togglePasswordVisiblity} />
                </div>
              </div>
              <div className="RFormField__Button">
                <button className="RformField__Button mr-20">Confirm</button>
              </div>
            </form>
          </div>
        </div>

        <Image />
      </div>
    );
  }
}

export default ResetPassword;
