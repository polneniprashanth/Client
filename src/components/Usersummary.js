import React,{useState, useEffect} from 'react';
import { useNavigate,useParams, Link } from 'react-router-dom';
import Navbar from './Navbar';
import AccountSummary from './AccountSummary';


const Usersummary=()=>{
    const {userid} = useParams();
    const [userdata, Fetchuserdata]= useState([]);

    console.log(userid);
     
     return(
        <>
        <div> <Navbar/></div>
        <h6>{userid}</h6>
        <Link to = {`/AccountSummary/${userid}`}>Account Summary </Link>
        </>
       
     )
};
        
export default Usersummary;