import React, { Component } from 'react'
import './DataTable.css';
import DataTableRow from './DataTableRow/DataTableRow'

/*This is a class . */
const dataTable = (props) => {
    var temp = props.tableData[0];
    let dataKeys = [];
    for (var k in temp) {
        dataKeys.push(k)
    }
    return (
        <table className="DataTable">
            <thead>
                <tr>
                    {
                        dataKeys.map(k => {
                            return (
                                <th>{k}</th>
                            )
                        })
                    }
                </tr>
            </thead>
            <tbody>
                {
                    props.tableData.map(row => {
                        return (
                            <DataTableRow dataKeys={dataKeys} row={row} />
                        )
                    })
                }
            </tbody>
        </table>
    )
}

export default dataTable