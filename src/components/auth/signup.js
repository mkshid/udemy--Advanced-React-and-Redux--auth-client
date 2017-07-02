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

    if (!values.email){
        errors.email = 'Please enter a email';
    }
    if (!values.password){
        errors.password = 'Please enter a password';
    }
    if (!values.passwordConfirm){
        errors.passwordConfirm = 'Please enter a password confirmation';
    }

    if (values.password !== values.passwordConfirm){
        errors.password = 'Password must be same!';
    }

    return errors;

};


class Signup extends Component {

    handleFormSubmit({email, password}){
        const { history } = this.props;
        this.props.signupUser({email, password, history});
    }

    renderAlert(){
        if (this.props.errorMessage){
            return (
                <div className='alert alert-danger'>
                  <strong>Ops! </strong> {this.props.errorMessage}
                </div>
            );
        }
    }

    render(){

        const { handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
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
              {this.renderAlert()}
              <button action="submit" className="btn btn-primary">
                Sign up!
              </button>
            </form>
        );
    }
}

function mapStateToProps(state){
    return {errorMessage: state.auth.error};
}


Signup = reduxForm(
    {form: 'signup',
     validate}
)(Signup);


export default connect(mapStateToProps, actions )(Signup);
