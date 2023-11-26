import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { fetchShowData } from "../redux/actions";
import {Link, useNavigate} from "react-router-dom";

interface OrderItem {
  component: string;
  in_stock: number;
  amount_need: number;
}

const ShowOrder: React.FC = () => {
  const reduxTableData = useSelector(
      (state: RootState) => state.rootState.tableData.show_components
  );
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Хук для навигации

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Выполняем запрос данных
        await dispatch(fetchShowData() as any);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [dispatch]);

  // Проверяем, есть ли данные
  const hasData = reduxTableData && reduxTableData.length > 0;

  // Если данных нет, автоматически выполняем редирект
  useEffect(() => {
    if (!hasData) {
      navigate("/my-replace");
    }
  }, [hasData, navigate]);

  return (
      <>
        <div className="row my-3 ms-3 me-3 d-flex justify-content-center">
          {hasData ? (
              <table className="table custom-table table-striped">
                <thead>
                <tr>
                  <th>Component</th>
                  <th>In stock</th>
                  <th>Amount need</th>
                </tr>
                </thead>
                <tbody>
                {reduxTableData.map((item: OrderItem) => (
                    <tr key={item.component}>
                      <td>{item.component}</td>
                      <td>{item.in_stock}</td>
                      <td>{item.amount_need}</td>
                    </tr>
                ))}
                </tbody>
              </table>
          ) : (
              <p>No data</p>
          )}
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
