import * as actionTypes from "./actionTypes";

export const signUpStart = () => {
    return {
        type: actionTypes.IS_SIGNUP_START
    };
};

export const signUpSuccess = signUptoken => {
    return{
        type: actionTypes.IS_SIGNUP_SUCCESS,
        token: signUptoken
    };
};

export const signUpFail = signUpError => {
    return {
        type: actionTypes.IS_SIGNUP_FAIL,
        error: signUpError
    };
};

export const setAuthRedirectPath = authRedirectPath => {
    return {
        type: actionTypes.IS_SET_REDIRECT_PATH,
        path: authRedirectPath
    };
};

export const signUp = signUpData => {
    return dispatch => {
        dispatch(signUpStart());
        const signUpInfo = {
            name: signUpData.user.name,
            email: signUpData.user.email,
            password: signUpData.user.password,
            confirmPassword: signUpData.user.confirmPassword
        }

        let userArray = JSON.parse(localStorage.getItem("token")); // []
        const matchingError = user.find(
            user => user.email === signUpInfo
        );
        if (matchingError) {
            signUpFail("The Email you have provided already exists");
        } else {
            userArray.push(signUpInfo);
            localStorage.setItem("token", JSON.stringify(userArray));
        };
    };
};