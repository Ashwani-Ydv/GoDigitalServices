import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import Image from './Image'
import OtpInput from 'react-otp-input';
// import OTPInput, { ResendOTP } from "otp-input-react";
import login from '../assests/image/Login.png'
import qq from '../assests/image/qq.svg'
import './VerifyOTP.css'

class VerifyOTP extends Component {
  constructor() {

    super();

    this.state = {
      email: '',
      password: '',
      name: '',
      onChange: '',
      hasAgreed: false,
      otp: '',
      numInputs: 6,
      separator: ' ',
      isDisabled: false,
      hasErrored: false,
      isInputNum: false,
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
  onChange(value) {
    console.log('changed', value);
  }
  handleOtpChange = otp => {
    this.setState({ otp });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  clearOtp = () => {
    this.setState({ otp: '' });
  };

  handleCheck = e => {
    const { name } = e.target;
    this.setState(prevState => ({ [name]: !prevState[name] }));
  };

  handleSubmit = e => {
    e.preventDefault();
    alert(this.state.otp);
  };

  render() {
    // const [OTP, setOTP] = useState("");

    const { otp, numInputs, separator, isDisabled, hasErrored, isInputNum } = this.state;
    return (
      <div className='login-App'>
        <div>
          <div className="otp-verification-form">
            <div className='reset-password'>Reset Password</div>
            <div className='Vplease'>Please enter the OTP sent to your registered mail ID<br></br><b>abc@gmail.com</b></div>
            <form onSubmit={this.handleSubmit} className="FormFields">
              <div className='otp-container'>
                <OtpInput
                  className='otpinput'
                  inputStyle="inputStyle"
                  numInputs={numInputs}
                  isDisabled={isDisabled}
                  hasErrored={hasErrored}
                  errorStyle="error"
                  onChange={this.handleOtpChange}
                  separator={<span>{separator}</span>}
                  isInputNum={isInputNum}
                  shouldAutoFocus
                  value={otp}
                />
              </div>
              <div className='resend' style={{ marginTop: '3rem' }}>
                <Link className="resend-otp" style={{ marginTop: '3rem' }}><b>Resend OTP </b>
                </Link>
              </div>

              <div className="V-formField__Butto">
                <button className="V-formField__Button"onClick={() => {
              this.props.history.push({
                pathname: '/reset_password',
                state: { isFromHome: true }
              });
            }}>Verify</button>
              </div>
            </form>
          </div>
        </div>

        <Image />
      </div>
    );
  }
}

export default VerifyOTP;
