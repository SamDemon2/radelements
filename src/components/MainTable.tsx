import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

interface RadioComponent {
  id: number;
  category: number;
  name: string;
  amount: number;
}

const MainTable: React.FC = () => {
  const reduxTableData = useSelector((state: RootState) => state.tableData.tableData);

  return (
      <div className="ms-3 me-3 my-3">
        <table className="table table-striped">
          <thead>
          <tr>
            <th>ID</th>
            <th>Категория</th>
            <th>Название</th>
            <th>Количество</th>
          </tr>
          </thead>
          <tbody>
          {reduxTableData.map((item: RadioComponent) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.category}</td>
                <td>{item.name}</td>
                <td>{item.amount}</td>
              </tr>
          ))}
          </tbody>
        </table>
      </div>
  );
};

export default MainTable;
