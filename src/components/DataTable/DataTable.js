import React from 'react';
import MaterialTable from 'material-table';

export default function DataTable(props) {
  // const [state, setState] = React.useState({
  //   columns:props.columns,
  //   data: props.data
  // });
  console.log(props,"this is PROPS in DataTable")
  return (
    <MaterialTable
      title=""
      columns={props.columns}
      data={props.data}
      editable={{
        onRowAdd: props.onRowsAdd,
        onRowUpdate:props.onRowUpdate,
        onRowDelete: props.onRowDelete
      }}
    />
  );
}