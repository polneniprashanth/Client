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

// '/Accountopening/{userid}' 
// const Id = http://172.20.0.129:8090/accountDetails/saveAccdetails'
function Accountopening() {
  const {userid} = useParams();
  const [title,setTitle] = useState('');
  const [firstName,setfirstname] = useState('');
  const [lastName,setlastname] = useState('');
  const [fathersName,setfathersName] = useState('');
  const [dob,setbirthday] = useState('');
  //const [gender,setgender] = useState('');
  const [addrRes,setaddresstemp] = useState('');
  const [addrPer,setaddressper] = useState('');
  const [occType,setoccType] = useState('');
  const [adharCard,setadharCard] = useState(0);
  const [mobile,setmobilenumber] = useState('');
  const [email,setemail] = useState('');
  const [srcInc, setsrcInc] = useState('');
  const [middleName, setmiddleName] = useState('');

  
  const userID = userid;
  // const navigate = useNavigate();

  const navigate = useNavigate();
  if(!sessionStorage.getItem("ID")){
    navigate('/login');
  }


  const [grossAnualIncome, setgrossAnualIncome] = useState(0);
  const [custerror, setcusterror] = useState('');

  const handleTitlechange = (e) => {
    setTitle(e.target.value);
  }

 


  const handlesubmit = async(e) =>{
    e.preventDefault();

    if(mobile.length != 10){
     setcusterror("Mobile number should be 10 digits");
      return;
    }
    if(adharCard.length != 12){
      setcusterror("Aadhar card number should be 12 digits");
      return;
    }   
    
   


    try{
        // const response = await fetch('http://172.20.0.55:9001/user/auth',{
        //     method: 'POST', 
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({  email , passwordHash }),
        // } )

        const response = await axios.post(`http://172.20.0.55:9001/account/create/${userID}`, 
        {title, 
          firstName,
          middleName,
          lastName,
          fathersName,
          dob,
          mobile,
          addrRes,
          addrPer,
          occType,
          srcInc,
          grossAnualIncome,
          adharCard
          });
        console.log(response);
        // const token = response.data.token;
        // localStorage.setItem("token",token);

        // if(response.status === 200){
        //     //var resp=await response.json()

          if(response.status ===200){
            //var userid = response.data.uid;
            navigate(`/usersummary/${userID}`);

          }else{

                      

          }
        // }
        // else{
        //     console.error('Login Failed');
        // }

        console.log(response.data.success);
    }
    catch(error){

    }


};

  return (
    <>
    <Navbar/>
    <MDBContainer fluid className='bg-dark d-flex justify-content-center align-items-center'>

      <MDBRow className='d-flex justify-content-center align-items-center h-100 w-50'>
        

          <MDBCard className='my-4 d-flex'>

              

                <MDBCardBody className='text-black d-flex flex-column justify-content-center'>
                  <h3 className="mb-5 text-uppercase fw-bold">Account Opening form</h3>

                  <MDBRow>

                  <MDBCol md='6'>
                        <select value={title} onChange={handleTitlechange}>
                          <option value="">Select title</option>
                          <option value="Mr">Mr</option>
                          <option value="Miss">Miss</option>
                          <option value="Mrs">Mrs</option>
                        </select>
                  </MDBCol>

                    <MDBCol md='6'>
                      <MDBInput wrapperClass='mb-4' label='First Name' size='lg' id='form1' type='text'value = {firstName} onChange = {(e)=> setfirstname(e.target.value)} required/>
                    </MDBCol>


                    <MDBCol md='6'>
                      <MDBInput wrapperClass='mb-4' label='Middle Name' size='lg' id='form1' type='text'value = {middleName} onChange = {(e)=> setmiddleName(e.target.value)}/>
                    </MDBCol>

                    <MDBCol md='6'>
                      <MDBInput wrapperClass='mb-4' label='Last Name' size='lg' id='form2' type='text' value = {lastName} onChange = {(e)=> setlastname(e.target.value)}/>
                    </MDBCol>

                  </MDBRow>

                  
                  <MDBInput wrapperClass='mb-4' label='Father Name' size='lg' id='form4' type='text' value = {fathersName} onChange = {(e)=> setfathersName(e.target.value)}/>
                  
                  <MDBInput wrapperClass='mb-4' label='Birthday' size='lg' id='form3' type='date' value = {dob} onChange = {(e)=> setbirthday(e.target.value)} required />
                  

                  <MDBInput wrapperClass='mb-4' label=' Temporaray Address' size='lg' id='form4' type='text' value = {addrRes} onChange = {(e)=> setaddresstemp(e.target.value)} required/>
                  
                  <MDBInput wrapperClass='mb-4' label='Permanent Address' size='lg' id='form4' type='text' value = {addrPer} onChange = {(e)=> setaddressper(e.target.value)} required/>

                  <MDBRow>

                  <MDBCol md='6'>
                      <MDBInput wrapperClass='mb-4' label='Occupation Type' size='lg' id='form1' type='text' value = {occType} onChange = {(e)=> setoccType(e.target.value)} required/>
                    </MDBCol>

                    <MDBCol md='6'>
                      <MDBInput wrapperClass='mb-4' label='Source Income' size='lg' id='form2' type='text' value = {srcInc} onChange = {(e)=> setsrcInc(e.target.value)} required/>
                    </MDBCol>

                  </MDBRow>

                  <MDBInput wrapperClass='mb-4' label='Gross Income' size='lg' id='form4' type='text' value = {grossAnualIncome} onChange = {(e)=> setgrossAnualIncome(e.target.value)} required/>
                  <MDBInput wrapperClass='mb-4' label='Aaadhar Number' size='12' max='12' id='form5' type='text' value = {adharCard} onChange = {(e)=> setadharCard(e.target.value)} required />
                  <MDBInput wrapperClass='mb-4' label='Mobile Number' size='10' max='10' id='form5' type='text' value = {mobile} onChange = {(e)=> setmobilenumber(e.target.value)} required/>
                  {/* <MDBInput wrapperClass='mb-4' label='Email ID' size='lg' id='form6' type='text' value = {email} onChange = {(e)=> setemail(e.target.value)}/> */}



                  <div className="d-flex justify-content-center pt-3">
                    <MDBBtn onClick = {handlesubmit} className='ms-2' color='warning' size='lg'>Submit form</MDBBtn>
                    
                  </div>

                  <h6 style = {{color : 'red'}}>  {custerror}</h6>

                </MDBCardBody>
             
      
          </MDBCard>

        
      </MDBRow>

    </MDBContainer>
    </>
  );
}

export default Accountopening;
