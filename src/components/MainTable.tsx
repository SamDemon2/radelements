import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTableData } from '../redux/actions'
import { RootState } from '../redux/store';
import { ThunkDispatch } from 'redux-thunk'; // Импортируем ThunkDispatch
import { AnyAction } from 'redux';

const MainTable = () => {
    const reduxTableData = useSelector((state: RootState) => state.tableData);
    const dispatch: ThunkDispatch<RootState, void, AnyAction> = useDispatch(); // Используем ThunkDispatch

    // Используем ThunkAction вместо простой функции
    useEffect(() => {
        dispatch(fetchTableData() as any); // Приведем fetchTableData к any
    }, [dispatch]);

    return (
        <div className="ms-3 me-3 my-3 d-flex justify-content-center">
            <table className="table  custom-table table-striped ">
                <thead>
                <tr>
                    <th className="px-0">ID</th>
                    <th className="px-0">Название</th>
                    <th className="px-0">Количество</th>
                </tr>
                </thead>
                <tbody>
                {reduxTableData ? (
                    reduxTableData.tableData.components.map((item) => (
                        <tr key={item.id}>
                            <td className="px-0">{item.id}</td>
                            <td className="px-0">{item.name}</td>
                            <td className="px-0">{item.amount}</td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan={3}>Нет данных</td>
                    </tr>
                )}
                </tbody>
            </table>
        </div>
    );
};

export default MainTable;
