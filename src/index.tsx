import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import TasksContextProvider from './context/Context';


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <TasksContextProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </TasksContextProvider>
    </React.StrictMode>
);


