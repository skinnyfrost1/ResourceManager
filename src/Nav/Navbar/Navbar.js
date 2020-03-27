import React from "react";

import { Navbar } from "react-bootstrap";
import UserProf from "../../assets/images/user.png"
import Question from "../../assets/images/question.png"

export default function Nav(){
  return (
    <Navbar
        bg="light"
        variant="dark"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "1px solid #000"
        }}
    >
        <div>
        <img
            src={UserProf}
            alt="User Profile"
            style={{ width: 50, height: 50, borderRadius: "50%" }}
          />
        <img
            src={Question}
            alt="Questions?"
            style={{ width: 50, height: 50, borderRadius: "50%" }}
          />
        </div>
    </Navbar>
  );
};
