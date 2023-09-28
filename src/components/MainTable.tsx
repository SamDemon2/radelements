import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import Test_API from '../api/ApiTest_1';
import { RootState } from '../redux/store';

interface RadioComponent {
  id: number;
  name: string;
  amount: number;
}

const MainTable: React.FC = () => {
  const reduxTableData = useSelector((state: RootState) => state.tableData);


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
              reduxTableData.tableData.components.map((item: RadioComponent) => (
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
        <Test_API/>
      </div>
  );
};

export default MainTable;
