import React, { Component } from 'react';
import axios from 'axios';
import ResourceTable from './ResourceCatalog/ResourceTable'
import Zouni from './ResourceCatalog/Zouni';

export default class Project extends Component {
  
  state = {
    something: "haha",
    rowsPerPage: 5,
    order: 'asc',
    orderBy:'id',
    selected: [],
    rows: [], 
    page: 0,
  }

  setOrder = (order)=> {
    this.setState({order: order})
  }

  setOrderBy = (orderBy) => {
    this.setState({orderBy:orderBy})
  }

  setSelected = (selected) => {
    this.setSelected({selected: selected})
  }

  setPage = (page) => {
    this.setPage({page: page})
  }

  setRowsPerpage =(numberOfRows)=>{
    this.setState({rowsPerPage:numberOfRows})
  }



;

  componentDidMount() {
    const url = "https://jsonplaceholder.typicode.com/posts";
    // const url = "https://jsonplaceholder.typicode.com/albums";
    // const url = "http://localhost:3000/Database/table1.json"
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
        this.setState({ rows: data, dataLength:data.length,columns: columns, tableHeads: tableHeads });
        console.log(this.state.tableHeads, "state at component did mount")
        // console.log(data.length)
        
      })
  }



  descendingComparator = (a, b, orderBy)=> {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
  }

 getComparator = (order, orderBy)=> {
  return order === 'desc'
    ? (a, b) => this.descendingComparator(a, b, orderBy)
    : (a, b) => -this.descendingComparator(a, b, orderBy);
  }

//  stableSort=(array, comparator)=> {
//   const stabilizedThis = array.map((el, index) => [el, index]);
//   stabilizedThis.sort((a, b) => {
//     const order = comparator(a[0], b[0]);
//     if (order !== 0) return order;
//     return a[1] - b[1];
//   });
//   return stabilizedThis.map((el) => el[0]);
//   }








  render() {
    return (
      <div className="projet">
        <div className="leftTable">
          {console.log(this.state,"this is the project.js   return  state.data")}
          <ResourceTable 
            descendingComparator={(a, b, orderBy) => this.descendingComparator()}
            getComparator={(order, orderBy)=> this.getComparator()}
            // stableSort={(array, comparator) => this.stableSort()}
            setOrder={(order)=>this.setOrder()}
            setOrderBy={(orderBy)=>this.setOrderBy()}
            setSelected={(setSelected) => this.setSelected()}
            setPage={(setPage) => this.setPage()}
            setRowPerpage={(numberOfRows) => this.setRowsPerpage()}
            order={this.state.order} 
            selected={this.state.selected}
            rowsPerPage={this.state.rowsPerPage}
            tableHeads={this.state.tableHeads}
            dataLength={this.state.dataLength}
            orderBy={this.state.orderBy}
            page={this.state.page}
            rows={this.state.rows}/>

            {/* <Zouni  
            rowsPerPage={this.state.rowsPerPage}
            order={'asc'}
            orderBy={this.state.orderBy}
            selected= {[]}
            page={this.state.page}
            rows={this.state.rows}/> */}

        </div> 
        {/* -----------------*/}
        <div className="rightTable">
          {/* <ResourceTable /> */}
        </div> 
      </div>
    );
  }
}


