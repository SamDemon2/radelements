import React from "react";

interface AddDeviceTableProps {
    deviceName: string;
    selectedComponent: string;
    amount: number;
}

const AddDeviceTable: React.FC<AddDeviceTableProps> = ({ deviceName, selectedComponent, amount }) => {
    return (
        <div>
            <h3>Device Name: {deviceName}</h3>
            <table className="table table-dark table-striped table-bordered table-hover">
                <thead>
                <tr>
                    <th className="px-0">Название компонента</th>
                    <th className="px-0">Количество компонентов</th>
                </tr>
                </thead>
                <tbody className="text-black">
                {/* Вывод данных только в два последних столбца */}
                <tr>
                    <td>{selectedComponent}</td>
                    <td>{amount}</td>
                </tr>
                </tbody>
            </table>
            <button type="button" className="btn btn-primary" /*onClick={handleSentToDatabase}*/>
                Sent to database
            </button>
        </div>
    );
};

export default AddDeviceTable;
