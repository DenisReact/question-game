import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import { setupStore } from './Redux';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <Router basename="/question-game" >
        <Provider store={setupStore()}>
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </Provider>
    </Router>
);
