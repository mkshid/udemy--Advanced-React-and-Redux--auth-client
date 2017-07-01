const ROOT_URL = 'http://localhost:3090';
import axios from 'axios';


export function signinUser({email, password}){

    return function (dispatch) {
        axios.post(`${ROOT_URL}/signin`, {email, password});
    };

}
