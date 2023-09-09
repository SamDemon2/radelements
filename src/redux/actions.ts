import {Action} from "redux";

export const setTableData = (data: string[]): { payload: string[]; type: string } => ({
   type: 'SET_TABLE_DATA',
    payload: data,
});