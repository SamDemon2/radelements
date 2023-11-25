import React, { useState, useEffect } from 'react';
import { sendElementToServer } from '../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { ReplacementChoice } from '../redux/reducers';

const Replace = () => {
    const [selectedElement, setSelectedElement] = useState('');
    const dispatch = useDispatch();


    const handleElementChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedElement(event.target.value);
    };

    const handleAddToDatabase = () => {
        if (selectedElement) {
            const replacementChoice: ReplacementChoice = {
                replacement_choice: selectedElement,
            };
            dispatch(sendElementToServer(replacementChoice) as any).then(() => {
                setSelectedElement('');
            });
        }
    };

    return (
        <div className="container">
            <div className="row my-5">
                <div className="col-md-6 offset-md-3">
                    <h3 className="text-center">Select a radio component</h3>
                    <select
                        className="form-select w-100 mb-3"
                        aria-label="Default select example"
                        value={selectedElement}
                        onChange={handleElementChange}
                    >
                        <option value="">--------</option>
                        <option value="RadioComponent1">Radio Component 1</option>
                        <option value="RadioComponent2">Radio Component 2</option>
                        <option value="RadioComponent3">Radio Component 3</option>
                        <option value="RadioComponent4">Radio Component 4</option>
                        <option value="RadioComponent5">Radio Component 5</option>
                        <option value="RadioComponent6">Radio Component 6</option>
                        <option value="RadioComponent7">Radio Component 7</option>
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
