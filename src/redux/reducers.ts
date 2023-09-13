import { Reducer } from 'redux';
import { User } from "./authActions";

// Определите интерфейсы для компонентов и заказов
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

// Определите тип RootState, включая данные таблицы и пользователя
export interface RootState {
    tableData: {
        components: RadioComponent[];
        order_components: OrderItem[];
    };
    user: User | null;
}

// Генератор случайных чисел в заданном диапазоне
function getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Генератор случайных имен компонентов
function getRandomName(): string {
    const names: string[] = ['Resistor395', 'Capacitor123', 'Inductor789', 'Transistor456'];
    const randomIndex: number = getRandomNumber(0, names.length - 1);
    return names[randomIndex];
}

// Генератор тестовых данных для компонентов
export function getTestData(count: number): RadioComponent[] {
    const rows: RadioComponent[] = [];
    for (let i = 0; i < count; i++) {
        rows.push({ id: getRandomNumber(1, 45), name: getRandomName(), amount: getRandomNumber(0, count * 10) });
    }
    return rows;
}

// Генератор тестовых данных для заказов
export function getTestOrdData(count: number): OrderItem[] {
    const rows_ord: OrderItem[] = [];
    for (let i = 0; i < count; i++) {
        rows_ord.push({ component: getRandomName(), in_stock: getRandomNumber(1, 45), amount_need: getRandomNumber(1, 45) });
    }
    return rows_ord;
}

// Начальное состояние хранилища
const initialState: RootState = {
    tableData: {
        components: getTestData(100),
        order_components: getTestOrdData(4),
    },
    user: null, // Исходно пользователь не авторизован
};

// Редуктор для обработки действий связанных с данными таблицы
const tableDataReducer: Reducer<RootState["tableData"]> = (state = initialState.tableData, action) => {
    switch (action.type) {
        case 'SET_TABLE_DATA':
            return { ...state, components: action.payload };
        case 'SET_ORD_TABLE_DATA':
            return { ...state, order_components: action.payload };
        default:
            return state;
    }
};

// Редуктор для обработки авторизации и выхода пользователя
const userReducer: Reducer<RootState["user"]> = (state = initialState.user, action) => {
    switch (action.type) {
        case 'LOGIN':
            return action.payload; // После входа пользователь сохраняется в состоянии
        case 'LOGOUT':
            return null; // При выходе пользователь удаляется из состояния
        default:
            return state;
    }
};

// Объединение редукторов
const rootReducer: Reducer<RootState> = (state = initialState, action) => {
    return {
        tableData: tableDataReducer(state.tableData, action),
        user: userReducer(state.user, action),
    };
};

export default rootReducer;
