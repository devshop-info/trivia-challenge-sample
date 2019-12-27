/*
*   File:           applicationState.ts
*   Description:    This is where the ApplicationState and supporting interfaces comes together:
*   Author:         RK
*/

import { DeepPartial, Dispatch, Action, AnyAction } from "redux";

/// ADD ALL Local States:
// import { ComponentState } from '../Component/types';
import { IUserState } from "../user/types";
import { ITestState } from "../test/types";


// The top-level state object
// tslint:disable-next-line:interface-name
export interface ApplicationState {
    user: IUserState;
    test: ITestState;
}


// Additional local props for connected React components. This prop is passed by default with `connect()`
export interface ConnectedReduxProps<A extends Action = AnyAction> {
    dispatch: Dispatch<A>;
}

// TEMP to pass to configure store on load - pass from server? TBD later on dev
export const initialGlobalState: DeepPartial<any> = {};
