import React from "react";

function hoc (WrappedComponent) {
    class ValidatedComponent extends React.Component {
        state = {
            userInfo: {
                name:"",
                email:"",
                password: "",
                confirmPassword: "",
                show: false,
                validityErrors: {
                    name: "",
                    email: "",
                    password: "",
                    confirmPassword: "",
                },
            }
        };
        handleChange = e => {
            const { userInfo } = this.state;
            const { input, value } = e.target;

            let errors = this.state.userInfo.validityErrors;

            const lettersRegEx = /^[A-Za-z]+$/;
            const emailRegEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            const pwrdRegEx = /^(?=.*[A-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])\S{6,12}$/;

            switch (input) {
                case "name":
                    errors.name = lettersRegEx.test(value) ? "" : "Please enter valid name";
                    break;
                case "email":
                    errors.email = emailRegEx.test(value) ? "" : "Please enter valid email";
                    break;
                case "password":
                    errors.password = pwrdRegEx.test(value) ? "" : "Please enter valid password with atleast one lowercase letter, one uppercase letter, a digit from 0-9, and one special character";
                    break;
                case "confirmPassword":
                    errors.confirmPassword = userInfo.password != userInfo.confirmPassword ? "Passwords do not match" : "";
                    break;
                default:
                    break;
            }
            this.setState({ userInfo: {...userInfo, [input]: value, errors} });
        };
        render(){
            const {name, email, password, confirmPassword} = this.state.userInfo;
            const signInEnabled = name.length > 0 && email.length > 0 && password.length > 0 && confirmPassword.length > 0;
            const logInEnabled = email.length > 0 && password.length > 0;

            return (
                <WrappedComponent user = {this.state.userInfo} handleChange = {this.handleChange} signInEnabled = {signInEnabled} logInEnabled = {logInEnabled} {...this.props} />
            );
        }
    }
    return ValidatedComponent;
} export default hoc;