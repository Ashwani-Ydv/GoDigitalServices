import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import mail from '../assests/image/envelope.svg'
import Image from './Image'
import login from '../assests/image/Login.png'
import qq from '../assests/image/qq.svg'
import './Email.css'

class Email extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: ''
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

  render() {
    return (
      <div className="login-App">
        <div>
          <div className="EformCenter">
            <div className='reset_password'>Reset Password</div>
            <div className='etext'>Please enter the registered mail ID</div>
            <form onSubmit={this.handleSubmit} className="Email-FormFields" onSubmit={this.handleSubmit}>
              <div className="Email-FormField">
                {/* <label className="FormField__Label" htmlFor="email">E-Mail Address</label> */}
                <div className='email-mail-container'>
                  <img className='email-mail' src={mail} />
                </div>
                <input type="email" id="email" className="Email-FormField__Input"
                  placeholder="Enter email ID" name="email" value={this.state.email} onChange={this.handleChange} />
              </div>

              {/* <div className="FormField">
                <label className="FormField__Label" htmlFor="password">Password</label>
                <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} />
              </div> */}

              <div className="Email-Button-Container">
                <button className="Email-Button mr-20"
                  onClick={() => {
                    this.props.history.push({
                      pathname: '/verify',
                      state: { isFromHome: true }
                    });
                  }}>
                  Next
                </button>
              </div>
            </form>
          </div>
        </div>
        <Image />
      </div>
    );
  }
}

export default Email;
