import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { fetchShowData } from "../redux/actions";
import {Link} from "react-router-dom";

interface OrderItem {
  component: string;
  in_stock: number;
  amount_need: number;
}

const ShowOrder: React.FC = () => {
  const reduxTableData = useSelector((state: RootState) => state.rootState.tableData.show_components);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchShowData() as any);
  }, [dispatch]);

  return (
      <>
        <div className="row my-3 ms-3 me-3 d-flex justify-content-center">
          <table className="table custom-table table-striped">
            <thead>
            <tr>
              <th>Component</th>
              <th>In stock</th>
              <th>Amount need</th>
            </tr>
            </thead>
            <tbody>
            {reduxTableData && reduxTableData.length > 0 ? (
                reduxTableData.map((item: OrderItem) => (
                    <tr key={item.component}>
                      <td>{item.component}</td>
                      <td>{item.in_stock}</td>
                      <td>{item.amount_need}</td>
                    </tr>
                ))
            ) : (
                <tr>
                  <td colSpan={3}>No data</td>
                </tr>
            )}
            </tbody>
          </table>
          <div className="">
            <button type="submit" className="btn btn-primary">
              <Link to={"/my-table"} style={{ textDecoration: 'none', color: 'white' }}> Submit </Link>
            </button>
          </div>
        </div>
      </>
  );
};

export default ShowOrder;
