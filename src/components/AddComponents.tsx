import React from "react";
import { useSelector } from "react-redux";
import { RootState, IntermediateComponent } from "../redux/reducers"; // Импортируем RootState и IntermediateComponent из ваших reducers

const IntermediateTable = () => {
    // Используем useSelector с указанием типа RootState
    const intermediateComponents: IntermediateComponent[] = useSelector(
        (state: RootState) => state.tableData.inter_components
    );

    return (
        <table className="table table-dark table-striped table-bordered table-hover">
            <thead>
            <tr>
                <th className="px-0">ID</th>
                <th className="px-0">Название</th>
                <th className="px-0">Количество</th>
            </tr>
            </thead>
            <tbody className="text-black">
            {intermediateComponents.map((component) => (
                <tr key={component.id}>
                    <td>{component.id}</td>
                    <td>{component.comp_name}</td>
                    <td>{component.amount}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
};

export default IntermediateTable;
