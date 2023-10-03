import React, { useState } from 'react';

const options = [
    {
        label: 'Вариант 1',
        subOptions: [
            'Дополнительный вариант 1-1',
            'Дополнительный вариант 1-2',
            'Дополнительный вариант 1-3',
        ],
    },
    {
        label: 'Вариант 2',
        subOptions: ['Дополнительный вариант 2-1', 'Дополнительный вариант 2-2'],
    },
    {
        label: 'Вариант 3',
        subOptions: ['Дополнительный вариант 3-1', 'Дополнительный вариант 3-2'],
    },
];

const Dropdown = () => {
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [subSelectedOption, setSubSelectedOption] = useState<string | null>(null);
    const [formValue, setFormValue] = useState<string>('');

    const handleOptionSelect = (option: string) => {
        setSelectedOption(option);
        setSubSelectedOption(null);
        setFormValue(option);
    };

    const handleSubOptionSelect = (subOption: string) => {
        setSubSelectedOption(subOption);
        setFormValue(subOption);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="selectedOption" className="form-label">
                                Выбранный вариант:
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="selectedOption"
                                value={formValue}
                                readOnly
                            />
                        </div>
                    </form>
                </div>
                <div className="col-md-6">
                    <div className="dropdown">
                        <button
                            className="btn btn-secondary dropdown-toggle"
                            type="button"
                            id="dropdownMenuButton"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                            {selectedOption ? selectedOption : 'Выберите вариант'}
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            {options.map((option, index) => (
                                <div key={index}>
                                    <button
                                        className="dropdown-item"
                                        onClick={() => handleOptionSelect(option.label)}
                                    >
                                        {option.label}
                                    </button>
                                    {selectedOption === option.label && (
                                        <div className="sub-dropdown">
                                            {option.subOptions.map((subOption, subIndex) => (
                                                <button
                                                    key={subIndex}
                                                    className="dropdown-item"
                                                    onClick={() => handleSubOptionSelect(subOption)}
                                                >
                                                    {subOption}
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary mt-2">
                        Отправить
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Dropdown;
