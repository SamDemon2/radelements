import { Reducer } from 'redux';

export interface RadioComponent {
    id: number;
    category: number;
    name: string;
    amount: number;
}

interface AppState {
    tableData: RadioComponent[];
}

function getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomName(): string {
    const names: string[] = ['Resistor395', 'Capacitor123', 'Inductor789', 'Transistor456'];
    const randomIndex: number = getRandomNumber(0, names.length - 1);
    return names[randomIndex];
}

export function getTestData(count: number): RadioComponent[] {
    const rows: RadioComponent[] = [];
    for (let i = 0; i < count; i++) {
        rows.push({ id: getRandomNumber(1, count), category: getRandomNumber(1, count), name: getRandomName(), amount: getRandomNumber(0, count * 100) });
    }
    return rows;
}

const initialState: AppState = {
    tableData: getTestData(100),
};

const rootReducer: Reducer<AppState> = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_TABLE_DATA':
            return { ...state, tableData: action.payload };
        default:
            return state;
    }
};

export default rootReducer;
