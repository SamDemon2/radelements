// import axios from 'axios';
// import React from "react";
//
// const Test_API: React.FC = () => {
//
// // URL-адрес эндпоинта для получения списка компонентов
// const apiUrl = 'http://localhost:8000/api/v1/complist/';
//
// // Отправка GET-запроса
// axios.get(apiUrl)
//     .then(response => {
//         // response.data содержит полученные данные
//         console.log('Received data:', response.data);
//     })
//     .catch(error => {
//         console.error('Error fetching data:', error);
//     });
//     return <div></div>;
// };
// export default Test_API;

// api.ts

import axios from 'axios';

const baseURL = 'http://127.0.0.1:8000/api/v1/';

interface DeviceData {
    device_name: string;
    device_need: number;
}

export const postDeviceData = async (data: DeviceData): Promise<any> => {
    try {
        const response = await axios.post(`${baseURL}add/`, data);
        return response.data; // или что-то еще важное для вашего приложения
    } catch (error) {
        throw error; // обработка ошибок, если необходимо
    }
};
