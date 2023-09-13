import { combineReducers, configureStore } from '@reduxjs/toolkit';
import rootReducer, {authReducer} from './reducers';

const combinedReducer = combineReducers({
    tableData: rootReducer,
    user: authReducer,
});

const store = configureStore({
    reducer: combinedReducer,
});

export type RootState = ReturnType<typeof combinedReducer>;
export { store };
