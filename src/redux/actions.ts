import { Dispatch } from "redux";
import {RootState, RadioComponent, OrderItem, ReplacementChoice, IntermediateComponent, Device} from "./reducers"; // Импортируем интерфейсы из reducers
import axios from "axios";

// Указываем новые интерфейсы для параметров
export const setTableData = (data: RadioComponent[]) => ({
    type: 'SET_TABLE_DATA',
    payload: data,
});

export const setOrdTableData = (data: OrderItem[]) => ({
    type: 'SET_ORD_TABLE_DATA',
    payload: data,
});

export const setShowData = (data: OrderItem[]) => ({
    type: 'SET_SHOW_DATA',
    payload: data,
});

// Добавляем новое действие для добавления элемента в базу данных
export const addElementToDatabase = (replacementChoice: ReplacementChoice) => ({
    type: "ADD_ELEMENT_TO_DB",
    payload: replacementChoice,
});

export const sendElementToServer = (replacementChoice: ReplacementChoice) => {
    return async (dispatch: Dispatch) => {
        try {
            await axios.post('http://127.0.0.1:8000/api/v1/replace/', replacementChoice);
            // Обработка успешного ответа от сервера, если необходимо
            console.log("Element successfully sent to the backend");

            // Вызываем действие ADD_ELEMENT_TO_DB с данными
            dispatch(addElementToDatabase(replacementChoice));
        } catch (error) {
            // Обработка ошибки, если что-то пошло не так
            console.error("Error sending element to the backend:", error);
        }
    };
};


export const fetchTableData = () => {
    return async (dispatch: Dispatch, getState: () => RootState) => {
        try {
            const response = await axios.get('http://localhost:8000/api/v1/complist/');
            const data = response.data;

            // Используем новые интерфейсы
            const componentsData = data.map((item: any) => ({
                id: item.comp_id,
                name: item.comp_name,
                amount: item.amount,
            }));

            const orderData = data.map((item: any) => ({
                component: item.comp_name,
                in_stock: item.amount,
                amount_need: 0,
            }));

            dispatch(setTableData(componentsData));
            dispatch(setOrdTableData(orderData));
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
};

export const fetchShowData = () => {
    return async (dispatch: Dispatch, getState: () => RootState) => {
        try {
            const response = await axios.get('http://localhost:8000/api/v1/show/');
            const data = response.data.order_data;

            const showData = data.map((item: any) => ({
                component: item.comp_name,
                in_stock: item.in_stock,
                amount_need: item.amount_need,
            }));

            dispatch(setShowData(showData));
        } catch (error) {
            console.error('Error fetching show data:', error);
        }
    };
};

export const addIntermediateData = (intermediateData: IntermediateComponent) => ({
    type: "ADD_INTERMEDIATE_DATA",
    payload: intermediateData,
});

export const getDevice = (data: Device[]) => ({
    type:"ADD_DEVICE_NAME",
    payload: data,
});