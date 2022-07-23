
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
import Header from "./common/header/Header";
import Home from "./components/Home/Home"
import SignIn from "./components/SignPage/SignIn";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Product from './components/Products/Product';
import SignUp from './components/SignPage/SignUp';

// const root = ReactDOM.createRoot(document.getElementById('root'));
ReactDOM.render(
  // <React.StrictMode>
  <div>
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path ="/signIn" element={<SignIn/>}/>
        <Route exact path ="/signUp" element={<SignUp/>}/>
        <Route exact path='/product' element={<Product/>}/>
      </Routes>
    </Router>
  </div>,
  // </React.StrictMode>
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
