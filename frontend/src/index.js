import React from 'react';
import './index.css';
import ReactDOM from 'react-dom/client';
import App from './App';
import server_config from "../config/server_config.json"


const root = ReactDOM.createRoot(document.getElementById('root'));

//server_config.api.get_date = process.env.GetDateEndpoint
root.render(
  <React.StrictMode>
    <App server_config ={server_config} var="default"/>
  </React.StrictMode>
);
