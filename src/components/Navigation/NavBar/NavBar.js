import React, { useState } from "react";
import { Navbar, Modal, Button } from "react-bootstrap";

import Sidebar from "../SideBar/SideBar";

import userProf from "../../../assets/images/user.png"
import question from "../../../assets/images/question.png"
import Logo from "../../../assets/images/rm_logo.png"

export default function NavBar(props) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let isAuth = localStorage.getItem("LOGINtoken");
  let nameToken = JSON.parse(localStorage.getItem("NAMEtoken")) || [];
  let name = nameToken.map(user => user.name);

  const logout = () => {
    localStorage.removeItem("LOGINtoken");
    localStorage.removeItem("NAMEtoken");
    props.history.push("/");
    setShow(false);
  }

  
  return (
    <div>
      <Navbar
        bg="light"
        style={{
          display: "flex", justifyContent: "space-between", borderBottom: "1px solid black",
        }}
      >
        <div>
          <Sidebar />
          <div style={{
              width: 235,
              position: "absolute",
              top: "0",
              bottom: "0",
              left: "0",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}>
            <Navbar.Brand >
              <img
                src={Logo}
                alt="Resource Management"
                style={{ width: "100%" }}
              />
            </Navbar.Brand>
          </div>
        </div>
        <div>
          <div style={{ display: "flex" }}>
            <img
              src={userProf}
              alt="User Profile"
              onClick={handleShow}
              style={{ width: 50, height: 50, marginRight : "10px" }}
            />
            
            <div>
              {!isAuth ? "" : name}
            </div>
            <img
              src={question}
              alt="Question"
              style={{ width: 50, height: 50, marginLeft : "50px"}}
            />
          </div>
        </div>
      </Navbar>
      {isAuth ? (
        <Modal show={show} onHide={handleClose } animation={false}>
            <Modal.Header closeButton>
                <Modal.Title><h4 style = {{ paddingLeft: "120px" }}><img alt="User Profile" src={userProf} style = {{ paddingRight: "15px" }}></img>{name}</h4></Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <h5 style = {{ textAlign: "center" }}>Member Since <br /> November-2015</h5>
                <Button style ={{ float:"left" }}>Profile</Button>
                <Button onClick={logout} style ={{ float:"right" }}>Logout</Button>
            </Modal.Body>
            
        </Modal>
        ) : null}
    </div>
  );
}
