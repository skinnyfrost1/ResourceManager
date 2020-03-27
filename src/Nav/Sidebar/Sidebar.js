import React, { useState } from "react";

import "./Sidebar.css";
import SidebarItem from './SidebarItem/SidebarItem';
import arrowButton from '../../assets/images/arrowButton.png';


export default function Sidebar(props){

  const [open, setOpen] = useState("open");
  const [style, setStyle] = useState("sidebar");

  const handleClick = () => {
        switch (open) {
        case "open":
            setOpen("close");
            setStyle("sidebar active");
            break;
        case "close":
            setOpen("open");
            setStyle("sidebar");
            break;
        default:
            break;
        }
    }
    return (
    <div className={style}>
        <div className="router">
            <li className="empty-li">
                {open ? (
                    <img src={arrowButton} alt="Slide in menu"
                        style={{ transform: "rotate(-90deg)" }}
                        onClick={handleClick}
                    />
                    ) : (
                    <img src={arrowButton} alt="Slide out menu"
                        style={{ transform: "rotate(90deg)" }}
                        onClick={handleClick}
                    />
                    )
                }
            </li>
            <ul>
                <SidebarItem link ='/login'>Log In</SidebarItem>
                  
                {!props.isAuthenticated 
                    ? <SidebarItem link ='/signup'>Sign Up</SidebarItem>
                    : <SidebarItem link ='/project'>Project</SidebarItem>
                }
               
            </ul>
        </div> 
    </div> 
        //router close </div>
    //style close </div>
    );
};