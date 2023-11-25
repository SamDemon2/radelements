// Base.tsx

import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchDeviceNames } from '../redux/actions';
import { postDeviceData } from '../api/requests'; // Подставьте правильный путь
import { RootState } from "../redux/store";

const Base: React.FC = () => {
    const [selectedDevice, setSelectedDevice] = useState<string>("");
    const [amount, setAmount] = useState<string>("");
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchDeviceNames() as any);
    }, [dispatch]);

    const reduxTableData = useSelector((state: RootState) => state.rootState.tableData.device_components.device_names);

    const handleDeviceChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setSelectedDevice(e.target.value);
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        try {
            const dataToSend = {
                device_name: selectedDevice,
                device_need: parseInt(amount, 10),
            };

            const result = await postDeviceData(dataToSend);
            console.log('Response from the server:', result);

            // Можете выполнить какие-то дополнительные действия после успешного запроса, если необходимо

        } catch (error) {
            console.error('Error while posting data:', error);
            // Обработка ошибок
        }
    };

    if (!reduxTableData || reduxTableData.length === 0)
        return null;

    return (
        <div className="ms-3 me-3">
            <form onSubmit={handleSubmit}>
                <div className="row my-3">
                    <div className="col-md-2 d-flex">
                        <span>Select device name</span>
                    </div>
                    <div className="col-md-3">
                        <select
                            className="form-select w-100"
                            aria-label="Default select example"
                            value={selectedDevice}
                            onChange={handleDeviceChange}
                        >
                            <option value="" disabled>Select device name</option>
                            {reduxTableData.map((device) => (
                                <option key={device} value={device}>
                                    {device}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="row my-3">
                    <div className="col-md-2 d-flex">
                        <span>Select amount</span>
                    </div>
                    <div className="col-md-3">
                        <input
                            className="form-control w-100"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                        />
                    </div>
                </div>
                <div className="row my-3">
                    <div className="col-md-2 d-flex justify-content-start">
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Base;
