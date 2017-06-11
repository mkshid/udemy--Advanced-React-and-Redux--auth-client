import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';


class Signin extends Component {

    handleFormSubmit ({email, password}){
        console.log(email, password);
        
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
                  <Field name="password" component="input" type="text"
                         className="form-control"/>
                  </div>
              </div>
              <button action="submit" className="btn btn-primary">
                Sig in
              </button>
            </form>
        );
    }
   
}

export default reduxForm({
    form: 'signin'
})(Signin);
