import React from "react";
import TrickyForm from "./TrickyForm";
import Dropdown from "./TrickyForm";

const AddComponents = () => {
  return <>
      <div className="ms-3 me-3">
        <div className="row my-3">
            <div className="col-6">
                comp_name
            </div>
            <div className="col-6">
                <Dropdown/>
            </div>
        </div>
          <div className="row my-3">
              <div className="col-6">
                  amount_add
              </div>
              <div className="col-6">

              </div>
          </div>
      </div>
  </>;
};
export default AddComponents;