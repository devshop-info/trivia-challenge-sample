import { action } from "typesafe-actions";
import { UserActionTypes, IUserState } from "./types";

export const userLogin = (user: IUserState) => action(UserActionTypes.FETCH_USER_LOGIN, user);
export const setUserLogout = () => action(UserActionTypes.FETCH_USER_LOGOUT);
