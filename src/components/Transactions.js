import React,{useState} from 'react';
import { useNavigate , useParams } from 'react-router-dom';
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
    MDBCheckbox,
    MDBSelect,
    MDBRadio
  }
from 'mdb-react-ui-kit';
import Navbar from './Navbar';
import './Navbar.css';
import axios from 'axios';


// '/transactions/{userid}'
function Transactions(){
    const {userid} = useParams();

}