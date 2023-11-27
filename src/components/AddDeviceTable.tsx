import React from "react";

interface AddDeviceTableProps {
    deviceName: string;
    components: { component: string; amount: number }[];
}

const AddDeviceTable: React.FC<AddDeviceTableProps> = ({
                                                           deviceName,
                                                           components,
                                                       }) => {
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
                {components.map((component, index) => (
                    <tr key={index}>
                        <td>{component.component}</td>
                        <td>{component.amount}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            <button type="button" className="btn btn-primary">
                Sent to database
            </button>
        </div>
    );
};

export default AddDeviceTable;
