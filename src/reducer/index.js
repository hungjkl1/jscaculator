import { combineReducers } from "redux";
import { reducer as reduxFormReducer } from "redux-form";
const root = combineReducers({
  form: reduxFormReducer
});
export default root;
