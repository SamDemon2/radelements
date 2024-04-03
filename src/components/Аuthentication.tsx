// LoginForm.tsx
import React, { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/authActions";

type SetIsLoggedIn = (value: boolean) => void;

interface LoginFormProps {
    onLoginSuccess: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLoginSuccess }) => {
    const [credentials, setCredentials] = useState({
        username: "LOGIN",
        password: "PASSWORD",
    });

    const dispatch = useDispatch();

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setCredentials({
            ...credentials,
            [name]: value,
        });
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const success = await dispatch(login(credentials));
        if (success) {
            onLoginSuccess(); // Вызываем функцию успешной авторизации
        }
        else {
            // Добавьте здесь обработку случая неверных данных, например, вывод ошибки
            console.log("Неверный логин или пароль");
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center ">
            <div className="my-4 mx-3 w-25">
                <h2 className="mb-3 text-center">Авторизация</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">
                            Логин
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="username"
                            name="username"
                            value={credentials.username}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">
                            Пароль
                        </label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            name="password"
                            value={credentials.password}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="d-grid gap-2">
                        <button type="submit" className="btn btn-primary">
                            Войти
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;
