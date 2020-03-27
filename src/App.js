import React ,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';


import LogIn from './Login/Login';
import SignUp from './Login/Signup/Signup';
import Resource from './Resource/Resource';
import Project from './Project/Project';
import Formula from './Formula/Formula';
import Template from './Template/Template';
import Layout from './hoc/Layout/Layout';
import * as actions from './store/actions/index';




class App extends Component {
  componentDidMount () {
    this.props.onTryAutoSignup();
  }

  render(){

    let routes = (
      <Switch>
        <Route path="/login" component={LogIn} />
        <Route path="/signup" component={SignUp} />
        <Redirect to="/login" />
      </Switch>
    );

    if ( this.props.isAuthenticated ) {
      routes = (
        <Switch>
          <Route path="/resource" component={Resource} />
          <Route path="/project" component={Project} />
          <Route path="/formula" component={Formula} />
          <Route path="/template" component={Template} />
          <Redirect to="/" />
        </Switch>
      );
    }
    return (
      <div>
        <Layout>{routes}</Layout>
      </div>
    );

  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch( actions.authCheckState() )
  };
};

export default withRouter( connect( mapStateToProps, mapDispatchToProps )( App ) );