import { combineReducers, configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';

const combinedReducer = combineReducers({
    tableData: rootReducer,
});

const store = configureStore({
    reducer: combinedReducer,
});

export type RootState = ReturnType<typeof combinedReducer>;
export { store };
