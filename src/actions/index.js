import axios from 'axios';
import { AUTH_USER, UNAUTH_USER, AUTH_ERROR } from './types';


const ROOT_URL = 'http://localhost:3090';

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


export function authError(error){
    return {
        type: AUTH_ERROR,
        payload: error
    };
}
