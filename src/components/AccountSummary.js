import React from 'react';
import Navbar from './Navbar';
import { useNavigate, useParams } from 'react-router-dom';
const AccountSummary = ()=>{
  const {userid} = useParams();
    console.log(userid);
    return (
        <>
        <div> <Navbar/></div>

        <div>
            <h2>Account Summary for User {userid}</h2>
                <p>Account balance: $999999</p>
        </div>

        </>
    )
}

export default AccountSummary;