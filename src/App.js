import React ,{Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUserCircle,	faQuestionCircle, faSearch, faPlus, 
        faCheckCircle, faTimesCircle, faList, faShare, faTrashAlt, 
        faSquare, faCheckSquare, faFileCsv, faAlignLeft, faColumns} from '@fortawesome/free-solid-svg-icons';
import Lbwnb from './Lbwnb';

import Navbar from './CommonComponent/Navbar/Navbar';
import ResourcePage from './ResourcePage/ResourcePage'


library.add(faUserCircle, faQuestionCircle, faSearch, faPlus,
  faCheckCircle, faTimesCircle, faList, faShare, faTrashAlt,
  faSquare, faCheckSquare, faFileCsv, faAlignLeft, faColumns);





class App extends Component {
  render(){
    return (
      <div className="app">
        <div>
            {/* <Navbar /> */}

            <ResourcePage />
            </div>
      </div>
    );

  }
}

export default App;
