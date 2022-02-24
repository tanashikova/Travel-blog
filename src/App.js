import React, { Component }  from 'react';
import ReactDOM from 'react-dom';
import TopBar from "./components/topbar/TopBar";
import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from './pages/home/login/Login';
import Register from './pages/home/register/Register';

function App() {
  return (
    <>
   <TopBar/>
    <Register/>

   </>
  );
}

export default App;
