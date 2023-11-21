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

export interface IntermediateComponent {
    category: string;
    comp_name: string;
    amount: number;
}

export interface ReplacementChoice {
    replacement_choice: string;
}

export interface DeviceNamesState {
    device_names: string[];
}

export interface TableData {
    components: (RadioComponent | ReplacementChoice)[];
    order_components: OrderItem[];
    show_components: OrderItem[];
    inter_components: IntermediateComponent[];
    device_components: DeviceNamesState;
}

export interface RootState {
    tableData: TableData;
    user: User | null;
}

type ActionTypes =
    | { type: 'SET_TABLE_DATA'; payload: RadioComponent[] }
    | { type: 'SET_ORD_TABLE_DATA'; payload: OrderItem[] }
    | { type: 'SET_SHOW_DATA'; payload: OrderItem[] }
    | { type: 'ADD_ELEMENT_TO_DB'; payload: ReplacementChoice }
    | { type: 'ADD_INTERMEDIATE_DATA'; payload: IntermediateComponent }
    | { type: 'SET_DEVICE_NAMES'; payload: DeviceNamesState }
    | { type: 'LOGIN'; payload: User }
    | { type: 'LOGOUT' };

const initialState: RootState = {
    tableData: {
        components: [],
        order_components: [],
        show_components: [],
        inter_components: [],
        device_components: { device_names: [] },
    },
        user: null,
};

const rootReducer: Reducer<RootState, ActionTypes> = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_TABLE_DATA':
            return { ...state, tableData: { ...state.tableData, components: action.payload } };
        case 'SET_ORD_TABLE_DATA':
            return { ...state, tableData: { ...state.tableData, order_components: action.payload } };
        case 'SET_SHOW_DATA':
            return { ...state, tableData: { ...state.tableData, show_components: action.payload } };
        case 'ADD_ELEMENT_TO_DB':
            const newComponents = [...state.tableData.components, action.payload];
            return { ...state, tableData: { ...state.tableData, components: newComponents } };
        case 'ADD_INTERMEDIATE_DATA':
            const newComponentData = action.payload;
            const newComponent: IntermediateComponent = {
                category: newComponentData.category,
                comp_name: newComponentData.comp_name,
                amount: newComponentData.amount,
            };
            const updatedComponents = [...state.tableData.inter_components, newComponent];
            return { ...state, tableData: { ...state.tableData, inter_components: updatedComponents } };
        case 'SET_DEVICE_NAMES':
            return {
                ...state,
                tableData: {
                    ...state.tableData,
                    device_components: { device_names: action.payload.device_names },
                },
            };
        case 'LOGIN':
            return { ...state, user: action.payload };
        case 'LOGOUT':
            return { ...state, user: null };
        default:
            return state;
    }
};

export default rootReducer;
