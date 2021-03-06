import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './LeftTable.css'

// import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import TablePagination from "@material-ui/core/TablePagination";

export default function LeftTable (props)  {
    const data = props.data
    const titles = props.titles
    const rows = props.rows
    const colunmns = props.colunmns
    const page = props.page
    const rowsPerPage = props.rowsPerPage
    
    // console.log(data.length,"data lengtht")

    // const titles = []
    // const colunmns = []
    // console.log(props,"what in pros")
    // for (var i in data[0]) {
    //     titles.push(i)
    //     console.log(titles, "This is the table titles")
    // }

    



    return (
        <div id="left-table" className="Table">
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
                    <button onClick={(e) => props.optionHandler(e)} className="Button">
                        <FontAwesomeIcon color="white" icon="align-left"/>
                    </button>
                    <span> </span>
                    {/* fix the function, pass data to right table */}
                    <button onClick={props.addToRightHandler()} className="Button" >
                        <FontAwesomeIcon color="white" icon="share" />
                    </button>
                    {/* need to fix the show up function // 
                    // the dropdown option*/}
                    {props.showDropdown && 
                    <div id="dropdown" className="dropdownContent"> 
                    {/* need to fix the click handler */}
                        <div onClick={props.selectAllHandler()}> <a href="#"><FontAwesomeIcon color="#e16e37" icon="check-square" />Select all</a>  </div>
                        <div onClick={props.cancelAllHandler()}><a href="#"> <FontAwesomeIcon color="#e16e37" icon="square" />Clear selection</a></div>
                    </div> 
                    }
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
                                    {/* <Checkbox></Checkbox> */}
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
                                    <TableRow key={"row"+row.id}>
                                        <TableCell id="left-table-data" padding="checkbox">
                                            {/* need to fix the handler */}
                                            <input className="checkbox" type="checkbox" 
                                            onChange={props.checkboxHandler(row.id)} 
                                            key={"checkbox" + row.id} 
                                            id={"left-table-"+row.id}/>                                            
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
                    rowsPerPage={props.rowsPerPage}
                    page={props.page}
                    onChangePage={props.pageChangeHandler()}
                    onChangeRowsPerPage={props.rowsPerPageChangeHandler()} 
                />
            </div>

        </div>
    );
}

