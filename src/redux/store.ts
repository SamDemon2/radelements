import { combineReducers, configureStore } from '@reduxjs/toolkit';
import rootReducer, { getTestData, RadioComponent } from './reducers';
import { setTableData } from './actions';

export interface RootState {
    tableData: {
        tableData: RadioComponent[];
    };
}

const combinedReducer = combineReducers({
    tableData: rootReducer,
});

const initialTableData: RadioComponent[] = getTestData(100);

const store = configureStore({
    reducer: combinedReducer,
    preloadedState: {
        tableData: { tableData: initialTableData },
    },
});

export { store, setTableData };
