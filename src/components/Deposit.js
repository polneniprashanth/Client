import React,{useState,useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {Link} from 'react-router-dom';
import Result from './Result';
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

function Deposit() {
    // const navigate = useNavigate();
    const [receiverAID, setRecieverAID] = useState();
    const [ammount, setammount] = useState();
    const [remarks, setremarks] = useState('');

    const {aid} = useParams(); 

    const navigate = useNavigate();
    if(!sessionStorage.getItem("ID")){
      navigate('/login');
    }
 

 


  const handlesubmit = async(e) =>{
    e.preventDefault();
    const username = "rew";
    const password = "te";
    


    try{
        const response = await fetch('http://172.20.0.55:9001/transactions/deposit',{
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({  receiverAID,ammount, remarks
        }),
      });

        // const response = await axios.post(`http://172.20.0.55:9001/transactions/transfer`, 
        // {senderAID,
        //   receiverAID,
        //   ammount,
        //   remarks,
        //   mode

       
      console.log(response.ok);
      
        // if(!response.ok){
        //   throw new Error('Network response was not OK')
        // }

        const data = await response.json();

        console.log(data);

       
        
      }

        catch(e){
          console.error(e.message);
          return 'An error occured';
        }
      
          


       
        // const token = response.data.token;
        // localStorage.setItem("token",token);

        // if(response.status === 200){
        //     //var resp=await response.json()

    //       if(response.status === 200){
    //         //var userid = response.data.uid;

    //         console.log(response);

    //         //IMPLEMENT THE ERROR CODES HERE

            

    //       }else{

                      

    //       }
    //     // }
    //     // else{
    //     //     console.error('Login Failed');
    //     // }

    //     console.log(response.data.success);
    // }
    // catch(error){

    // }


};

    return (
        <>
        <Navbar/>
        <MDBContainer fluid className='bg-dark d-flex justify-content-center align-items-center'>
    
          <MDBRow className='d-flex justify-content-center align-items-center h-100 w-50'>
            
    
              <MDBCard className='my-4 d-flex'>
    
                  
    
                    <MDBCardBody className='text-black d-flex flex-column justify-content-center'>
                      <h3 className="mb-5 text-uppercase fw-bold">Deposit form</h3>
                      
                      <MDBInput wrapperClass='mb-4' label='Account Number' value = {aid}  size='lg' id='form4' type='number' />
                      
                     
                      
    
                      <MDBInput wrapperClass='mb-4' label='Amount' value = {ammount} onChange = {(e)=>setammount(e.target.value)} size='lg' id='form4' type='number' />
                      
                      {/* <MDBInput wrapperClass='mb-4' label='Type of Transfer' size='lg' id='form4' type='text'/> */}


                      <MDBInput wrapperClass='mb-4' label='Remarks' value = {remarks} onChange = {(e)=>setremarks(e.target.value)} size='lg' id='form4' type='text' />
                     
    
    
                      <div className="d-flex justify-content-center pt-3">
                        <MDBBtn className='ms-2' color='warning'onClick = {handlesubmit} size='lg'>Submit form</MDBBtn>
                      </div>
    
                    </MDBCardBody>
                 
          
              </MDBCard>
    
            
          </MDBRow>
    
        </MDBContainer>
        </>
    );
}
export default Deposit;