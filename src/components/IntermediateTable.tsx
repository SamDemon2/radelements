import React from "react";
import {  useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { postAddComponentData } from "../api/requests";
import { useNavigate } from "react-router-dom"; // Импортируем useNavigate

// Опишем тип данных для объекта, который будет отправлен на сервер
interface AddComponentData {
    category: string;
    comp_name: string;
    amount_add: number;
}

const IntermediateTable = () => {
    const intermediateComponents = useSelector(
        (state: RootState) => state.rootState.tableData.inter_components
    );

    const navigate = useNavigate(); // Инициализируем useNavigate

    const handleSentToDatabase = async () => {
        try {
            // Создаем массив данных для отправки на сервер
            const dataToSend: AddComponentData[] = intermediateComponents.map(
                (component) => ({
                    category: component.category,
                    comp_name: component.comp_name,
                    amount_add: component.amount,
                })
            );

            // Отправляем данные на сервер
            await postAddComponentData(dataToSend);

            // Выполняем какие-то дополнительные действия после успешной отправки, если необходимо

            // Выполняем редирект на другую страницу
            navigate("/my-table"); // Замените "/your-redirect-path" на путь, куда вы хотите перейти

        } catch (error) {
            console.error("Error sending data to server:", error);
            // Обработка ошибок
        }
    };

    return (
        <div>
            <table className="table table-dark table-striped table-bordered table-hover">
                <thead>
                <tr>
                    <th className="px-0">Категория</th>
                    <th className="px-0">Название</th>
                    <th className="px-0">Количество</th>
                </tr>
                </thead>
                <tbody className="text-black">
                {intermediateComponents.map((component) => (
                    <tr key={`${component.category}-${component.comp_name}`}>
                        <td>{component.category}</td>
                        <td>{component.comp_name}</td>
                        <td>{component.amount}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            <button type="button" className="btn btn-primary" onClick={handleSentToDatabase}>
                В базу данных
            </button>
        </div>
    );
};

export default IntermediateTable;
