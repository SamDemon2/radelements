import {Action} from "redux";
import {RadioComponent, OrderItem} from "./reducers";

export const setTableData = (data: RadioComponent[]): { payload: RadioComponent[]; type: string } => ({
   type: 'SET_TABLE_DATA',
    payload: data,
});

export const setOrdTableData = (data: OrderItem[]): { payload: OrderItem[]; type: string } => ({
    type: 'SET_ORD_TABLE_DATA',
    payload: data,
});
