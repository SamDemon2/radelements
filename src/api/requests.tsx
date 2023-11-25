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

interface ReplaceData {
    replacement_choice: string;
}

export const postReplaceData = async (data:ReplaceData)=> {
    try {
        const response = await axios.post('http://127.0.0.1:8000/api/v1/replace/', data);
        return response.data;
    } catch (error) {
        throw error;
    }
};