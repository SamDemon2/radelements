import { combineReducers, configureStore, applyMiddleware } from '@reduxjs/toolkit';
import rootReducer from './reducers';
import thunk from 'redux-thunk';

const combinedReducer = combineReducers({
    tableData: rootReducer,
});

const store = configureStore({
    reducer: combinedReducer,
    middleware: [thunk],
});

export type RootState = ReturnType<typeof combinedReducer>;
export { store };
