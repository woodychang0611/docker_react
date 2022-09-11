import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

var some_environment_variable = "Some Variable";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App env_var={some_environment_variable}/>
  </React.StrictMode>
);
