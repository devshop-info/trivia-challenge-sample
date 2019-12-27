/*
*  File:            user/types.ts
*  Description:     Holds types and constants for managing user information
*  Author:          RK
*/
import keyMirror from "keymirror";

// Description state for main user items[] and item
export interface IUserState {
    username: string | null;
    email: string| null;
    token: string | null;
    isRememberMe: boolean;
    isLoggedIn: boolean;
    password?: string;
}

export const UserActionTypes = keyMirror({
    FETCH_USER_LOGIN: null,
    FETCH_USER_LOGIN_ERROR: null, 
    FETCH_USER_LOGIN_SUCCESS: null, 
    FETCH_USER_LOGOUT: null
});


