import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Register from './Register';
import {Link} from 'react-router-dom';
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBInput,
    MDBIcon,
    MDBCheckbox
  }
  from 'mdb-react-ui-kit';
  import Navbar from './Navbar';
  import './Navbar.css';

const Forgotuserid = () =>{

    const [Accountnumber ,setAccountnumber] = useState('');
    // There will be an input tag to enter his Account number
    // we will check if this account number exists or not, using earlier done methods errorcodes.
    // if it exists--> then we will display OTP sent to the registered mobile number.
    // if it doesn't exists--> then we will display , this account number doesnt exists.

    return (
        <>
        <input type=  "number" value = {Accountnumber} onChange = {(e)=> setUserid(e.target.value)}></input>
        </>
    )
};

export default Forgotuserid;

