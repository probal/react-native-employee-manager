import { navigationResetTo } from '../GlobalNavigator';

import {
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER
} from './types';

export const loginUserAsync = ( email, password ) => {
    return (dispatch) => {
        dispatch({ type: LOGIN_USER });
        setTimeout(() => {
            const random = Math.random();
            if (random >= 0.98) {
                loginUserFail(dispatch)
            } else {
                loginUserSuccess(dispatch, email)
            }
          }, 1000);
    };
};

const loginUserFail = (dispatch) => {
    dispatch({ type: LOGIN_USER_FAIL });
};

const loginUserSuccess = (dispatch, email) => {
    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: email
    });
    navigationResetTo('Member');
};
