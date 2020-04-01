import React, { useState, Component, setState } from "react";
import "./Resource.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Navbar, Form, FormControl, Button, Nav, MenuItem, Dropdown, DropdownButton, Modal } from 'react-bootstrap'
// import DropdownItem from "react-bootstrap/DropdownItem";
import DataTable from "../DataTable/DataTable";
import axios from "axios"





export default class Resource extends Component {
  state = {
    tableData: [],
    toggle: false,
    show: false,
    check: false
  }

  setToggle = (toggle) => {
    this.setState({ toggle: toggle });
  }
  setShow = (show) => {
    this.setState({ show: show });
  }
  setCheck = (check) => {
    this.setState({ check: check })
  }
  handleClose = () => this.setShow(false);
  handleShow = () => this.setShow(true);
  handleCheckClose = () => this.setCheck(false);
  handleCheck = () => { this.setShow(false); this.setCheck(true) }
  handleImport = () => this.setShow(false);


  onRowAdd = (newData) =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve();
        this.setState((prevState) => {
          const data = [...prevState.data];
          data.push(newData);
          return { ...prevState, data };
        });
      }, 600);
    });


  onRowUpdate = (newData, oldData) =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve();
        if (oldData) {
          this.setState((prevState) => {
            const data = [...prevState.data];
            data[data.indexOf(oldData)] = newData;
            return { ...prevState, data };
          });
        }
      }, 600);
    });
  onRowDelete = (oldData) =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve();
        this.setState((prevState) => {
          const data = [...prevState.data];
          data.splice(data.indexOf(oldData), 1);
          return { ...prevState, data };
        });
      }, 600);
    });
  


  componentDidMount() {
    const url = "https://jsonplaceholder.typicode.com/posts";
    // const url = "https://jsonplaceholder.typicode.com/albums";
    // const response = await fetch(url);
    axios.get(url)
      .then(res => {
        console.log(res);
        const data = res.data;
        const tableHeads = [];
        const columns = [];
        for (var k in data[0]) {
          tableHeads.push(k);
          columns.push({ title: k, field: k })
        }
        this.setState({ data: data, columns: columns, tableHeads: tableHeads });
        console.log(this.state,"state at component will mount")
      })

      
  }

  render() {
    // let table = null
    // table =((<DataTable
    //   onRowDelete={this.onRowDelete}
    //   onRowAdd={this.onRowAdd}
    //   onRowUpdate={this.onRowUpdate}
    //   columns={this.state.columns}
    //   data={this.state.data} ></DataTable>))
      // console.log(table)



    return (
      //search bar + user information
      <div className="resourceTableContainer">
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
                <Dropdown.Item ><FontAwesomeIcon icon="align-left" /> <span>Add Row</span></Dropdown.Item>
                <Dropdown.Item ><FontAwesomeIcon icon="columns" /> <span>Add Colunmn</span></Dropdown.Item>
                <Dropdown.Item onClick={this.handleShow}><FontAwesomeIcon icon="file-csv" /> <span>Import CSV</span></Dropdown.Item>
              </DropdownButton>
            </Dropdown>
          </Nav.Item>

        </Navbar>
        {/* csv pop up */}
        <Modal show={this.state.show} onHide={this.handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>Import file</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Choose File
                        <br />
            <input type='file' accept=".csv" />
            {/* <div>{something }</div> */}
          </Modal.Body>

          <Modal.Footer>
            <Button onClick={this.handleCheck}>
              Import
                        </Button>
            <Button onClick={this.handleClose}>
              Cancel
                        </Button>
          </Modal.Footer>
        </Modal>

        {/* csv double check */}
        <Modal show={this.state.check} onHide={this.handleCheckClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>Modify Data</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Do you want to override current data?
                    </Modal.Body>

          <Modal.Footer>
            <Button onClick={this.handleCheckClose}>
              Yes
                        </Button>
            <Button onClick={this.handleCheckClose}>
              Cancel
                        </Button>tableColumn={this.state.tableColumn}
          </Modal.Footer>
        </Modal>
        {/* {table} */}
        <DataTable
          onRowDelete={(oldData)=>this.onRowDelete()}
          onRowAdd={(newData, oldData)=>this.onRowAdd()}
          onRowUpdate={(oldDat)=>this.onRowUpdate()}
          columns={this.state.columns}
          data={this.state.data} ></DataTable>
        

        {/* {console.log(this.state,"state")}
        {/* <DataTable tableColumn={this.state.tableColumn} tableData={this.state.tableData}></DataTable> */}

      </div >

    )

  }

}