import React from "react";
import { postNewDeviceData } from "../api/requests";

interface AddDeviceTableProps {
    deviceName: string;
    components: { component: string; amount: number }[];
}

const AddDeviceTable: React.FC<AddDeviceTableProps> = ({
                                                           deviceName,
                                                           components,
                                                       }) => {
    const handleSentToDatabase = async () => {
        try {
            // Проверка наличия данных перед отправкой
            if (deviceName && components.length > 0) {
                const dataToSend = {
                    device_name: deviceName,
                    comp_data: components.map(({ component, amount }) => ({
                        comp_name: component,
                        amount_need: amount,
                    })),
                };

                // Отправка данных на сервер
                await postNewDeviceData(dataToSend);

                // Выполнение каких-то дополнительных действий после успешной отправки, если необходимо

                console.log("Data sent to the database:", dataToSend);
            } else {
                console.error("Please fill in the device name and components before sending.");
                // Можно вывести сообщение об ошибке или предпринять другие действия
            }
        } catch (error) {
            console.error("Error sending data to the database:", error);
            // Обработка ошибок
        }
    };

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
            <button
                type="button"
                className="btn btn-primary"
                onClick={handleSentToDatabase}
            >
                Sent to database
            </button>
        </div>
    );
};

export default AddDeviceTable;
