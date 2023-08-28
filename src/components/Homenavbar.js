import React, {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import { useNavigate, useParams } from 'react-router-dom';
import './Navbar.css';

const Homenavbar = ()=>{
    const [userid,setuserid] = useState('');
    const navigate = useNavigate();

   

    return(
        <nav className = "navbar">

            <div  className = 'bank-info'>

            <div className = "navbar-logo">
                <Link to ='/'> <h4>QuatSyn Banking and Financial Services</h4> </Link>
            </div>
            
            </div>
            
            <ul className = 'navbar-links'>
                <li style={{marginRight:"5px"}}><Link to = {`/Login`}>User Login</Link></li>
                
                <li style={{marginRight:"5px"}}><Link to = '/Adminlogin'>Admin Login </Link></li>
                {/* <li><Link to = '/AccountSummary'>User Register </Link></li> */}
                <li style={{marginRight:"5px"}}><Link to = '/Register'>User Registration</Link></li>
                
            </ul>
        </nav>
    )
};

export default Homenavbar;