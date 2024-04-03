import { Dispatch } from "redux";
import {
    RadioComponent,
    OrderItem,
    IntermediateComponent,
    DeviceNamesState, AddDeviceNames, CompToDevNames, ReplaceState
} from "./reducers"; // Импортируем интерфейсы из reducers
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




export const fetchTableData = () => {
    return async (dispatch: Dispatch) => {
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
    return async (dispatch: Dispatch) => {
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

export const setDeviceNames = (deviceNames: DeviceNamesState) => ({
   type: "SET_DEVICE_NAMES",
    payload: deviceNames,
});

export const fetchDeviceNames = () => {
    return async (dispatch: Dispatch) => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/v1/add/');
            const deviceNames = response.data.device_names;
            console.log('Device names from the server:', deviceNames);
            dispatch(setDeviceNames(deviceNames));
        } catch (error) {
            console.error('Ошибка при получении имен устройств:', error);
        }
    };
};


export const setAddNames = (data: AddDeviceNames) => ({
   type: 'ADD_NEW_DEVICE_NAMES',
   payload: data,
});


export const fetchAddNames = () => {
    return async (dispatch: Dispatch) => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/v1/update/');
            //const data = response.data;
            const addData: AddDeviceNames = {
                comp_names: response.data.comp_names,
                categories: response.data.categories
            }
            console.log('Device names from the server:', addData);
            dispatch(setAddNames(addData));
        } catch (error) {
            console.error('Ошибка при получении имен устройств:', error);
        }
    };
};

export const setReplaceList = (data: ReplaceState) => ({
    type: 'SET_REPLACE_LIST',
    payload: data,
});

export const fetchReplaceList = () => {
    return async (dispatch: Dispatch) => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/v1/replace/');
            const data = response.data.data;
            dispatch(setReplaceList(data));
        } catch (error) {
            console.error('Error fetching replace list:', error);
        }
    };
};

export const setCompToDevList= (data: CompToDevNames) => ({
    type: 'SET_COMPTODEV_LIST',
    payload: data,
})
export const fetchCompToDevList = () => {
  return async (dispatch: Dispatch) => {
      try {
          const response = await  axios.get('http://127.0.0.1:8000/api/v1/add-new-device/');
          const data = response.data.data;
          dispatch(setCompToDevList(data));
      } catch (error) {
          console.error('Error fetching ctd list:', error);
      }
  };
};


