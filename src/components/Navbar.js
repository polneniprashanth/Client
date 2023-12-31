import React, {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import { useNavigate, useParams } from 'react-router-dom';
import './Navbar.css';

const Navbar = ()=>{
    const [userid,setuserid] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
      if(!sessionStorage.getItem("ID")){
        navigate('/login');
      }
      else{
        const useridFromSession = sessionStorage.getItem("ID");
        setuserid(useridFromSession);
        console.log(useridFromSession)
      }
    },[])

    return(
        <nav className = "navbar">

            <div  className = 'bank-info'>

            <div className = "navbar-logo">
                <Link to ='/'> <h4>QuatSyn Banking and Financial Services</h4> </Link>
            </div>
            
            </div>
            
            <ul className = 'navbar-links'>
                <li style={{marginRight:"5px"}}><Link to = {`/AccountOpening/${userid}`}>Open a new Account</Link></li>
                
                <li style={{marginRight:"5px"}}><Link to = '/FundTransfer'>Fund Transfer </Link></li>
                {/* <li><Link to = '/AccountSummary'>User Register </Link></li> */}
                <li style={{marginRight:"5px"}}><Link to = '/Logout'>Logout</Link></li>
                
            </ul>
        </nav>
    )
};

export default Navbar;