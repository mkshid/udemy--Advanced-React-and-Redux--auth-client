import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import * as actions from '../../actions';


const renderField = ({
  input,
  label,
  type,
  meta: { touched, error }
}) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type}  className="form-control"/>
      {touched && ((error && <span className='error'>{error}</span>))}
    </div>
  </div>
);

const validate = values => {
    const errors = {};

    if (values.password !== values.passwordConfirm){
        errors.password = 'Password must be same!';
    }

    return errors;

};


class Signup extends Component {

    render(){

        const { handleSubmit } = this.props;

        return (
            <form>
              <div className="form-group">
                <label>Email: </label>
                <div>
                <Field name="email" component={renderField} type="text" />
                </div>
              </div>

              <div className="form-group">
                <label>Password: </label>
                <div>
                  <Field name="password" component={renderField} type="password"/>
                </div>
              </div>

              <div className="form-group">
                <label>Confirm Password: </label>
                <div>
                  <Field name="passwordConfirm" component={renderField} type="password"/>
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
    {form: 'signup',
    validate}
)(Signup);
