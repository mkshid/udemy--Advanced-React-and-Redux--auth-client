import axios from 'axios';
import {
    AUTH_USER,
    UNAUTH_USER,
    AUTH_ERROR,
    FETCH_MESSAGE
} from './types';


const ROOT_URL = 'http://localhost:3090';

// DO refactor here!

export function signinUser({email, password, history}){

    return function (dispatch) {
        axios.post(`${ROOT_URL}/signin`, {email, password})
            .then(response => {

                // Update state to true to show is authenticated
                dispatch({type: AUTH_USER});

                // Save the JWT token
                localStorage.setItem('token', response.data.token);

                // Redirect to feature in case of success
                history.push('/feature');
            })
            .catch(() => {
                dispatch(authError('Bad login info'));
            });
    };

}

export function signoutUser(){
    localStorage.removeItem('token');
    return {type: UNAUTH_USER};

}

export function signupUser({email, password, history}){

    return function (dispatch){
        axios.post(`${ROOT_URL}/signup`, {email, password})
            .then(response => {
                dispatch({type: AUTH_USER});
                localStorage.setItem('token', response.data.token);
                history.push('/feature');
            })
            .catch(response => dispatch(authError(response.response.data.error)));
    };

}


export function authError(error){
    return {
        type: AUTH_ERROR,
        payload: error
    };
}


export function fetchMessage() {
    return function(dispatch){
        axios.get(ROOT_URL, {
            headers: {authorization: localStorage.getItem('token')}
        })
            .then(response => {
                dispatch({
                    type: FETCH_MESSAGE,
                    payload: response.data.message
                });
            });
    };
}
