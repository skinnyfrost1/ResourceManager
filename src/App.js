import React , { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Store from "./components/store/store";


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

  render() {

  return (
    <div className="App">
      <Provider store={Store}>
        <Router>
          <Route render={props => <Navbar {...props}/>}/>
          <Switch>
            <Route exact path="/" render={props => <Login {...props} />}/>
            <Route path="/signup" render={props => <Signup {...props} />}/>
            <Route path="/resource"render ={props => (<Resource {...props}/>)}/>
            <Route path="/project" render={props => <Project {...props} />}/>
            <Route path="/formula" render={props => <Formula {...props} />}/>
            <Route path="/template" render={props => <Template {...props} />}/>
          </Switch>
        </Router>
      </Provider>
    </div>
  );
  }
}


export default App

