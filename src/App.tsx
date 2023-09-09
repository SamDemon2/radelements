import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Base from "./components/Base";

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
    <div className="App">
      <Base/>
    </div>
  );
}

export default App;
