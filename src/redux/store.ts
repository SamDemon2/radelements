import { combineReducers, configureStore } from '@reduxjs/toolkit';
import rootReducer, { getTestData, getTestOrdData, RadioComponent, OrderItem } from './reducers';
import { setTableData, setOrdTableData } from './actions';

export interface RootState {
    tableData: {
        components: RadioComponent[];
        order_components: OrderItem[];
    };
}

const combinedReducer = combineReducers({
    tableData: rootReducer,
});

const initialTableData: RadioComponent[] = getTestData(100);
const initialOrdTableData: OrderItem[] = getTestOrdData(50);

const store = configureStore({
    reducer: combinedReducer,
    preloadedState: {
        tableData: {
            components: initialTableData,
            order_components: initialOrdTableData
        },
    },
});

export { store, setTableData, setOrdTableData };
