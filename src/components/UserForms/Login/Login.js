import React, { useState } from "react";

import { useHistory } from "react-router-dom";

import { connect } from "react-redux";

import { Form, Button } from "react-bootstrap";

import HOC from "../../hoc/hocValidation";

import { logIn } from "../../store/actions/loginAuth";

const LogIn = props => {

    let history = useHistory();

    const [showpass, setShowpass] = useState(true);

  const onShow = () => {
    setShowpass(!showpass);
    };

    const onSubmit = e => {
        e.preventDefault();
        props.logIn(props);
    };

    return(
        <div style={{
            width: "20%",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center"
          }}>
            {props.errors ? (<div className="alert alert-danger" role="alert"> {props.errors} </div>) : null };

            <h1 style={{ color: "hsl(14, 90%, 61%)", fontWeight: "bold" }}> Log In </h1>

            <Form onSubmit={onSubmit} noValidate>
                <Form.Group>
                    <Form.Label className="float-left font-weight-bold">User Email: </Form.Label>
                    <Form.Control
                        name="email"
                        value={props.user.email}
                        onChange={props.handleChange}
                        type="email"
                        placeholder="Enter Your Email"
                        required
                        className={props.user.errors.email ? "invalid" : ""}
                    />
                    <span className="text-danger">{props.user.errors.email}</span>
                </Form.Group>

                <Form.Group style={{ position: "relative" }}>
                    <Form.Label className="float-left">Password</Form.Label>
                    <Form.Control
                        value={props.user.password}
                        onChange={props.handleChange}
                        name="password"
                        type={showpass ? "password" : "text"}
                        placeholder="Enter Your Password"
                        className={props.user.errors.password ? "invalid" : "" }
                        required
                    />
                    <Button onClick={onShow}>Toggle Password</Button>
                    <div className="text-danger">{props.user.errors.password}</div>
                </Form.Group>

                <Form.Group controlId="formBasicCheckbox" />

                <Button className="btn btn-block text-white btn-color" type="submit" disabled={!props.logInEnabled}>Login</Button>

                <Form.Group className="float-left">
                    <Form.Check type="checkbox" lable="Remember me" />
                </Form.Group>
            </Form>
            <Button className="btn btn-color text-white" onClick={()=> history.push("/signup")}>Sign Up</Button>
        </div>
    );
};

const mapStateToProps = state => {
    return{
        logIn: state.logIn,
        loading: state.logIn.loading,
        success: state.logIn.success,
        error: state.logIn.error
    };
};

const mapDispatchToProps = dispatch => {
    return {
        logIn: values => dispatch(logIn(values))
    };
};

const LogInComponent = HOC(LogIn);

export default connect(mapStateToProps, mapDispatchToProps)(LogInComponent);