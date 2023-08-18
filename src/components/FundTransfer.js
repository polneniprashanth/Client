import React,{useState} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
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
  }
from 'mdb-react-ui-kit';
import Navbar from './Navbar';
import './Navbar.css';
import axios from 'axios';

function FundTransfer() {


    return (
        <>
        <Navbar/>
        <MDBContainer fluid className='bg-dark d-flex justify-content-center align-items-center'>
    
          <MDBRow className='d-flex justify-content-center align-items-center h-100 w-50'>
            
    
              <MDBCard className='my-4 d-flex'>
    
                  
    
                    <MDBCardBody className='text-black d-flex flex-column justify-content-center'>
                      <h3 className="mb-5 text-uppercase fw-bold">Fund Transfer form</h3>
                      
                      <MDBInput wrapperClass='mb-4' label='Sender Account Number' size='lg' id='form4' type='text' />
                      
                      <MDBInput wrapperClass='mb-4' label='Reciever Account Number' size='lg' id='form3' type='text' />
                      
    
                      <MDBInput wrapperClass='mb-4' label='Amount' size='lg' id='form4' type='number' />
                      
                      <MDBInput wrapperClass='mb-4' label='Type of Transfer' size='lg' id='form4' type='text'/>
    
    
                      <div className="d-flex justify-content-center pt-3">
                        <MDBBtn className='ms-2' color='warning' size='lg'>Submit form</MDBBtn>
                      </div>
    
                    </MDBCardBody>
                 
          
              </MDBCard>
    
            
          </MDBRow>
    
        </MDBContainer>
        </>
    );
}
export default FundTransfer;