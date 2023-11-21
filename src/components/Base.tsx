import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/reducers';
import { fetchDeviceNames } from '../redux/actions';

const Base = () => {
    const dispatch = useDispatch();
    const reduxTableData = useSelector((state: RootState) => state.tableData);

    const [selectedDevice, setSelectedDevice] = useState<string>('');
    const [amount, setAmount] = useState<string>('');

    useEffect(() => {
        // Вызываем fetchDeviceNames при монтировании компонента
        dispatch(fetchDeviceNames() as any);
    }, [dispatch]);

    const handleDeviceChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setSelectedDevice(e.target.value);
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        // Ваша логика для обработки данных при отправке формы
    };

    // Проверяем наличие reduxTableData и его свойств перед использованием
    const deviceNames = reduxTableData?.device_components?.device_names || [];

    return (
        <>
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
                                {deviceNames.length > 0 ? (
                                    deviceNames.map((item) => (
                                        <option key={item} value={item}>
                                            {item}
                                        </option>
                                    ))
                                ) : (
                                    <option value="" disabled>
                                        No device names available
                                    </option>
                                )}
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
        </>
    );
};

export default Base;
