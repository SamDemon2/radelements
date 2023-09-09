import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Base from "./components/Base";
import Header from "./components/Header";
import {BrowserRouter as Router, Route, Routes, Navigate, Outlet} from 'react-router-dom';
import MainTable from "./components/MainTable";
import {Provider, useSelector} from "react-redux";
import {RootState} from "@reduxjs/toolkit/dist/query/core/apiState";
import {store} from "./redux/store";

function Layout() {
  return <>
    <Header/>
    <Outlet/>
  </>;
}
function App() {
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);


  useEffect(() => {
    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
      <Provider store={store}>
    <div className="App">
      <Router>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<MainTable/>}/>
          <Route path="my-base" element={<Base/>}/>
        </Route>
      </Routes>
      </Router>
    </div>
      </Provider>
  );
}

export default App;
