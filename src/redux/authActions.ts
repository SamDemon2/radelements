import { Action } from "redux";

export interface User {
    username: string;
    token: string;
}

export const login = (credentials: { username: string; password: string }): { payload: User | null; type: string } => {
    // Проверяем, соответствуют ли введенные логин и пароль заданным значениям
    if (credentials.username === "LOGIN" && credentials.password === "PASSWORD") {
        return {
            type: 'LOGIN',
            payload: { username: credentials.username, token: "yourAccessTokenHere" }, // Замените на реальный токен
        };
    } else {
        // Если логин и пароль не совпадают, возвращаем null, что может означать неудачную попытку входа
        return {
            type: 'LOGIN',
            payload: null,
        };
    }
};

export const logout = (): Action => ({
    type: 'LOGOUT',
});
