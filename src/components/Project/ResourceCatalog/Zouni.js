import React from 'react';

const Zouni = (props) => {

    const emptyRows = props.rowsPerPage - Math.min(props.rowsPerPage, Object.keys(props.rows).length - props.page * props.rowsPerPage);
    
    console.log(emptyRows)
    console.log(props.rowsPerPage,"rowsPerPage")
    console.log(Object.keys(props.rows).length, "props.row.length")
    console.log(props.page * props.rowsPerPage, "props.page * props.rowsPerPage")
    console.log(props.page, 'props.page')

    console.log(Object.keys(props.rows).length, "rowssssssddfdd");
    // console.log(typeof(props.rows), "rowssssssddfdd");


    
    return (
        <div>
            <div> 
                p
            </div>

        </div>
    );
}

export default Zouni;
