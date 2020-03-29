import React,{Component, useState, useEffect,setState} from "react";
import "./ResourcePage.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Navbar, Form, FormControl, Button, Nav, MenuItem, Dropdown, DropdownButton, Modal} from 'react-bootstrap'
import DropdownItem from "react-bootstrap/DropdownItem";
import DataTable from "../CommonComponent/DataTable/DataTable";


export default function ResourcePage(props) {
    const [toggle, setToggle] = useState(false);

    //handle popup
    const [show, setShow] = useState(false);
    const [check, setCheck] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleCheckClose = () => setCheck(false);
    const handleCheck = () => {setShow(false); setCheck(true)}
    // const handleCheck = () => {console.log('nothing')}

    const handleImport = () => setShow(false);  //handle importing

    const addRow =()=>{
        var row = {}
        var tableData = props.tableData
        for (var k in props.tableData[0]){
            row[k] = "empty";
        }
        tableData.push(row);
        props.updateTable(tableData);
    }


    return (
        //search bar + user information
        <div>
            <Navbar bg="light" expand='true' className='ml-auto'>
                <Nav.Item >
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
                            <Dropdown.Item onClick={addRow}><FontAwesomeIcon icon="align-left" /> <span>Add Row</span></Dropdown.Item>
                            <Dropdown.Item ><FontAwesomeIcon icon="columns" /> <span>Add Colunmn</span></Dropdown.Item>
                            <Dropdown.Item onClick={handleShow}><FontAwesomeIcon icon="file-csv" /> <span>Import CSV</span></Dropdown.Item>
                        </DropdownButton>
                    </Dropdown>
                </Nav.Item>

            </Navbar>
            {/* csv pop up */}
            <Modal show={show} onHide={handleClose } animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Import file</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Choose File
                    <br />
                    <input type='file' accept=".csv"/>
                    {/* <div>{something }</div> */}
                </Modal.Body>
                
                <Modal.Footer>
                    <Button onClick={handleCheck}>
                        Import
                    </Button>
                    <Button onClick={handleClose}>
                        Cancel 
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* csv double check */}
            <Modal show={check} onHide={handleCheckClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Modify Data</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Do you want to override current data?
                </Modal.Body>

                <Modal.Footer>
                    <Button onClick={handleCheckClose}>
                        Yes
                    </Button>
                    <Button onClick={handleCheckClose}>
                        Cancel
                    </Button>
                </Modal.Footer>
            </Modal>
            <DataTable tableData ={props.tableData}></DataTable>
        </div>
        
    )
}