import React, { Component } from "react";
import { Link } from "react-router-dom";
import Image from "./Image";
import lock from "../assests/image/lock-line.svg";
import mail from "../assests/image/envelope.svg";
import eye from "../assests/image/eye-hide-solid.svg";
import login from "../assests/image/Login.png";
import qq from "../assests/image/qq.svg";
// import mail from '../components/assests/image/envelope.svg'
// import eye from '../components/assests/image/eye-solid.svg'
import "./Signin.css";
import Service from "../service/Service";
import Constants from "../utils/Constants";

class SignInForm extends Component {
  constructor() {
    super();

    this.state = {
      phoneOremail: undefined,
      password: undefined,
      isPasswordShown: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.service = new Service();
  }

  componentDidMount() {}

  loginUser = () => {
    var payload = {
      phoneOremail: this.state.phoneOremail,
      password: this.state.password,
    };

    this.service
      .loginUser(Constants.BASE_URL + Constants.POST_LOGIN, payload)
      .then((response) => {
        console.log("----------------");
        console.log(response);
        console.log("status", response.status);

        localStorage.setItem("token", response.token ?? undefined);
        // this.props.history.goBack();
        this.props.history.push({
          pathname: "/agencies",
          state: { isFromHome: true },
        });
      });
  };

  handleChange(e) {
    let target = e.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    console.log(
      "The form was submitted with the following data: qw",
      Constants.BASE_URL
    );
    console.log(this.state);
  }
  togglePasswordVisiblity = () => {
    const { isPasswordShown } = this.state;
    this.setState({ isPasswordShown: !isPasswordShown });
  };

  render() {
    const { isPasswordShown } = this.state;
    return (
      <div className="login-App">
        <div className="signin-container">
          <div className="signin-form">
            <div className="signin">Sign In</div>
            <div>
              <form
                onSubmit={this.handleSubmit}
                className="Signin-FormFields"
                onSubmit={this.handleSubmit}
              >
                <div className="Signin-FormField">
                  <img className="signin-mail" src={mail} />
                  &emsp;
                  <input
                    type="email"
                    id="phoneOremail"
                    className="Signin-FormField__Input"
                    placeholder="Enter mail ID"
                    name="phoneOremail"
                    value={this.state.phoneOremail}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="Signin-FormField">
                  <img className="signin-lock" src={lock} />
                  &emsp;
                  <input
                    type={isPasswordShown ? "text" : "password"}
                    style={{ width: "25rem" }}
                    id="password"
                    className="Signin-FormField__Input"
                    placeholder="Password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                  />
                  &emsp;&emsp;
                  <img
                    className="signin-eye"
                    src={eye}
                    onClick={this.togglePasswordVisiblity}
                  />
                </div>
                <div className="rememberme-container">
                  <input
                    type="checkbox"
                    className="remember"
                    id="rememberMe"
                    ref="rememberMe"
                    placeholder="Remember Me"
                    onChange={this.toggleRememberMe}
                  />
                  &emsp;
                  <label htmlFor="rememberMe">
                    {" "}
                    <b>Remember me</b>
                  </label>
                </div>

                <div className="FormField">
                  <button
                    className="Signin-FormField__Button mr-20"
                    onClick={() => {
                      this.loginUser();
                    }}
                  >
                    Login
                  </button>
                  <Link to="/email" className="FormField__Link">
                    <b>FORGOT PASSWORD ? </b>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
        <Image />
      </div>
    );
  }
}

export default SignInForm;

// "start": "node server/server.js",
