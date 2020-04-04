import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';

export default function LeftTable (props)  {
    const data = props.data
    const titles = props.titles
    const rows = props.rows
    const colunmns = props.colunmns
    
    // console.log(titles)

    // const titles = []
    // const colunmns = []
    // console.log(props,"what in pros")
    // for (var i in data[0]) {
    //     titles.push(i)
    //     console.log(titles, "This is the table titles")
    // }




    return (
        <div id="left-table">
            {/* top bar  */}
            <div>
                {/* / resource Catalog */}
                <div>
                    {/* props pass the header from project page */}
                    <span>{props.header}</span>
                </div>
                {/* dropdown part */}
                <div>
                    {/* need to fix the function to control click */}
                    <button>
                        <FontAwesomeIcon color="#e16e37" icon="align-left"/>
                    </button>
                    {/* need to fix the show up function // 
                    // the dropdown option*/}
                    {props.showDropdown ? 
                    <div id="dropdown"> 
                    {/* need to fix the click handler */}
                        <div><FontAwesomeIcon color="#e16e37" icon="check-square" />Select all</div>
                        <div><FontAwesomeIcon color="#e16e37" icon="square" />Clear selection</div>
                    </div> 
                    : null}
                </div>
                <div>
                    {/* need to fix the function to control click */}
                    <button>
                        <FontAwesomeIcon color="#e16e37" icon="share" />
                    </button>
                </div>
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
                                    <Checkbox></Checkbox>
                                </TableCell>
                                {titles.map((title, index) => 
                                    (<TableCell key={index}> {title}</TableCell>)
                                )}

                            </TableRow>
                        </TableHead>
                        {console.log(data, "THIS iS the data from PROJECT@")}

                        <TableBody>
                            
                            {
                                data.map((row) => (
                                    <TableRow key={"row"+row.id}>
                                        <TableCell padding="checkbox">
                                            {/* need to fix the handler */}
                                            <Checkbox key={"checkbox" + row.id} id={row.id}/>                                            
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
            </div>

        </div>
    );
}

// data.map((row) => (
//     <TableRow key={row.id}>
//         <TableCell component="th" scope="row">
//             {row.userId}
//         </TableCell>
//         <TableCell component="th" scope="row">
//             {row.title}
//         </TableCell>
//     </TableRow>
// ))