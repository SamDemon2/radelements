import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {addIntermediateData} from "../redux/actions";
import IntermediateTable from "./IntermediateTable";

const AddComponents = () => {
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
            <form onSubmit={handleTopSubmit}>
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
                    <select  name="comp_name"
                             value={topFormData.comp_name}
                             onChange={handleTopCompNameChange}
                             className="form-select w-100">
                        <option selected>Chose name</option>
                        <option value="Resistor 395 Ohms">Resistor 395 Ohms</option>
                        <option value="Capacitor 10 µF">Capacitor 10 µF</option>
                        <option value="NPN Transistor BC547">NPN Transistor BC547</option>
                        <option value="5mm Light Emitting Diode (LED)">5mm Light Emitting Diode (LED)</option>
                        <option value="12V Relay">12V Relay</option>
                        <option value="Piezoelectric Buzzer (3.5 kHz)">Piezoelectric Buzzer (3.5 kHz)</option>
                        <option value="Transformer 220V/12V">Transformer 220V/12V</option>
                        <option value="DS18B20 Temperature Sensor">DS18B20 Temperature Sensor</option>
                        <option value="Optocoupler PC817">Optocoupler PC817</option>
                        <option value="Arduino Uno Microcontroller">Arduino Uno Microcontroller</option>
                        <option value="Tactile Push Button 1">Tactile Push Button 1</option>
                        <option value="1 kOhm Resistor">1 kOhm Resistor</option>
                        <option value="100 µF Electrolytic Capacitor">100 µF Electrolytic Capacitor</option>
                        <option value="PNP Transistor 2N3906">PNP Transistor 2N3906</option>
                        <option value="1N4148 Diode">1N4148 Diode</option>
                    </select>
                </div>
            </div>
            </form>
            <form onSubmit={handleBottomSubmit}>
            <div className="row my-3">
                <div className="col-2">
                    amount_add
                </div>
                <div className="col-3 d-flex justify-content-center">
                    <input
                        name="amount"
                        value={topFormData.amount}
                        onChange={handleTopAmountChange}
                        className="w-100"
                    type="number"/>
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
                    <select
                        name="category"
                        value={bottomFormData.category}
                        onChange={handleBottomCategoryChange}
                        className="form-select w-100" aria-label="Default select example">
                        <option selected>Chose category</option>
                        <option value="1">Resistor</option>
                        <option value="2">Capacitor</option>
                        <option value="3">NPN Transistor</option>
                        <option value="4">LED</option>
                        <option value="5">Relay</option>
                        <option value="6">Piezoelectric Buzzer</option>
                    </select>
                </div>
            </div>
            <div className="row my-3">

            <div className="col-2">
                comp_name
            </div>
            <div className="col-3 d-flex justify-content-center">
                <input
                    name="name"
                    value={bottomFormData.comp_name}
                    onChange={handleBottomCompNameChange}
                    className="w-100"
                    type="string"
                />
            </div>
            </div>
            <div className="row my-3">
                <div className="col-2">
                    Amount
                </div>
                <div className="col-3 d-flex justify-content-center">
                    <input
                        name="amount"
                        value={bottomFormData.amount}
                        onChange={handleBottomAmountChange}
                        className="w-100"
                        type="number"
                    />
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
            </form>
        </div>
    </>;
};
export default AddComponents;