import React from "react";

function HOC(WrappedComponent) {
  class ValidatedComponent extends React.Component {
    state = {
      userInfo: {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        errors: {
          name: "",
          email: "",
          password: "",
          confirmPassword: ""
        },
        show: false
      }
    };
    handleChange = e => {
      const { userInfo } = this.state;
      const { inputType, value } = e.target;

      let errors = this.state.userInfo.errors;

      const lettersRegEx = /^[A-Za-z]+$/;
      const emailRegEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      const pwrdRegEx = /^(?=.*[A-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])\S{6,12}$/;

      switch (inputType) {
        case "name":
          errors.name = lettersRegEx.test(value)
            ? ""
            : "Please enter valid name";
          break;
        case "email":
          errors.email = emailRegEx.test(value)
            ? ""
            : "Please enter valid email";
          break;
        case "password":
          errors.password = pwrdRegEx.test(value)
            ? ""
            : "Please enter valid password with atleast one lowercase letter, one uppercase letter, a digit from 0-9, and one special character";
          break;
        case "confirmPassword":
          errors.confirmPassword =
            userInfo.password != userInfo.confirmPassword
              ? "Passwords do not match"
              : "";
          break;
        default:
          break;
      }
      this.setState({ userInfo: { ...userInfo, [inputType]: value, errors } });
    };
    render() {
      const { name, email, password, confirmPassword } = this.state.userInfo;
      const signUpEnabled =
        name.length > 0 &&
        email.length > 0 &&
        password.length > 0 &&
        confirmPassword.length > 0;
      const logInEnabled = email.length > 0 && password.length > 0;

      return (
        <WrappedComponent
          userInfo={this.state.userInfo}
          handleChange={this.handleChange}
          signUpEnabled={signUpEnabled}
          logInEnabled={logInEnabled}
          {...this.props}
        />
      );
    }
  }
  return ValidatedComponent;
}
export default HOC;
