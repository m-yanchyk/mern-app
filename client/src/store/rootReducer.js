import { combineReducers } from "redux";

import commonReducer from "./slices/common";
import commonApi from "./rtkq";

const rootReducer = combineReducers({
  common: commonReducer,
  [commonApi.reducerPath]: commonApi.reducer,
});

export default rootReducer;
