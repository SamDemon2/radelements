import { Reducer } from 'redux';
import {RootState} from "./store";

export interface RadioComponent {
    id: number;
    category: number;
    name: string;
    amount: number;
}

export interface OrderItem {
    component: string;
    in_stock: number;
    amount_need: number;
}

interface AppState {
    tableData: {
        tableData: RadioComponent[];
        ord_tableData: OrderItem[];
    };
}

function getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomName(): string {
    const names: string[] = ['Resistor395', 'Capacitor123', 'Inductor789', 'Transistor456'];
    const randomIndex: number = getRandomNumber(0, names.length - 1);
    return names[randomIndex];
}

export function getTestData(count: number): RadioComponent[] {
    const rows: RadioComponent[] = [];
    for (let i = 0; i < count; i++) {
        rows.push({ id: getRandomNumber(1, 45), category: getRandomNumber(1, 30), name: getRandomName(), amount: getRandomNumber(0, count * 10) });
    }
    return rows;
}

export function getTestOrdData(count: number): OrderItem[] {
    const rows_ord: OrderItem[] = [];
    for (let i = 0; i < count; i++) {
        rows_ord.push({ component: getRandomName(), in_stock: getRandomNumber(1, 45), amount_need: getRandomNumber(1, 45) });
    }
    return rows_ord;
}

const initialState: RootState = {
    tableData: {
        components: getTestData(100),
        order_components: getTestOrdData(50),
    },
};

const rootReducer: Reducer<RootState> = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_TABLE_DATA':
            return { ...state, tableData: { ...state.tableData, tableData: action.payload } };
        case 'SET_ORD_TABLE_DATA':
            return { ...state, tableData: { ...state.tableData, ord_tableData: action.payload } };
        default:
            return state;
    }
};

export default rootReducer;
