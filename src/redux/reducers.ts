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

export interface ReplacementChoice {
    replacement_choice: string;
}

export interface TableData {
    components: (RadioComponent | ReplacementChoice)[];
    order_components: OrderItem[];
    show_components: OrderItem[];
}

export interface RootState {
    tableData: TableData;
    user: User | null;
}

// Определяем типы действий
type ActionTypes =
    | { type: 'SET_TABLE_DATA'; payload: RadioComponent[] }
    | { type: 'SET_ORD_TABLE_DATA'; payload: OrderItem[] }
    | { type: 'SET_SHOW_DATA'; payload: OrderItem[] }
    | { type: 'ADD_ELEMENT_TO_DB'; payload: ReplacementChoice }
    | { type: 'LOGIN'; payload: User } // Добавляем действие LOGIN
    | { type: 'LOGOUT' }; // Добавляем действие LOGOUT

const initialState: RootState = {
    tableData: {
        components: [],
        order_components: [],
        show_components: [],
    },
    user: null,
};

// Определяем редуктор
const rootReducer: Reducer<RootState, ActionTypes> = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_TABLE_DATA':
            return { ...state, tableData: { ...state.tableData, components: action.payload } };
        case 'SET_ORD_TABLE_DATA':
            return { ...state, tableData: { ...state.tableData, order_components: action.payload } };
        case 'SET_SHOW_DATA':
            return { ...state, tableData: { ...state.tableData, show_components: action.payload } };
        case 'ADD_ELEMENT_TO_DB':
            // Добавляем новый элемент в массив components
            const newComponents = [...state.tableData.components, action.payload];
            return { ...state, tableData: { ...state.tableData, components: newComponents } };
        case 'LOGIN':
            return { ...state, user: action.payload };
        case 'LOGOUT':
            return { ...state, user: null };
        default:
            return state;
    }
};

export default rootReducer;
