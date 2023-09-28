import axios from 'axios';
import React from "react";

const Test_API: React.FC = () => {

// URL-адрес эндпоинта для получения списка компонентов
const apiUrl = 'http://localhost:8000/api/v1/complist/';

// Отправка GET-запроса
axios.get(apiUrl)
    .then(response => {
        // response.data содержит полученные данные
        console.log('Received data:', response.data);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
    return <div></div>;
};
export default Test_API;