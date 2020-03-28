import * as actionTypes from "../actions/actionTypes";

const initialState = {
  authorized: false,
  token: null,
  error: null,
  success: false
};

const logInStart = (state) => {
    return {
        ...state,
        loading: true,
        success: false,
        authorized: false
    };
};

const logInSuccess = (state, action) => {
    return{
        ...state,
        loading: false,
        success: true,
        authorized: true,
        token: action.token
    };
};

const logInFail = (state, action) => {
    return{
        ...state,
        loading: false,
        success: false,
        authorized: false,
        error: action.error
    };
};

const logOut = (state) => {
    return {
        ...state,
        loading: false,
        success: false,
        authorized: false,
        token: null
    };
};

const logInReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.IS_LOGIN_START:
            return logInStart(state);
        case actionTypes.IS_LOGIN_SUCCESS:
            return logInSuccess(state, action);
        case actionTypes.IS_LOGIN_FAIL:
            return logInFail(state, action);
        case actionTypes.IS_LOGOUT:
            return logOut(state);
        default:
            return state;
    };
};

export default logInReducer;