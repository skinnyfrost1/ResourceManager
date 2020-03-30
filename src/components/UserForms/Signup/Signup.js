import React, { useState } from "react";

import { connect } from "react-redux";

import { Form, Button } from "react-bootstrap";

import HOC from "../../hoc/hocValidation";

import { signUp } from "../../store/actions/signupAuth";

const SignUp = props => {
  const [show, setShow] = useState(true);

  const onShow = () => {
    setShow(!setShow);
  };

  const onSubmit = e => {
    e.preventDefault();
    props.signUp(props);
  };

  const { name, email, password, confirmPassword } = props.user.errors;
 
  return (
    <div style={{
      width: "35%",
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      textAlign: "center"
    }}
  >
      {props.errors ? (
        <div className="alert alert-danger" role="alert">
          
          {props.errors}
        </div>
      ) : null}
      <h1 style={{ color: "hsl(14, 90%, 61%)", fontWeight: "bold" }}
        className="h1 pb-5"> Sign Up </h1>
      <Form onSubmit={onSubmit}>
        <Form.Group>
          <Form.Label className="float-left">Enter Name: </Form.Label>
          <Form.Control
            value={props.user.name}
            onChange={props.handleChange}
            name="name"
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
            value={props.user.email}
            onChange={props.handleChange}
            name="email"
            type="email"
            placeholder="Enter Your Email"
            className={email ? "inavlid" : ""}
            required
          />
          <div className="error">{email}</div>
        </Form.Group>

        <Form.Group style={{ position: "relative" }}>
          <Form.Label className="float-left">Enter Password: </Form.Label>
          <Form.Control
            value={props.user.password}
            onChange={props.handleChange}
            name="password"
            type={show ? "password" : "text"}
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
            value={props.user.confirmPassword}
            onChange={props.handleChange}
            name="confirmPassword"
            type={show ? "password" : "text"}
            placeholder="Confirm Your Password"
            className={confirmPassword ? "inavlid" : ""}
            required
          />
          <Button onClick={onShow}>Toggle Confirm Password</Button>
        </Form.Group>
        <span className="text-danger">{confirmPassword}</span>
        <Button
          className="btn btn-block text-white btn-color"
          type="submit"
          disabled={!props.signUpEnabled}
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
    error: state.signUp.error,
    signUp: state.signUp,
    loading: state.signUp.loading,
    success: state.signUp.success,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signUp: values => dispatch(signUp(values))
  };
};

const SignUpComponent = HOC(SignUp);

export default connect(mapStateToProps, mapDispatchToProps)(SignUpComponent);
