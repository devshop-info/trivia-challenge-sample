/*
 *   File:           rootReducer.ts
 *   Description:    this is where the Reducers comes together
 *   Author:         RK
 */
import { combineReducers } from "redux";

/// ADD ALL Local Reducers:
// import { ComponentReducer } from '../file-source';
import { connectRouter } from "connected-react-router";
import { History } from "history";
import { userReducer } from "../user/reducer";
import { testReducer } from "../test/reducer";
export default (history: History) =>
  combineReducers({
    router: connectRouter(history),
    user: userReducer,
    test: testReducer,
    // rest of your reducers ...
  });
