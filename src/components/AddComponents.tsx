import React from "react";
import Dropdown from "./TrickyForm";

const AddComponents = () => {
  return <>
      <div className="ms-3 me-3">
        <div className="row my-3">
            <div className="row my-3 bold-text d-flex justify-content-center">
                Add current comp
            </div>
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
              <div className="col-3 d-flex justify-content-center">
                <input className="w-100"/>
              </div>
          </div>
          <div className="row my-4">
              <div className="row my-3 bold-text d-flex justify-content-center">
                  Add new element
              </div>
          </div>
          <div className="row my-3">
            <div className="col-6">
                Comp_name
            </div>
              <div className="col-3">
                <input/>
              </div>
          </div>
          <div className="row my-3">
              <div className="col-6">
                  Comp_name
              </div>
              <div className="col-3">
                  <input/>
              </div>
          </div>
          <div className="row my-3">
              <div className="col-6">
                  Category
              </div>
            <div className="col-3">
                <select className="form-select" aria-label="Default select example">
                    <option selected>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>
          </div>
          <div className="row my-3">
            <div className="col-6">
                Amount
            </div>
            <div className="col-3">
                <input/>
            </div>
              <div className="row my-3">
                  <div className="col-6">
                      <button className="btn btn-primary">
                          Submit
                      </button>
                  </div>
                  <div className="col-6">
                    <button className=" btn btn-primary">
                        Add over
                    </button>
                  </div>
              </div>
          </div>
      </div>
  </>;
};
export default AddComponents;