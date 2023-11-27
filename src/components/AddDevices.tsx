import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { fetchCompToDevList } from "../redux/actions";
import AddDeviceTable from "./AddDeviceTable";

const AddDevices: React.FC = () => {
    const dispatch = useDispatch();
    const CTDNames = useSelector(
        (state: RootState) => state.rootState.tableData.comptodev_components.data
    );
    const [deviceName, setDeviceName] = useState<string>("");
    const [selectedComponent, setSelectedComponent] = useState<string>("");
    const [amount, setAmount] = useState<number>(0);
    const [components, setComponents] = useState<{ component: string; amount: number }[]>([]);

    useEffect(() => {
        dispatch(fetchCompToDevList() as any);
    }, [dispatch]);

    const handleDeviceNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDeviceName(e.target.value);
    };

    const handleComponentChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedComponent(e.target.value);
    };

    const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAmount(parseInt(e.target.value, 10));
    };

    const handleAddComponent = () => {
        // Добавляем компонент в массив
        setComponents([...components, { component: selectedComponent, amount }]);
    };

    return (
        <>
            <div className="ms-3 me-3">
                <div className="row my-3">
                    <div className="col-7">
                        <form>
                            <div className="row my-3 bold-text d-flex justify-content-center">
                                Add New Device
                            </div>
                            <div className="row my-3">
                                <div className="row">
                                    <div className="col-3">Input Device Names</div>
                                    <div className="col-5">
                                        <input
                                            name="name"
                                            type="string"
                                            className="w-100"
                                            value={deviceName}
                                            onChange={handleDeviceNameChange}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row my-3">
                                <div className="col-3">Select components</div>
                                <div className="col-5">
                                    <select
                                        className="form-select w-100"
                                        aria-label="Default select example"
                                        name="comp_name"
                                        value={selectedComponent}
                                        onChange={handleComponentChange}
                                    >
                                        <option value="" disabled>
                                            Select components
                                        </option>
                                        {CTDNames.map((device) => (
                                            <option key={device} value={device}>
                                                {device}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <div className="row my-3">
                                <div className="col-3">Input amount</div>
                                <div className="col-5">
                                    <input
                                        className="w-100"
                                        name="amount"
                                        type="number"
                                        value={amount}
                                        onChange={handleAmountChange}
                                    />
                                </div>
                                <div className="row my-3">
                                    <div className="col-4"></div>
                                    <div className="col-3">
                                        <button
                                            type="button"
                                            className="btn btn-primary"
                                            onClick={handleAddComponent}
                                        >
                                            Add Component
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-4 my-4">
                        <AddDeviceTable
                            deviceName={deviceName}
                            components={components}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddDevices;
