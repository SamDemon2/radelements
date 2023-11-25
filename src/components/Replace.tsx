import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReplaceList } from '../redux/actions'; // Подставьте свои действия
import { RootState } from '../redux/store';
import {postReplaceData} from "../api/requests";

const Replace: React.FC = () => {
    const [selectedElement, setSelectedElement] = useState('');
    const dispatch = useDispatch();

    // Подставьте ваш селектор
    const replaceList = useSelector((state: RootState) => state.rootState.tableData.replaced_components.replaceList);

    useEffect(() => {
        dispatch(fetchReplaceList() as any); // Подставьте свой метод получения данных
    }, [dispatch]);

    const handleElementChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedElement(event.target.value);
    };

    const handleAddToDatabase = () => {
        if (selectedElement) {
            const data = {
                replacement_choice: selectedElement,
            };

            // Используем ваш метод для отправки данных
            postReplaceData(data)
                .then((response) => {
                    console.log('Data sent successfully:', response);
                    // Добавьте необходимую логику после успешной отправки
                    setSelectedElement('');
                })
                .catch((error) => {
                    console.error('Error sending data to server:', error);
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
                        {replaceList.map((element) => (
                            <option key={element} value={element}>
                                {element}
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
