import { toast } from 'react-toastify';
import { userConstants } from './Constant/types';
import { history } from '../../Helpers/History';
import { alertActions } from './AlertActions';
import { userService } from '../../Service/UserService';


 


const login = (username, password) => {
    return dispatch => {
        dispatch(request({ username }));

        userService.login(username, password)
            .then(
                user => { 
                    console.log(user.message);
                    toast.success(user.message);
                    dispatch(success(user));
                    // window.location.href = '/store';
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
                );
    };

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

const register = (user) => {
    return dispatch => {
        dispatch(request(user));

        userService.register(user)
        .then(
            user => { 
                toast.success(user.message);
                dispatch(success(user));
                // window.location.href = '/login';
                    dispatch(alertActions.success('Registration successful'));
                },
                error => {
                    toast.error(error)
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
                );
            };

    function request(user) { return { type: userConstants.REGISTER_REQUEST, user } }
    function success(user) { return { type: userConstants.REGISTER_SUCCESS, user } }
    function failure(error) { return { type: userConstants.REGISTER_FAILURE, error } }
}


export const userActions = {
    login,
    register,

};