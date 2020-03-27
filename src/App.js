import React, { Component } from 'react';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faAlignLeft } from '@fortawesome/free-solid-svg-icons';
import Lbwnb from './Lbwnb';
import DataTable from './CommonComponent/DataTable/DataTable';
import { TablePagination } from '@trendmicro/react-paginations';
// import DataTable from './CommonComponent/DataTable/DataTable';
// import TableRow from '@material-ui/core/TableRow';

library.add(faAlignLeft, faCoffee);
class App extends Component {

  state = {
    tableData: [],
    showposts: false,
    beforeFetching: true
  }

  async componentWillMount() {
    const url = "https://jsonplaceholder.typicode.com/posts";
    // const url = "https://jsonplaceholder.typicode.com/albums";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ tableData: data, showposts: false, beforeFetching: false });
    console.log(this.state.tableData);
  }


  render() {

    console.log(this.state);
    return (
      <div className="app">
        <div>
          Favorite beverage: const element = <FontAwesomeIcon icon={faCoffee} color="red" />
          Favorite beverage: const element = <FontAwesomeIcon icon={faAlignLeft} color="yellow" />
          <Lbwnb />
        </div>
        <br/>
        {/* <DataTable tableData={this.state.tableData} key="dataTable"/> */}
        <DataTable tableData={this.state.tableData} key="dataTable"/>


        <div></div>

      </div>
    );

  }
}

export default App;
