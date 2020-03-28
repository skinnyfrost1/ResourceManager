import { combineReducers } from "redux";
import signUpReducer from './signupReducer';
import logInReducer from './logInReducer';

const rootReducer = combineReducers({
  signUp: signUpReducer,
  logIn: logInReducer
});

export default rootReducer;