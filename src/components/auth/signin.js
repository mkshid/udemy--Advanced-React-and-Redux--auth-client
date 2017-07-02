import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import * as actions from '../../actions';

class Signin extends Component {

    handleFormSubmit ({email, password}){
        console.log(email, password);
        const { history } = this.props;
        this.props.signinUser({email, password, history});
        
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
                {this.renderAlert()}
              <button action="submit" className="btn btn-primary">
                Sig in
              </button>
            </form>
        );
    }
   
}
function mapStateToProps(state){
    return {errorMessage: state.auth.error};
}


Signin  = reduxForm({
    form: 'signin'
})(Signin);

export default connect(mapStateToProps, actions )(Signin);
