import { combineReducers, configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';
import thunk from 'redux-thunk';
import tableDataElementChoicesReducer from "./listreducers";

const combinedReducer = combineReducers({
    tableData: rootReducer,
    tableDataElementChoices: tableDataElementChoicesReducer,
});

const store = configureStore({
    reducer: combinedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk), // Включите redux-thunk как middleware
});

export type RootState = ReturnType<typeof combinedReducer>;
export { store };
