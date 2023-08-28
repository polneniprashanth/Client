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
import Result from './components/Result';
import FundTransfer from './components/FundTransfer';
import Accountdetails from './components/Accountdetails';
import Logout from './components/Logout';

import Withdraw from './components/Withdraw';
import Deposit from './components/Deposit';
import WResult from './components/WResult';
import Adminaccess from './components/Adminaccess';
import Netbankingcreate from './components/Netbankingcreate';
import Netbankingchange from './components/Netbankingchange';



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

        <Route exact path = "/Accountdetails/:data" element = {<Accountdetails/>}/>

        <Route exact path = "/Result/:msg" element = {<Result/>}/>


        <Route exact path = "/WResult/:msg" element = {<WResult/>}/>

        
        <Route exact path = "/Withdraw/:aid" element = {<Withdraw/>}/>


        
        <Route exact path = "/Deposit/:aid" element = {<Deposit/>}/>

        <Route exact path = "/Logout" element = {<Logout/>}/>
        <Route exact path = "/Adminaccess" element = {<Adminaccess/>}/>

        <Route exact path = "/Netbankingcreate" element = {<Netbankingcreate/>}/>

        <Route exact path = "/Netbankingchange" element = {<Netbankingchange/>}/>
        
        <Route exact path = "*" element = {<Errorpage/>}/>


    

    </Routes>   

      </div>


    </>
    
  );
};

export default App;