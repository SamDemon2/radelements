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

    const compNames = useSelector((state: RootState) => state.rootState.tableData.add_names_components);

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
                        Добавить существующий компонент
                    </div>
                </div>
                <div className="col-3">
                    Категория
                </div>
                <div className="col-5">
                    <select  name="category"
                             value={topFormData.category}
                             onChange={handleTopCategoryChange}
                             className="form-select w-100" aria-label="Default select example">
                        <option value="" disabled>Выберите категорию</option>
                        {compNames.categories.map((category) => (
                            <option key={category} value={category}>
                                {category}
                            </option>
                        ))}
                    </select>
                </div>

            </div>

            <div className="row my-3">
                <div className="col-3">
                    Имя
                </div>
                <div className="col-5">
                    <select  name="comp_name"
                             value={topFormData.comp_name}
                             onChange={handleTopCompNameChange}
                             className="form-select w-100">
                        <option value="" disabled>Выберите имя</option>
                        {compNames.comp_names.map((name) => (
                            <option key={name} value={name}>
                        {name}
                            </option>
                            ))}
                    </select>
                </div>
            </div>


            <div className="row my-3">
                <div className="col-3">
                    Количество
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
                        Подтвердить
                     </button>
                </div>
            </div>
            </form>
            <div className="row my-4">
                <div className="row my-3 bold-text d-flex justify-content-start">
                    <div className="col-8">
                        Добавить новый компонент
                    </div>
                </div>
            </div>
            <form onSubmit={handleBottomSubmit}>
            <div className="row my-3">
                <div className="col-3">
                    Категория
                </div>
                <div className="col-5 d-flex justify-content-center">
                    <select
                        name="category"
                        value={bottomFormData.category}
                        onChange={handleBottomCategoryChange}
                        className="form-select w-100" aria-label="Default select example">
                        <option value="" disabled>Выберите категорию</option>
                        {compNames.categories.map((category) => (
                            <option key={category} value={category}>
                                {category}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
            <div className="row my-3">

            <div className="col-3">
                Имя
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
                    Количество
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
                    <div className="col-2 d-flex justify-content-end">
                        <button className="btn btn-primary">
                            Подтвердить
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