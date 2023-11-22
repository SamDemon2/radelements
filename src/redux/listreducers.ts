import { Reducer } from 'redux';

// Новый тип состояния для tableDataElementChoices
export interface TableDataElementChoicesState {
    elementChoices: string[];
}

// Действия для работы с новым состоянием
type TableDataElementChoicesActionTypes =
    | { type: 'SET_ELEMENT_CHOICES'; payload: string[] };

// Начальное состояние
const initialTableDataElementChoicesState: TableDataElementChoicesState = {
    elementChoices: [],
};

// Редюсер для нового состояния
const tableDataElementChoicesReducer: Reducer<TableDataElementChoicesState, TableDataElementChoicesActionTypes> = (
    state = initialTableDataElementChoicesState,
    action
) => {
    switch (action.type) {
        case 'SET_ELEMENT_CHOICES':
            return { ...state, elementChoices: action.payload };
        default:
            return state;
    }
};

export default tableDataElementChoicesReducer;
