import { Reducer } from 'redux';
import { User } from "./authActions";

export interface RadioComponent {
    id: number;
    name: string;
    amount: number;
}

export interface OrderItem {
    component: string;
    in_stock: number;
    amount_need: number;
}

export interface RootState {
    tableData: {
        components: RadioComponent[];
        order_components: OrderItem[];
    };
    user: User | null;
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
        rows.push({ id: getRandomNumber(1, 45), name: getRandomName(), amount: getRandomNumber(0, count * 10) });
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
        components: [],
        order_components: [],
    },
    user: null,
};

const tableDataReducer: Reducer<RootState["tableData"]> = (state = initialState.tableData, action) => {
    switch (action.type) {
        case 'SET_TABLE_DATA':
            return { ...state, components: action.payload };
        case 'SET_ORD_TABLE_DATA':
            return { ...state, order_components: action.payload };
        default:
            return state;
    }
};

const userReducer: Reducer<RootState["user"]> = (state = initialState.user, action) => {
    switch (action.type) {
        case 'LOGIN':
            return action.payload;
        case 'LOGOUT':
            return null;
        default:
            return state;
    }
};

const rootReducer: Reducer<RootState> = (state = initialState, action) => {
    return {
        tableData: tableDataReducer(state.tableData, action),
        user: userReducer(state.user, action),
    };
};

export default rootReducer;
