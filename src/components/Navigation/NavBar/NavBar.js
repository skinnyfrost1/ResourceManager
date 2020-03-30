import React from "react";
import { Navbar } from "react-bootstrap";

import Sidebar from "../SideBar/SideBar";

import userProf from "../../../assets/images/user.png";
import question from "../../../assets/images/question.png";
import Logo from "../../../assets/images/rm_logo.png";

export default function NavBar(props) {

  let isAuth = localStorage.getItem("LOGINtoken");
  let userToken = JSON.parse(localStorage.getItem("token")) || [];
  let name = userToken.map(user => user.name);

  return (
    <Navbar
      bg="light"
      style={{
        display: "flex",
        justifyContent: "space-between",
        borderBottom: "1px solid black"
      }}
    >
      <div>
        <Sidebar />
        <div
          style={{
            width: 235,
            position: "absolute",
            top: "0",
            bottom: "0",
            left: "0",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Navbar.Brand>
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
            style={{ width: 50, height: 50, marginRight: "10px" }}
          />
          <div>{!isAuth ? "afaf" : name}</div>
          <img
            src={question}
            alt="Question"
            style={{ width: 50, height: 50, marginLeft: "50px" }}
          />
        </div>
      </div>
    </Navbar>
  );
}
