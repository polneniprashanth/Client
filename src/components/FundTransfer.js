import React,{useState, useEffect} from 'react';
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

function FundTransfer() {
    const navigate = useNavigate();
    const [senderAID, setSenderAID] = useState('');
    const [receiverAID, setreceiverAID] = useState('');
    const [ammount, setammount] = useState();
    const [remarks, setremarks] = useState('');
    const [mode, setmode] = useState('');
    const [userid,setuserid] = useState('');
    const [Accountdetails,setAccountdetails] = useState([]);
    const [password, setpassword] = useState();

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
    


    useEffect(() =>{
      // axios.get(`http://172.20.0.55:9001/account/summary/${userid}`)
      fetch(`http://172.20.0.55:9001/account/summary/${userid}`)

      .then((response) => response.json())

      .then((data)=>{
          setAccountdetails(data);
          console.log(data);
      })
      .catch((error) => console.error(error));
    }, [userid]);
    
  const handlemodechange = (e) => {
    setmode(e.target.value);
  }

  const handlemode1change = (e) => {
    setSenderAID(e.target.value);
  }


  const handlesubmit = async(e) =>{
    e.preventDefault();
    const username = "rew";
    // const password = "te";
    


    try{
        const response = await fetch('http://172.20.0.55:9001/transactions/transfer',{
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({  senderAID,receiverAID,ammount, remarks,mode,username,password
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
        const msg = data.message;
        console.log(msg);
        navigate(`/Result/${msg}`);

        if(data.errcode === 0){
          return 'Transfer was successful'
        }
        else{
          throw new Error('Transfer was failed');
        }
        
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
                      <h3 className="mb-5 text-uppercase fw-bold">Fund Transfer form</h3>
                      
                      {/* <MDBInput wrapperClass='mb-4' label='Sender Account Number'value = {senderAID} onChange = {(e)=> setSenderAID(e.target.value)} size='lg' id='form4' type='number' /> */}
                      <MDBCol style={{display:"flex"}}> Sender Account Number
                        <select style={{marginBottom:"20px", marginLeft:"35px"}} value={senderAID} onChange={handlemode1change}>
                          <option value="">Select Account</option>
                          {Accountdetails.map((account) =>(
                            <option value={account.accountID}>{account.accountID}</option>
                          ))}
                        </select>
                    </MDBCol>
                      <MDBInput wrapperClass='mb-4' label='Reciever Account Number' value = {receiverAID} onChange = {(e)=> setreceiverAID(e.target.value)} size='lg' id='form4' type='number' />
                      
                      <MDBInput wrapperClass='mb-4' label='Net Banking password' value = {password} onChange = {(e)=> setpassword(e.target.value)} size='lg' id='form4' type='number' />

                      <MDBInput wrapperClass='mb-4' label='Amount' value = {ammount} onChange = {(e)=>setammount(e.target.value)} size='lg' id='form4' type='number' />
                      
                      {/* <MDBInput wrapperClass='mb-4' label='Natbanking Password' value = {password} onChange = {(e)=>setpassword(e.target.value)} size='lg' id='form4' type='number' /> */}

                      {/* <MDBInput wrapperClass='mb-4' label='Type of Transfer' size='lg' id='form4' type='text'/> */}


                      <MDBInput wrapperClass='mb-4' label='Remarks' value = {remarks} onChange = {(e)=>setremarks(e.target.value)} size='lg' id='form4' type='text' />
                      <MDBCol md='6'>
                        <select value={mode} onChange={handlemodechange}>
                          <option value="">Select mode</option>
                          <option value="IMPS">IMPS</option>
                          <option value="RTGS">RTGS</option>
                          <option value="NEFT">NEFT</option>
                        </select>
                  </MDBCol>
    
    
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
export default FundTransfer;