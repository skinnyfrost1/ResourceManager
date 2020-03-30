import React, { useState } from "react";

import { useHistory } from "react-router-dom";

import { connect } from "react-redux";

import { Form, Button } from "react-bootstrap";

import HOC from "../../hoc/hocValidation";

import { logIn } from "../../store/actions/loginAuth";

const LogIn = props => {

    let history = useHistory();

    const [show, setShow] = useState(true);

    const onShow = () => {
        setShow(!show);
    };

    const onSubmit = e => {
        e.preventDefault();
        props.logIn(props);
    };

    return(
        <div className="LogInForm">
            {props.errors ? (<div className="alert alert-danger" role="alert"> {props.errors} </div>) : null };

            <h1 className="LogInHeader"> Log In </h1>

            <Form onSubmit={onSubmit} noValidate>
                <Form.Group>
                    <Form.Label className="float-left font-weight-bold">User Email: </Form.Label>
                    <Form.Control
                        name="email"
                        value={props.email}
                        onChange={props.handleChange}
                        type="email"
                        placeholder="Enter Your Email"
                        required
                        className={props.email ? "invalid" : ""}
                        required
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label className="float-left">Password</Form.Label>
                    <Form.Control
                        name="password"
                        value={props.password}
                        onChange={props.handleChange}
                        type={show ? "password" : "text"}
                        placeholder="Enter Your Password"
                        className={props.password ? "invalid" : "" }
                        required
                    />
                    <Button onClick={onShow}>Toggle Password</Button>
                </Form.Group>

                <Form.Group controlId="formBasicCheckbox" />

                <Button className="btn btn-block text-white btn-color" type="submit" disabled={!props.logInEnabled}>Login</Button>

                <Form.Group className="float-left">
                    <Form.Check type="checkbox" lable="Remember me" />
                </Form.Group>
            </Form>
            <Button className="btn btn-color text-white" onClick={()=>history.push("/signup")}>Sign Up</Button>
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



export default connect(mapStateToProps, mapDispatchToProps)(HOC(LogIn));