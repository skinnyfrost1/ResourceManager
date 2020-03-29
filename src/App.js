import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Store from "./components/store/store";
import HOC from "./components/hoc/hocValidation";
import Navbar from './components/Navigation/NavBar/NavBar';
import Login from './components/UserForms/Login/Login';
import Signup from './components/UserForms/Signup/Signup';
import Resource from './components/Resource/Resource';
import Project from './components/Project/Project';
import Formula from './components/Formula/Formula';
import Template from './components/Template/Template';
import {
  faUserCircle, faQuestionCircle, faSearch, faPlus,
  faCheckCircle, faTimesCircle, faList, faShare, faTrashAlt,
  faSquare, faCheckSquare, faFileCsv, faAlignLeft, faColumns
} from '@fortawesome/free-solid-svg-icons';
library.add(faUserCircle, faQuestionCircle, faSearch, faPlus,
  faCheckCircle, faTimesCircle, faList, faShare, faTrashAlt,
  faSquare, faCheckSquare, faFileCsv, faAlignLeft, faColumns);


class App extends Component {

  state = {
    tableData: [],
    showposts: false,
    beforeFetching: true
  }

  updateTable = (tableData) => {
    console.log("yes");
    this.setState({ tableData: tableData });
  }
  async componentWillMount() {
    const url = "https://jsonplaceholder.typicode.com/posts";
    // const url = "https://jsonplaceholder.typicode.com/albums";
    const response = await fetch(url);
    const data = await response.json();
    const tableHeads = [];
    for (var k in data[0]) {
      tableHeads.push(k);
    }
    this.setState({ tableData: data, tableHeads: tableHeads, showposts: false, beforeFetching: false });
    console.log(this.state.tableData);
  }

  render() {

    console.log(this.state);
    return (
      <div className="app">

        <Resource tableData={this.state.tableData} updateTable={this.updateTable} />

      </div>
    );

  }
}
// function App() {
//   return (
//     <div className="App">
//       <Provider store={Store}>
//         <Router>
//           <Route render={props => <Navbar {...props} />} />
//           <Route component={props => <HOC {...props} />} />
//           <Switch>
//             <Route exact path="/" render={props => <Login {...props} />} />
//             <Route path="/signup" render={props => <Signup {...props} />} />
//             <Route path="/resource" render={props => <Resource {...props} />} />
//             <Route path="/project" render={props => <Project {...props} />} />
//             <Route path="/formula" render={props => <Formula {...props} />} />
//             <Route path="/template" render={props => <Template {...props} />} />
//           </Switch>
//         </Router>
//       </Provider>
//     </div>
//   );
// }

export default App;
