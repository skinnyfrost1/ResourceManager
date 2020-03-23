import React ,{Component} from 'react';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faAlignLeft } from '@fortawesome/free-solid-svg-icons';
import Lbwnb from './Lbwnb';


library.add(faAlignLeft, faCoffee);





class App extends Component {
  render(){
    return (
      <div className="app">
        <div>
            Favorite beverage: const element = <FontAwesomeIcon icon={faCoffee} color="red" />
            Favorite beverage: const element = <FontAwesomeIcon icon={faAlignLeft} color="yellow" />
            <Lbwnb />
            </div>
      </div>
    );

  }
}

export default App;
