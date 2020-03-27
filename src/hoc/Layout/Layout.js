import React, { Component } from 'react';
import { connect } from 'react-redux';

import Aux from '../Aux';
import Toolbar from '../../Nav/Toolbar/Toolbar';

class Layout extends Component {
    render () {
        return (
            <Aux>
                <Toolbar isAuth={this.props.isAuthenticated} />
                <main>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    };
};

export default connect( mapStateToProps )( Layout );