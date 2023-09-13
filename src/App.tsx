import React, {useEffect, useState} from 'react';
import './App.css';
import Base from "./components/Base";
import Header from "./components/Header";
import {BrowserRouter as Router, Route, Routes, Outlet} from 'react-router-dom';
import MainTable from "./components/MainTable";
import {Provider} from "react-redux";
import {store} from "./redux/store";
import Replace from "./components/Replace";
import ShowOrder from "./components/ShowOrder";
import LoginForm from "./components/Аuthentication";


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
          <Route index element={<LoginForm/>}/>
          <Route path="my-table" element={<MainTable/>}/>
          <Route path="my-base" element={<Base/>}/>
          <Route path="my-replace" element={<Replace/>}/>
          <Route path="my-orders" element={<ShowOrder/>}/>
          <Route path="my-auth" element={<LoginForm/>}/>
        </Route>
      </Routes>
      </Router>
    </div>
      </Provider>
  );
}

export default App;
