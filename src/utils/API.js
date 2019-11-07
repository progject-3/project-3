import axios from 'axios';

export default {
    signUp: function (signUpObj) {
        return axios.post('/user', signUpObj)
    }
}