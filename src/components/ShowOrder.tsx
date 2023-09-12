import React from "react";
import {useSelector} from "react-redux";
import {RootState} from "../redux/store";

interface OrderItem {
  component: string;
  in_stock: number;
  amount_need: number;
}

const ShowOrder: React.FC = () => {
  const reduxTableData = useSelector((state:RootState) => state.tableData);

  return <>
    <div className=" row my-3 ms-3 me-3 d-flex justify-content-center">
      <table className="table custom-table table-striped">
        <thead>
          <tr>
            <th>Component</th>
            <th>In stock</th>
            <th>Amount need</th>
          </tr>
        </thead>
        <tbody>
        {reduxTableData ? (
            reduxTableData.tableData.order_components.map((item: OrderItem) => (
                <tr key={item.component}>
                  <td>{item.component}</td>
                  <td>{item.in_stock}</td>
                  <td>{item.amount_need}</td>
                </tr>
            ))
        ) : (
         <tr>
           <td colSpan={3} > No data</td>
         </tr>
        )}
        </tbody>
      </table>
      <div className="">
        <button type="submit" className="btn btn-primary">Submit</button>
      </div>
    </div>
  </>
}
export default ShowOrder;