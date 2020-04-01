import React, { useState } from "react";
import "./SideBar.css";
import { NavLink } from "react-router-dom";

import Arrow from "../../../assets/images/arrowButton.png"
const Sidebar = () => {
  const navigationLinks = [
    { url: "/resource", name: "Resource" },
    { url: "/project", name: "Project" },
    { url: "/formula", name: "Formula" },
  ];
  const [open, setOpen] = useState("close");
  const [style, setStyle] = useState("sidebar");

  let isAuth = localStorage.getItem("LOGINtoken");

  const handleClick = () => {
    switch (open) {
      case "open":
        setOpen("close");
        setStyle("sidebar active");
        break;
      case "close":
        if (isAuth) {setOpen("open")};
        setStyle("sidebar");
        break;
      default:
        break;
    }
  };
  return (
    <div>
      <div className={style}>
        <div className="sidebarNav">
          <li className="sidebarLayer">
            {style === "sidebar" ? (
              <img
                src={Arrow}
                alt="Toggle Sidebar"
                onClick={handleClick}
              />
            ) : (
              <img
                src={Arrow}
                alt="Toggle Sidebar"
                style={{ transform: "rotate(180deg)" }}
                onClick={handleClick}
              />
            )}
          </li>
          {navigationLinks.map(nav => {
            return (
              <NavLink
                key={nav.url}
                className="sidebarLinks"
                to={nav.url}
                onClick={handleClick}
              >
                {nav.name}
              </NavLink>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Sidebar;