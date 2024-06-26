import { combineReducers, configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';
import thunk from 'redux-thunk';

const combinedReducer = combineReducers({
    rootState: rootReducer,
});

const store = configureStore({
    reducer: combinedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk), // Включите redux-thunk как middleware
});

export type RootState = ReturnType<typeof combinedReducer>;
export { store };
