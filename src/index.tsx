// Ваш index.js или index.tsx

import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom'; // Импортируем BrowserRouter

const domNode = document.getElementById('root');

if (domNode) {
    const root = createRoot(domNode);

    root.render(
        <React.StrictMode>
            <Router> {/* Оборачиваем App в Router */}
                <App />
            </Router>
        </React.StrictMode>
    );

    reportWebVitals();
}
