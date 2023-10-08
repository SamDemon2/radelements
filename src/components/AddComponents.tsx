import React from "react";
import Dropdown from "./TrickyForm";

const AddComponents = () => {
  return <>
      <div className="ms-3 me-3">
        <div className="row my-3">
            <div className="col-3">
                comp_name
            </div>
            <div className="col-6">
                <Dropdown/>
            </div>
        </div>
          <div className="row my-3">
              <div className="col-3">
                  amount_add
              </div>
              <div className="col-3 d-flex justify-content-center">
                    <input className="w-100"/>
              </div>
          </div>
      </div>
  </>;
};
export default AddComponents;