import * as actionTypes from "./actionTypes";

export const logInStart = () => {
    return{
        type: actionTypes.IS_LOGIN_START
    };
};

export const logInSuccess = logInToken => {
    return{
        type: actionTypes.IS_LOGIN_SUCCESS,
        token: logInToken
    };
};

export const logInFail = logInError => {
    return{
        type: actionTypes.IS_LOGIN_FAIL,
        error: logInError
    };
};

export const setAuthRedirectPath = authRedirectPath => {
    return{
        type: actionTypes.IS_SET_REDIRECT_PATH,
        path: authRedirectPath
    };
};

export const logOut = () => {
    localStorage.removeItem("token");
    return {
        type: actionTypes.IS_LOGOUT
    };
};

export const logIn = userLoginInfo => {
    return dispatch => {
        dispatch(logInStart());

        let userToken = JSON.parse(localStorage.getItem("token")) || [];
        let userMatch = userToken && userToken.find( USER => (USER.email === userLoginInfo.user.email && USER.password === userLoginInfo.user.password));

        if (userMatch) {
            userLoginInfo.history.push("/resource"); //direct user to resource page
            localStorage.setItem("LOGINtoken", true); 
            localStorage.setItem("NAMEtoken", JSON.stringify(userToken));
            logInSuccess(userLoginInfo.user);

        } else {
            let invalidCred = "Invalid Credentials. Please sign up to create an account";
            userLoginInfo.user.errors.password = invalidCred;
            logInFail(invalidCred);
        };
    };
};
