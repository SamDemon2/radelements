import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/reducers';
import { fetchDeviceNames } from '../redux/actions';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';

const Base = () => {
    const dispatch = useDispatch();
    const reduxTableData = useSelector((state: RootState) => state.tableData);

    const [selectedDevice, setSelectedDevice] = useState<string>('');
    const [amount, setAmount] = useState<string>('');

    useEffect(() => {
        dispatch(fetchDeviceNames() as any);
    }, [dispatch]);

    const handleDeviceChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setSelectedDevice(e.target.value);
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        // Ваша логика для обработки данных при отправке формы
    };

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
                                {reduxTableData ? (
                                    <>
                                        <option value="" disabled>
                                            Select device name
                                        </option>
                                        {reduxTableData.device_components.map((item) => (
                                            <option  value={item.device_names}>
                                                {item.device_names}
                                            </option>
                                        ))}
                                    </>
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
