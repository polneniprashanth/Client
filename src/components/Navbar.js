import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';

const Navbar = ()=>{
    return(
        <nav className = "navbar">

            <div  className = 'bank-info'>

            <div className = "navbar-logo">
                <Link to ='/'> <h4>QuatSyn Banking and Financial Services</h4> </Link>
            </div>
            
            </div>
            
            <ul className = 'navbar-links'>
                <li><Link to = '/FundTransfer'>Fund Transfer </Link></li>
                {/* <li><Link to = '/AccountSummary'>User Register </Link></li> */}
                <li><Link to = '/Logout'>Logout</Link></li>
                
            </ul>
        </nav>
    )
};

export default Navbar;