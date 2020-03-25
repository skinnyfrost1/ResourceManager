import React, { Component } from 'react'




const dataTableRow = (props) => {
    let dataKeys = props.dataKeys;
    let row = props.row;

    return (
        <tr >
            {
                dataKeys.map(k =>{
                    return (
                        <td>
                            {row.k}
                        </td>
                    )
                })
            }
        </tr>
    )
}

export default dataTableRow;