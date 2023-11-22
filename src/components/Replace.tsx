import React, { useState, useEffect } from 'react';
import { sendElementToServer, fetchElementChoices } from '../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { ReplacementChoice } from '../redux/reducers';
import {TableDataElementChoicesState} from "../redux/listreducers";

const Replace = () => {
    const [selectedElement, setSelectedElement] = useState('');
    const dispatch = useDispatch();

    // Обновленное использование нового состояния
    const elementChoices = useSelector((state: TableDataElementChoicesState) => state.elementChoices);

    useEffect(() => {
        // Вызываем fetchElementChoices при монтировании компонента
        dispatch(fetchElementChoices() as any);
    }, [dispatch]);

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
                    <h3 className="text-center">Select an element</h3>
                    <select
                        className="form-select w-100 mb-3"
                        aria-label="Default select example"
                        value={selectedElement}
                        onChange={handleElementChange}
                    >
                        <option value="">--------</option>
                        {elementChoices && elementChoices.map((data) => (
                            <option key={data} value={data}>
                                {data}
                            </option>
                        ))}
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
