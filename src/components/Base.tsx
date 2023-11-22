// import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
// import axios from "axios";
// const Base = () => {
//     const [deviceNames, setDeviceNames] = useState<string[]>([]);
//     const [selectedDevice, setSelectedDevice] = useState<string>("");
//     const [amount, setAmount] = useState<string>("");
//
//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await axios.get('http://127.0.0.1:8000/api/v1/add/');
//                 setDeviceNames(response.data.device_names);
//             } catch (error) {
//                 console.error('Error fetching device names:', error);
//             }
//         };
//         fetchData();
//     }, []);
//
//     const handleDeviceChange = (e: ChangeEvent<HTMLSelectElement>) => {
//         setSelectedDevice(e.target.value);
//     };
//
//     const handleSubmit = (e: FormEvent) => {
//         e.preventDefault();
//         // Ваша логика для обработки данных при отправке формы
//     };
//
//     return (
//         <div className="ms-3 me-3">
//             <form onSubmit={handleSubmit}>
//                 <div className="row my-3">
//                     <div className="col-md-2 d-flex">
//                         <span>Select device name</span>
//                     </div>
//                     <div className="col-md-3">
//                         <select
//                             className="form-select w-100"
//                             aria-label="Default select example"
//                             value={selectedDevice}
//                             onChange={handleDeviceChange}
//                         >
//                             <option value="" disabled>Select device name</option>
//                             {deviceNames.map((device, index) => (
//                                 <option key={index} value={device}>
//                                     {device}
//                                 </option>
//                             ))}
//                         </select>
//                     </div>
//                 </div>
//                 <div className="row my-3">
//                     <div className="col-md-2 d-flex">
//                         <span>Select amount</span>
//                     </div>
//                     <div className="col-md-3">
//                         <input
//                             className="form-control w-100"
//                             value={amount}
//                             onChange={(e) => setAmount(e.target.value)}
//                         />
//                     </div>
//                 </div>
//                 <div className="row my-3">
//                     <div className="col-md-2 d-flex justify-content-start">
//                         <button type="submit" className="btn btn-primary">
//                             Submit
//                         </button>
//                     </div>
//                 </div>
//             </form>
//         </div>
//     );
// };
// export default Base;




// Base.tsx

import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { useDispatch, useSelector } from 'react-redux';
import {fetchDeviceNames} from '../redux/actions';
import { RootState } from "../redux/store";

const Base: React.FC = () => {
    const [selectedDevice, setSelectedDevice] = useState<string>("");
    const [amount, setAmount] = useState<string>("");
    // Обновляем тип для хранения только device_names
    const dispatch = useDispatch();

    useEffect(() => {
       dispatch(fetchDeviceNames() as any);
    }, [dispatch]);

    const reduxTableData = useSelector((state: RootState) => state.rootState.tableData.device_components.device_names);

    const handleDeviceChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setSelectedDevice(e.target.value);
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        // Ваша логика для обработки данных при отправке формы
    };
    if(!reduxTableData || reduxTableData.length === 0)
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
