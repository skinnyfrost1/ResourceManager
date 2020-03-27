import React,{Component, useState, useEffect} from "react";
import "./ResourcePage.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Navbar, Form, FormControl, Button, Nav, MenuItem, Dropdown, DropdownButton, Table} from 'react-bootstrap'
import DropdownItem from "react-bootstrap/DropdownItem";



export default function ResourcePage() {
    const [toggle, setToggle] = useState(false);

    return (
        //search bar + user information
        <Navbar bg="light" expand='true' className='ml-auto'> 

            <Nav.Item >
                {/* e16e37 */}
                <Form inline>
                    <FormControl type="text" placeholder="Keyword" className="mr-sm-2" />
                    <Button id='search'><FontAwesomeIcon icon="search" onClick={console.log('this is search')} /></Button>
                </Form>
            </Nav.Item>

            <Nav.Item >
                Resource Catalog
            </Nav.Item>

            <Nav.Item >
                <Dropdown id="basic-nav-dropdown" >
                    <DropdownButton
                        title={<span><FontAwesomeIcon icon="plus" /> </span>} 
                        className="navbar-toggler-right"
                        >
                        <Dropdown.Item className="dropdown-item-right" href="#action/3.1"><FontAwesomeIcon icon="align-left" /> <span>Add Row</span></Dropdown.Item>
                        <Dropdown.Item className="dropdown-item-right" href="#action/3.2"><FontAwesomeIcon icon="columns" /> <span>Add Colunmn</span></Dropdown.Item>
                        <Dropdown.Item className="dropdown-item-right" href="#action/3.3"><FontAwesomeIcon icon="file-csv" /> <span>Import CSV</span></Dropdown.Item>
                    </DropdownButton>
                </Dropdown>
            </Nav.Item>

         </Navbar>

    )
}