import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Получаем переменные из окружения или HTML
const getEnvVariable = (name) => {
  // Попробуем получить из meta-тега
  const meta = document.querySelector(`meta[name="${name}"]`);
  return meta ? meta.getAttribute('content') : process.env[name];
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App 
      version={getEnvVariable('ARM_VERSION') || '01.01'} 
      date={getEnvVariable('ARM_DATE') || '01.06.2018'} 
    />
  </React.StrictMode>
);