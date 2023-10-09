import React from "react";
//Device
const Base = () => {
    return <>
        <div className="ms-3 me-3">
           <div className="row my-3">
            <div className="col-md-2 d-flex">
                <span> Select device name</span>
            </div>
            <div className="col-md-3">
        <select className="form-select w-100" aria-label="Default select example">
            <option selected>Select device name</option>
            <option value="1">Device_1</option>
            <option value="2">Device_2</option>
            <option value="3">Device_3</option>
            <option value="3">Device_4</option>
            <option value="1">Device_5</option>
            <option value="2">Device_6</option>
            <option value="3">Device_7</option>
        </select>
            </div>
        </div>
       <div className="row my-3">
           <div className="col-md-2 d-flex">
               <span> Select amount</span>
           </div>
           <div className="col-md-3">
               <input className="form-control w-100"/>
           </div>
       </div>
        <div className="row my-3">
            <div className="col-md-2 d-flex justify-content-start">
            <button type="submit" className="btn btn-primary">Submit</button>
            </div>
        </div>
        </div>

    </>
}
export default Base;