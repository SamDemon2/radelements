import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../redux/store";
import {fetchCompToDevList} from "../redux/actions";
import AddDeviceTable from "./AddDeviceTable";

const AddDevices: React.FC = () => {
    const dispatch = useDispatch();
    const CTDNames = useSelector((state: RootState)=> state.rootState.tableData.comptodev_componenrs.data);
    useEffect(() => {
        dispatch(fetchCompToDevList() as any)
    }, [dispatch]);

    // if (!CTDNames) {
    //     // Можете добавить здесь индикатор загрузки или вернуть null
    //     return <div>Loading...</div>;
    // }

  return <>
     <div className="ms-3 me-3">
            <div className="row my-3">
                <div className="col-7">
                    <form>
                        <div className="row my-3 bold-text d-flex justify-content-center">
                            Add New Device
                        </div>
                        <div className="row my-3">
                            <div className="col-3">Input Device Names</div>
                            <div className="col-5">
                            <input
                            name="name"
                            type="string"
                            className="w-100"
                             />
                             </div>
                        </div>
                        <div className="row my-3">
                            <div className="col-3">Select components</div>
                            <div className="col-5">
                                 <select className="form-select w-100"
                                         aria-label="Default select example"
                                         name="comp_name">
                                    <option value="" disabled>Select components</option>
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
                                />
                            </div>
                        </div>
                    </form>

                </div>
                <div className="col-4 my-4">
                    <AddDeviceTable/>
                </div>
            </div>
     </div>
  </>;
};
export default AddDevices;