import { Reducer } from "redux";
import { IUserState, UserActionTypes } from "./types";


// Type-safe initialState
const initialState: IUserState = {
    username: window.sessionStorage.getItem("USERNAME"),
    email:  window.sessionStorage.getItem("EMAIL"),
    token:  window.sessionStorage.getItem("AUTH_TOKEN"),
    isRememberMe: false,
    isLoggedIn: !!window.sessionStorage.getItem("AUTH_TOKEN")
};

// ***** NOTE: Working *****
const reducer: Reducer<IUserState> = (state = initialState, action) => {
    switch (action.type) {
        case UserActionTypes.FETCH_USER_LOGIN: {
            return { ...state, username: action.payload.username };
        }
        case UserActionTypes.FETCH_USER_LOGIN_SUCCESS: {
            return { ...state, token: action.payload, isLoggedIn: true };
        }
        case UserActionTypes.FETCH_USER_LOGIN_ERROR: {
            return { ...state, username: null, token: null, isLoggedIn: false  };
        }
        case UserActionTypes.FETCH_USER_LOGOUT: {
            return { ...state, username: null, token: null, isLoggedIn: false };
        }

        default: {
            return state;
        }
    }
};

export { reducer as userReducer };
