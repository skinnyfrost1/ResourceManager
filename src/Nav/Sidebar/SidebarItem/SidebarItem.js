import React from 'react';
import { NavLink } from 'react-router-dom';


const Sidebaritem = ( props ) => (
    <li>
        <NavLink to={props.link}>{props.children}</NavLink>
    </li>
);

export default Sidebaritem;