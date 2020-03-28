import * as actionTypes from "../actions/actionTypes";

const initialState = {
  authorized: false,
  token: null,
  error: null,
  success: false
};

const signUpStart = (state) => {
    return {
        ...state,
        loading: true,
        success: false,
        authorized: false
    };
};

const signUpSuccess = (state, action) => {
    return{
        ...state,
        loading: false,
        success: true,
        authorized: true,
        token: action.token
    };
};

const signUpFail = (state, action) => {
    return{
        ...state,
        loading: false,
        success: false,
        authorized: false,
        error: action.error
    };
};

const signUpReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.IS_SIGNUP_START:
            return signUpStart(state);
        case actionTypes.IS_LOGIN_SUCCESS:
            return signUpSuccess(state, action);
        case actionTypes.IS_SIGNUP_FAIL:
            return signUpFail(state, action);
        default:
            return state;
    };
};

export default signUpReducer;