import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import Landingpage from './components/navbar.jsx';
import MainPage from './components/MainPage.jsx';
// import MainPage2 from './components/Mainpage2.jsx';
// import Packages from './components/Packages.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Landingpage /> */}
    {/* <MainPage2 /> */}
    {/* <Packages /> */}
    <MainPage />
    {/* <App /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
