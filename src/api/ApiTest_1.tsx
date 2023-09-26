import axios from 'axios';

// URL-адрес эндпоинта для получения списка компонентов
const apiUrl = 'http://127.0.0.1:8000/api/v1/complist/';

// Отправка GET-запроса
axios.get(apiUrl)
    .then(response => {
        // response.data содержит полученные данные
        console.log('Received data:', response.data);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
