import React, { useEffect, useState } from 'react';
import './App.css';
import Base from "./components/Base";
import Header from "./components/Header";
import { Route, Routes, Outlet, useNavigate, Navigate } from 'react-router-dom'; // Обратите внимание на удаление BrowserRouter
import MainTable from "./components/MainTable";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Replace from "./components/Replace";
import ShowOrder from "./components/ShowOrder";
import LoginForm from "./components/Аuthentication"; // Обратите внимание на исправленное имя компонента

function Layout() {
  return (
      <>
        <Header />
        <Outlet />
      </>
  );
}

function App() {
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    navigate('/my-table');
  };

  return (
      <Provider store={store}>
        <div className="App">
          <Routes> {/* Используйте Routes здесь */}
            <Route path="/" element={<Layout />}>
              {isLoggedIn ? (
                  <Navigate to="/my-table" />
              ) : (
                  <Route
                      index
                      element={
                        <LoginForm
                            onLoginSuccess={handleLoginSuccess}
                        />
                      }
                  />
              )}
              <Route path="my-table" element={<MainTable />} />
              <Route path="my-base" element={<Base />} />
              <Route path="my-replace" element={<Replace />} />
              <Route path="my-orders" element={<ShowOrder />} />
              <Route path="my-auth" element={<LoginForm onLoginSuccess={handleLoginSuccess} />} />
            </Route>
          </Routes>
        </div>
      </Provider>
  );
}

export default App;
