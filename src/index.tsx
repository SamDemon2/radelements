import React from 'react';
import { createRoot } from 'react-dom/client'; // Изменили импорт
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const domNode = document.getElementById('root'); // Получаем DOM-элемент

if (domNode) { // Проверяем, существует ли элемент
    const root = createRoot(domNode); // Создаем корень приложения

    root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );

    // Если вы хотите измерить производительность вашего приложения, передайте функцию для логирования результатов
    // (например: reportWebVitals(console.log)) или отправьте их на аналитический сервер. Узнать больше: https://bit.ly/CRA-vitals
    reportWebVitals();
}
