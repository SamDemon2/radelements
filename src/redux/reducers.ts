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

export interface ReplaceState  {
    replaceList: string[];
}

export interface DeviceNamesState {
    device_names: string[];
}

export interface AddDeviceNames {
    comp_names: string[];
    categories: string[];
}

export interface CompToDevNames {
    data: string[];
}


export interface TableData {
    components: RadioComponent[];
    order_components: OrderItem[];
    show_components: OrderItem[];
    inter_components: IntermediateComponent[];
    device_components: DeviceNamesState;
    add_names_components: AddDeviceNames;
    replaced_components: ReplaceState;
    comptodev_componenrs: CompToDevNames;
}

export interface RootState {
    tableData: TableData;
    user: User | null;
}

type ActionTypes =
    | { type: 'SET_TABLE_DATA'; payload: RadioComponent[] }
    | { type: 'SET_ORD_TABLE_DATA'; payload: OrderItem[] }
    | { type: 'SET_SHOW_DATA'; payload: OrderItem[] }
    | { type: 'ADD_INTERMEDIATE_DATA'; payload: IntermediateComponent }
    | { type: 'SET_DEVICE_NAMES'; payload: string[] }
    | { type: 'SET_REPLACE_LIST'; payload: string[] }
    | { type: 'SET_COMPTODEV_LIST'; payload: string[] }
    | { type: 'ADD_NEW_DEVICE_NAMES'; payload: AddDeviceNames}
    | { type: 'LOGIN'; payload: User }
    | { type: 'LOGOUT' };

const initialState: RootState = {
    tableData: {
        components: [],
        order_components: [],
        show_components: [],
        inter_components: [],
        device_components: { device_names: [] },
        add_names_components: {comp_names: [], categories: [] },
        replaced_components: {replaceList: []},
        comptodev_componenrs: {data: []},
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
            return { ...state, tableData: {...state.tableData, show_components: action.payload } };

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
                    device_components: {
                        device_names: action.payload
                    }
                }
            };
        case 'SET_REPLACE_LIST':
            return {
                ...state,
                tableData: {
                    ...state.tableData,
                    replaced_components: {
                        replaceList: action.payload
                    }
                }
            };
        case 'SET_COMPTODEV_LIST':
            return {
                ...state,
                tableData: {
                    ...state.tableData,
                    comptodev_componenrs: {
                        data: action.payload
                    }
                }
            };
        case 'ADD_NEW_DEVICE_NAMES':
            return {
                ...state,
                tableData: {
                    ...state.tableData,
                    add_names_components: {
                        comp_names: action.payload.comp_names, categories: action.payload.categories
                    }
                }
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
