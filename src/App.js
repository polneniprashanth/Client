import React from 'react';
import {Routes,Route} from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import AccountSummary from './components/AccountSummary';
import Usersummary from './components/Usersummary';
import Home from './components/Home';
import './App.css';
import Adminlogin from './components/Adminlogin';
import AdminDashboard from './components/AdminDashboard';
import Accountopening from './components/Accountopening';
import Errorpage from './components/Errorpage';
import FundTransfer from './components/FundTransfer';



const App = ()=>{

  return(
    <>

    <div className = "App">

      
    <Routes>


        <Route exact path = "/" element = {<Home/>}/>

        <Route exact path = "/login" element = {<Login/>}/>

        <Route exact path = "/register" element = {<Register/>}/>

        <Route exact path = "/accountsummary/:userid" element = {<AccountSummary/>}/>

        <Route exact path = "/usersummary/:userid" element = {<Usersummary/>}/>
        
        <Route exact path = "/Adminlogin" element = {<Adminlogin/>}/>

        <Route exact path = "/AdminDashboard" element = {<AdminDashboard/>}/>

        <Route exact path = "/Accountopening/:userid" element = {<Accountopening/>}/>

        <Route exact path = "/FundTransfer" element = {<FundTransfer/>}/>

        <Route exact path = "*" element = {<Errorpage/>}/>


    

    </Routes>   

      </div>


    </>
    
  );
};

export default App;