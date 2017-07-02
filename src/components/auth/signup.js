import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import * as actions from '../../actions';


class Signup extends Component {
    render(){

        const { handleSubmit } = this.props;

        return (
            <form>
              <div className="form-group">
                <label>Email: </label>
                <div>
                  <Field name="email" component="input"
                         className="form-control"
                         type="text" />
                </div>
              </div>

              <div className="form-group">
                <label>Password: </label>
                <div>
                  <Field name="password" component="input" type="password"
                         className="form-control"/>
                </div>
              </div>

              <div className="form-group">
                <label>Confirm Password: </label>
                <div>
                  <Field name="passwordConfirm" component="input" type="password"
                         className="form-control"/>
                </div>
              </div>

              <button action="submit" className="btn btn-primary">
                Sign up!
              </button>
            </form>
        );
    }
}

export default reduxForm(
    {form: 'signup'}
)(Signup);
