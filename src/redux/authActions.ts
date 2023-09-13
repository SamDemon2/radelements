import {Action} from "redux";

export interface User{
    username: string;
    token: string;
}

export const login = (credentials: { username: string; password: string }): { payload: User; type: string } => ({
  type: 'LOGIN',
    payload:{username: credentials.username, token: "yourAccessTokenHere"},
});

export const logout = (): Action => ({
    type: 'LOGOUT',
});