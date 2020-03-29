import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import DataTable from './CommonComponent/DataTable/DataTable';
// import { TablePagination } from '@trendmicro/react-paginations';
// import DataTable from './CommonComponent/DataTable/DataTable';
// import TableRow from '@material-ui/core/TableRow';

import {faUserCircle,	faQuestionCircle, faSearch, faPlus, 
  faCheckCircle, faTimesCircle, faList, faShare, faTrashAlt, 
  faSquare, faCheckSquare, faFileCsv, faAlignLeft, faColumns} from '@fortawesome/free-solid-svg-icons';

import ResourcePage from './ResourcePage/ResourcePage'


library.add(faUserCircle, faQuestionCircle, faSearch, faPlus,
faCheckCircle, faTimesCircle, faList, faShare, faTrashAlt,
faSquare, faCheckSquare, faFileCsv, faAlignLeft, faColumns);


class App extends Component {

  state = {
    tableData: [],
    showposts: false,
    beforeFetching: true
    }



  updateTable = (tableData)=>{
    console.log("yes");
    this.setState({tableData:tableData});
  }
  async componentWillMount() {
    const url = "https://jsonplaceholder.typicode.com/posts";
    // const url = "https://jsonplaceholder.typicode.com/albums";
    const response = await fetch(url);
    const data = await response.json();
    const tableHeads = [];
    for (var k in data[0]){
      tableHeads.push(k);
    }
    this.setState({ tableData: data, tableHeads: tableHeads,showposts: false, beforeFetching: false });
    console.log(this.state.tableData);
  }


  render() {

    console.log(this.state);
    return (
      <div className="app">

            <ResourcePage tableData={this.state.tableData} updateTable={this.updateTable}/>
            
      </div>
    );

  }
}

export default App;
