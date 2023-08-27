import React,{useState} from 'react';
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

function Netbankingchange() {

    const [aid, setaid] = useState();
    const [old_pass, setold_pass] = useState("");
    const [new_pass, setnew_pass] = useState("");

 


  const handlesubmit = async(e) =>{
    e.preventDefault();


    try{
        const response = await fetch('http://172.20.0.55:9001/net-banking/change',{
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({  aid, old_pass, new_pass
        }),
      });


       
      console.log(response.ok);
      
      

        const data = await response.json();

        console.log(data);
        const msg = data.message;
        console.log(msg);


       
        
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
                      <h3 className="mb-5 text-uppercase fw-bold">Change Netbanking Password</h3>
                      
                      <MDBInput wrapperClass='mb-4' label=' Account Number'value = {aid} onChange = {(e)=> setaid(e.target.value)} size='lg' id='form4' type='number' />
                     


                      <MDBInput wrapperClass='mb-4' label='Enter Old password' value = {old_pass} onChange = {(e)=>setold_pass(e.target.value)} size='lg' id='form4' type='text' />
                      <MDBInput wrapperClass='mb-4' label='Enter New password' value = {new_pass} onChange = {(e)=>setnew_pass(e.target.value)} size='lg' id='form4' type='text' />                     
    
    
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
export default Netbankingchange;