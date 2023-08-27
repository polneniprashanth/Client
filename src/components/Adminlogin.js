import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom';
import AdminDashboard from './AdminDashboard'
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
  import axios from 'axios';

const Adminlogin = ()=>{
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [attempts, setAttempts] = useState(3);
    const [loginMessage, setLoginMessage] = useState('');

    const navigate = useNavigate();
   

    

    const handleLogin = async() =>{
       
       
           try{
            if(email=== 'admin@s3pcb.com' && password === 'admin'){
              setLoginMessage('Welcome administrator');
              navigate('/AdminDashboard');
            } 
            else{
                console.log('Invalid credentials');
                setAttempts(attempts-1);
                console.log(attempts);
                if(attempts === 1 ){
                    setLoginMessage('No more attempts left.');
                }
                else{
                    setLoginMessage(`Incorrect credentials. ${attempts-1} attempts left.`);
                }

            }
        

            
        }
        catch(error){
            setLoginMessage('Login Error');
            console.log('Login Error');
        }


    };


    return(
<>
        {/* <div> <Navbar/></div> */}


   <h3 stlye = {{color: 'red'}}> {loginMessage}</h3>
   <MDBContainer fluid>

<MDBCard className='text-black m-5' style={{borderRadius: '25px'}}>
    <MDBCardBody>
    <MDBRow>
        <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

       
        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Administrator Login </p>

        

        <div className="d-flex flex-row align-items-center mb-4">
            <MDBIcon fas icon="envelope me-3" size='lg'/>
            <MDBInput label='Your Email' id='form2' type='email' value = {email} onChange = {(e)=> setEmail(e.target.value)}/>
        </div>

        <div className="d-flex flex-row align-items-center mb-4">
            <MDBIcon fas icon="lock me-3" size='lg'/>
            <MDBInput label='Password' id='form3' type='password' value = {password} onChange = {(e)=> setPassword(e.target.value)}/>
        </div>

        <MDBBtn onClick = {handleLogin} className='mb-4' size='lg' disabled = {attempts ===0}>{attempts >0 ?'Login': 'No Attempt Left'}</MDBBtn>
        

        </MDBCol>

        <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
        <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid/>
        </MDBCol>

    </MDBRow>
    </MDBCardBody>
</MDBCard>

</MDBContainer>

   


</>
);
};

export default Adminlogin;
