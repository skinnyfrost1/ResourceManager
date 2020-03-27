import React,{Component, useState, useEffect} from "react";
import "./ResourcePage.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Navbar, Form, FormControl, Button, Nav, MenuItem, Dropdown, DropdownButton} from 'react-bootstrap'
import DropdownItem from "react-bootstrap/DropdownItem";



export default function ResourcePage() {
    const [toggle, setToggle] = useState(false);

    // Similar to componentDidMount and componentDidUpdate:
    // useEffect(() => {
        // Update the document title using the browser API
        
    // });

    return (
        <Navbar bg="light" expand="xl" className='auto'> 
            <Nav.Item >
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button ><FontAwesomeIcon icon="search" onClick={console.log('this is search')} /></Button>
                </Form>
            </Nav.Item>
            <Nav.Item >
                <span>Resource Catalog</span>
            </Nav.Item>
            <Nav.Item >
                <Dropdown id="basic-nav-dropdown">
                    <DropdownButton
                        title={<span><FontAwesomeIcon icon="plus" /> </span>} >


                        <Dropdown.Item href="#action/3.1"><FontAwesomeIcon icon="align-left" /> <span>Add Row</span></Dropdown.Item>
                        <Dropdown.Item href="#action/3.2"><FontAwesomeIcon icon="columns" /> <span>Add Colunmn</span></Dropdown.Item>
                        <Dropdown.Item href="#action/3.3"><FontAwesomeIcon icon="file-csv" /> <span>Import CSV</span></Dropdown.Item>
                    </DropdownButton>
                </Dropdown>
            </Nav.Item>
                
        
   
        </Navbar>
    )
}