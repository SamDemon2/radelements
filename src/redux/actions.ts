import axios from "axios";
import { Dispatch } from "redux";
import { RootState, RadioComponent, OrderItem } from "./reducers"; // Импортируем интерфейсы из reducers

// Указываем новые интерфейсы для параметров
export const setTableData = (data: RadioComponent[]): { type: string; payload: RadioComponent[] } => ({
    type: 'SET_TABLE_DATA',
    payload: data,
});

export const setOrdTableData = (data: OrderItem[]): { type: string; payload: OrderItem[] } => ({
    type: 'SET_ORD_TABLE_DATA',
    payload: data,
});

export const setShowData = (data: OrderItem[]): { type: string; payload: OrderItem[] } => ({
    type: 'SET_SHOW_DATA',
    payload: data,
});

// Добавляем новое действие для добавления элемента в базу данных
export const addElementToDatabase = (element: RadioComponent): { type: string; payload: RadioComponent } => ({
    type: "ADD_ELEMENT_TO_DB",
    payload: element,
});

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
