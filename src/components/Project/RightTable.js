import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './LeftTable.css'

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import TablePagination from "@material-ui/core/TablePagination";

export default function RightTable(props) {
    const data = props.data
    const titles = props.titles
    const rows = props.rows
    const colunmns = props.colunmns
    // const page = props.page
    // const rowsPerPage = props.rowsPerPage
    const page = props.pageRight
    const rowsPerPage = props.rowsPerPageRight
    // console.log(titles)

    // const titles = []
    // const colunmns = []
    // console.log(props,"what in pros")
    // for (var i in data[0]) {
    //     titles.push(i)
    //     console.log(titles, "This is the table titles")
    // }




    return (
        <div className="Table">
            {/* top bar  */}
            <div className="TopBar">
                {/* / resource Catalog */}
                <div className="Title">
                    {/* props pass the header from project page */}
                    <span>{props.header}</span>
                </div>
                {/* dropdown part */}
                <div className="dropdown">
                    {/* need to fix the function to control click */}
                    <button onClick={props.rightTrashHandler()} className="Button">
                        <FontAwesomeIcon color="white" icon="trash-alt" />
                    </button>
                    <span> </span>
                    
                </div>
                {/* <div>
                    need to fix the function to control click
                    
                </div> */}
            </div>


            {/* the table cell part */}
            <div>
                {/* title */}
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell padding="checkbox">
                                    {/* need to fix the function of all selection */}
                                </TableCell>
                                {titles.map((title, index) =>
                                    (<TableCell key={index}> {title}</TableCell>)
                                )}

                            </TableRow>
                        </TableHead>
                        {/* {console.log(data, "THIS iS the data from PROJECT@")} */}

                        <TableBody>

                            {(rowsPerPage > 0
                                ? data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                : data)
                                .map((row) => (
                                    <TableRow key={"row" + row.id}>
                                        <TableCell padding="checkbox">
                                            {/* need to fix the handler */}
                                            <input type="checkbox"
                                            className="checkbox" 
                                                onChange={props.checkboxRightHandler(row.id)} 
                                            key={"checkbox2" + row.id} 
                                            id={"table-right-"+row.id} />
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                            {row.userId}
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                            {row.title}
                                        </TableCell>
                                    </TableRow>))


                            }
                        </TableBody>

                    </Table>
                </TableContainer>

                {/* pagination part*/}
                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={data.length}
                    rowsPerPage={props.rowsPerPageRight}
                    page={props.pageRight}
                    // onChangePage={props.pageChangeHandler()}
                    // onChangeRowsPerPage={props.rowsPerPageChangeHandler()}
                    onChangePage={props.pageChangeRightHandler()}
                    onChangeRowsPerPage={props.rowsPerPageChangeRightHandler()}
                />
            </div>

        </div>
    );
}

