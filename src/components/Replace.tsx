import React, { useState } from "react";
import { sendElementToServer } from "../redux/actions";
import { useDispatch } from "react-redux";
import { RadioComponent } from "../redux/reducers";

const Replace = () => {
    const [selectedElement, setSelectedElement] = useState("");
    const dispatch = useDispatch();

    const handleElementChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedElement(event.target.value);
    };

    const handleAddToDatabase = () => {
        if (selectedElement) {
            const radioComponent: RadioComponent = { id: 0, name: selectedElement, amount: 0 };
            dispatch(sendElementToServer(radioComponent) as any).then(() => {
                setSelectedElement("");
            });

        }
    };

    return (
        <div className="container">
            <div className="row my-5">
                <div className="col-md-6 offset-md-3">
                    <h3 className="text-center">Select an element</h3>
                    <select
                        className="form-select w-100 mb-3"
                        aria-label="Default select example"
                        value={selectedElement}
                        onChange={handleElementChange}
                    >
                        <option value="">--------</option>
                        <option value="Element_1">Element_1</option>
                        <option value="Element_2">Element_2</option>
                        <option value="Element_3">Element_3</option>
                        <option value="Element_4">Element_4</option>
                        <option value="Element_5">Element_5</option>
                        <option value="Element_6">Element_6</option>
                        <option value="Element_7">Element_7</option>
                    </select>
                    <div className="d-grid">
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={handleAddToDatabase}
                        >
                            ОК
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Replace;
