import React from "react";
import { RootState } from "../redux/store";
import { useSelector } from "react-redux"; // Импортируем хук useSelector из 'react-redux'

const IntermediateTable = () => {
    // Используем useSelector, чтобы получить данные из хранилища
    const intermediateComponents = useSelector((state:RootState) => state.rootState.tableData.inter_components);

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
            <button type="submit" className="btn btn-primary">Sent to database</button>
        </div>
    );
};

export default IntermediateTable;
