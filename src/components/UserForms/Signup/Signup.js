import React, { useState } from "react";

import { connect } from "react-redux";

import { Form, Button } from "react-bootstrap";

import HOC from "../../hoc/hocValidation";

import { signUp } from "../../store/actions/signupAuth";

const SignUp = props => {
  const [show, setShow] = useState(true);

  const onShow = () => {
    setShow(!show);
  };

  const onSubmit = e => {
    e.preventDefault();
    props.signUp(props);
  };

  const { name, email, password, confirmPassword } = props.user.errors;
 
  return (
    <div className="SignUpForm">
      {props.errors ? (
        <div className="alert alert-danger" role="alert">
          {props.errors}
        </div>
      ) : null}
      ;<h1 className="SignUpHeader"> Sign Up </h1>
      <Form onSubmit={onSubmit}>
        <Form.Group>
          <Form.Label className="float-left">Enter Name: </Form.Label>
          <Form.Control
            name="name"
            value={props.name}
            onChange={props.handleChange}
            type="text"
            placeholder="Enter Your Name"
            className={name ? "inavlid" : ""}
            required
          />
          <span className="error">{name}</span>

        </Form.Group>
        <Form.Group>
          <Form.Label className="float-left">Enter Email: </Form.Label>
          <Form.Control
            name="email"
            value={props.email}
            onChange={props.handleChange}
            type="email"
            placeholder="Enter Your Email"
            className={email ? "inavlid" : ""}
            required
          />
          <div className="error">{email}</div>
        </Form.Group>
        <Form.Group>
          <Form.Label className="float-left">Enter Password: </Form.Label>
          <Form.Control
            name="password"
            value={props.password}
            onChange={props.handleChange}
            type="text"
            placeholder="Enter Your Password"
            className={password ? "inavlid" : ""}
            required
          />
          <Button onClick={onShow}>Toggle Password</Button>
        </Form.Group>
        <div className="text-danger">{password}</div>
        <Form.Group>
          <Form.Label className="float-left">Confirm Password: </Form.Label>
          <Form.Control
            name="confirmPassword"
            value={props.confirmPassword}
            onChange={props.handleChange}
            type={show ? "password" : "text"}
            placeholder="Confirm Your Password"
            className={props.confirmPassword ? "inavlid" : ""}
            required
          />
          <Button onClick={onShow}>Toggle Confirm Password</Button>
        </Form.Group>
        <div className="text-danger">{confirmPassword}</div>
        <Button
          className="btn btn-block text-white btn-color"
          type="submit"
          disabled={props.signUpEnabled}
        >
          Signup
        </Button>
      </Form>
      <div>
        <h6 className="float-right">Already Signed Up?</h6>
        <Button
          className="text-white btn-color btn"
          onClick={() => props.history.push("/")}
        >
          Login
        </Button>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    signUp: state.signUp,
    loading: state.signUp.loading,
    success: state.signUp.success,
    error: state.signUp.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signUp: values => dispatch(signUp(values))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(HOC(SignUp));
