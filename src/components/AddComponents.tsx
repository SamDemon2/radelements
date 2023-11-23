import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addIntermediateData, fetchAddNames} from "../redux/actions";
import IntermediateTable from "./IntermediateTable";
import {RootState} from "../redux/store";

const AddComponents: React.FC = () => {
    const dispatch =useDispatch();
    const [topFormData, setTopFormData] = useState({
        category: "",
        comp_name: "",
        amount: 0,
    });

    const [bottomFormData, setBottomFormData] = useState({
        category: "",
        comp_name: "",
        amount: 0,
    });

    const compNames = useSelector((state: RootState) => state.rootState.tableData.add_names_components.comp_names);

    useEffect(() => {
        dispatch(fetchAddNames() as any)
    }, [dispatch]);

    const handleTopCategoryChange = (e:React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target;
        setTopFormData({
            ...topFormData,
            [name]: value,
        });
    };

    const handleTopCompNameChange = (e:React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target;
        setTopFormData({
            ...topFormData,
            [name]: value,
        });
    };

    const handleTopAmountChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setTopFormData({
            ...topFormData,
            [name]: value,
        });
    };

    const handleBottomCategoryChange = (e:React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target;
        setBottomFormData({
            ...bottomFormData,
            [name]: value,
        });
    };

    const handleBottomCompNameChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setBottomFormData({
            ...bottomFormData,
            [name]: value,
        });
    };

    const handleBottomAmountChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setBottomFormData({
            ...bottomFormData,
            [name]: value,
        });
    };

    const handleTopSubmit = (e:React.FormEvent) => {
        e.preventDefault();
        dispatch(addIntermediateData(topFormData));
    };

    const handleBottomSubmit = (e:React.FormEvent) => {
        e.preventDefault();
        dispatch(addIntermediateData(bottomFormData));
    };
    return <>
        <div className="ms-3 me-3">
            <div className="row">
                <div className="col-7">
            <form onSubmit={handleTopSubmit}>
            <div className="row my-3">
                <div className="row my-3 bold-text d-flex justify-content-start">
                    <div className="col-8">
                        Add current comp
                    </div>
                </div>
                <div className="col-3">
                    comp_category
                </div>
                <div className="col-5">
                    <select  name="category"
                             value={topFormData.category}
                             onChange={handleTopCategoryChange}
                             className="form-select w-100" aria-label="Default select example">
                        <option selected>Chose category</option>
                        <option value="Resistor">Resistor</option>
                        <option value="Capacitor">Capacitor</option>
                        <option value="NPN Transistor">NPN Transistor</option>
                        <option value="LED">LED</option>
                        <option value="Relay">Relay</option>
                        <option value="Piezoelectric Buzzer">Piezoelectric Buzzer</option>
                    </select>
                </div>

            </div>

            <div className="row my-3">
                <div className="col-3">
                    comp_name
                </div>
                <div className="col-5">
                    <select  name="comp_name"
                             value={topFormData.comp_name}
                             onChange={handleTopCompNameChange}
                             className="form-select w-100">
                        <option value="" disabled>Chose name</option>
                        {compNames.map((name) => (
                            <option key={name} value={name}>
                        {name}
                            </option>
                            ))}
                    </select>
                </div>
            </div>


            <div className="row my-3">
                <div className="col-3">
                    amount_add
                </div>
                <div className="col-5 d-flex justify-content-center">
                    <input
                        name="amount"
                        value={topFormData.amount}
                        onChange={handleTopAmountChange}
                        className="w-100"
                    type="number"/>
                </div>
            </div>
            <div className="row my-3">
                <div className="col-5">

                </div>
                <div className="col-1">
                    <button className="btn btn-primary">
                        Submit
                     </button>
                </div>
            </div>
            </form>
            <div className="row my-4">
                <div className="row my-3 bold-text d-flex justify-content-start">
                    <div className="col-8">
                        Add new element
                    </div>
                </div>
            </div>
            <form onSubmit={handleBottomSubmit}>
            <div className="row my-3">
                <div className="col-3">
                    Category
                </div>
                <div className="col-5 d-flex justify-content-center">
                    <select
                        name="category"
                        value={bottomFormData.category}
                        onChange={handleBottomCategoryChange}
                        className="form-select w-100" aria-label="Default select example">
                        <option selected>Chose category</option>
                        <option value="Resistor">Resistor</option>
                        <option value="Capacitor">Capacitor</option>
                        <option value="NPN Transistor">NPN Transistor</option>
                        <option value="LED">LED</option>
                        <option value="Relay">Relay</option>
                        <option value="Piezoelectric Buzzer">Piezoelectric Buzzer</option>
                    </select>
                </div>
            </div>
            <div className="row my-3">

            <div className="col-3">
                comp_name
            </div>
            <div className="col-5 d-flex justify-content-center">
                <input
                    name="comp_name"
                    value={bottomFormData.comp_name}
                    onChange={handleBottomCompNameChange}
                    className="w-100"
                    type="text"
                />
            </div>
            </div>
            <div className="row my-3">
                <div className="col-3">
                    Amount
                </div>
                <div className="col-5 d-flex justify-content-center">
                    <input
                        name="amount"
                        value={bottomFormData.amount}
                        onChange={handleBottomAmountChange}
                        className="w-100"
                        type="number"
                    />
                </div>
                <div className="row  my-3 d-flex justify-content-start">
                    <div className="col-4">

                    </div>
                    <div className="col-1 d-flex justify-content-end">
                        <button className="btn btn-primary">
                            Submit
                        </button>
                    </div>
                    <div className="col-1"></div>
                    <div className="col-2 d-flex justify-content-start">
                        <button className=" btn btn-primary">
                            Add over
                        </button>
                    </div>
                </div>
            </div>
            </form>
                </div>
                <div className="col-4 my-4">
                    <IntermediateTable/>
                </div>
            </div>
        </div>
    </>;
};
export default AddComponents;