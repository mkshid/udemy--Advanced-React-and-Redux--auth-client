import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Header from './header';
import Signin from './auth/signin';
import Signout from './auth/signout';


export default class App extends Component {
    render() {
        return (
            <div>
              <Header />
              <Route
                 path={this.props.match.url + 'signin'}
                 component={Signin}
                 />
              <Route
                 path={this.props.match.url + 'signout'}
                 component={Signout}
                 />
            </div>
        );
    }
}
