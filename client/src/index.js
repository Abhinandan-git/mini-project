import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom/client';
import React from 'react';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

document.addEventListener('DOMContentLoaded', () => {
	document.getElementsByTagName('body')[0].classList.add('noscroll');
});

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
