import React from 'react';

import Logo from '../../Logo/Logo';
import NavBar from '../Navbar/Navbar';
import SideBar from '../Sidebar/Sidebar';

const Toolbar = ( props ) => (
    <div>
        <header>
            <div>
                <Logo />
            </div>
            <div>
                <NavBar />
            </div>
        </header>
        <nav>
            <SideBar isAuthenticated={props.isAuth} />
        </nav>
    </div>
);

export default Toolbar;