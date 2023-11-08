import React, {useState} from "react";
import Dropdown from "./TrickyForm";
import {useDispatch} from "react-redux";
import {addIntermediateData} from "../redux/actions";
import IntermediateTable from "./IntermediateTable";

const AddComponents = () => {
    const dispatch =useDispatch();
    const [formData, setFormFata] = useState({
        category: "",
        comp_name: "",
        amount: 0,
    })
    const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setFormFata({
            ...formData,
            [name]: value,
        });
    };
    const handleSubmit = (e:React.FormEvent) => {
      e.preventDefault();
      dispatch(addIntermediateData(formData));
    };
    return <>
        <div className="ms-3 me-3">
            <div className="row my-3">
                <div className="row my-3 bold-text d-flex justify-content-start">
                    <div className="col-6">
                        Add current comp
                    </div>
                </div>
                <div className="col-2">
                    comp_category
                </div>
                <div className="col-3">
                    {/*<Dropdown/>*/}
                    <select className="form-select w-100" aria-label="Default select example">
                        <option selected>Chose name</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div className='col-2'>

                </div>
                <div className="col-4">
                    <IntermediateTable/>
                </div>
            </div>
            <div className="row my-3">
                <div className="col-2">
                    comp_name
                </div>
                <div className="col-3">
                    <select className="form-select w-100">
                        <option selected>Chose category</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
            </div>
            <div className="row my-3">
                <div className="col-2">
                    amount_add
                </div>
                <div className="col-3 d-flex justify-content-center">
                    <input className="w-100"/>
                </div>
            </div>
            <div className="row my-3">
                <div className="col-3">

                </div>
                <div className="col-1">
                    <button className="btn btn-primary">
                        Submit
                     </button>
                </div>
            </div>
            <div className="row my-4">
                <div className="row my-3 bold-text d-flex justify-content-start">
                    <div className="col-6">
                        Add new element
                    </div>
                </div>
            </div>
            <div className="row my-3">
                <div className="col-2">
                    Category
                </div>
                <div className="col-3 d-flex justify-content-center">
                    <select className="form-select w-100" aria-label="Default select example">
                        <option selected>Chose category</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
            </div>
            <div className="row my-3">

            <div className="col-2">
                comp_name
            </div>
            <div className="col-3 d-flex justify-content-center">
                <input className="w-100"/>
            </div>
            </div>
            <div className="row my-3">
                <div className="col-2">
                    Amount
                </div>
                <div className="col-3 d-flex justify-content-center">
                    <input className="w-100"/>
                </div>
                <div className="row  my-3 d-flex justify-content-start">
                    <div className="col-2">

                    </div>
                    <div className="col-1 d-flex justify-content-end">
                        <button className="btn btn-primary">
                            Submit
                        </button>
                    </div>
                    <div className="col-1"></div>
                    <div className="col-1 d-flex justify-content-start">
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