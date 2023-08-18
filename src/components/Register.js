import React,{useState} from 'react';
import Login from './Login';
import {Link,useNavigate} from 'react-router-dom';
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

const Register = () =>{

    const [name, setName] = useState('');
    const [email,setEmail] = useState('');
    const [passwordHash,setPassword] = useState('');
    const [phone, setMobileNumber] = useState('');

    const [emailerror, setEmailerror] = useState('');
    const [passworderror, setPassworderror] = useState('');

    const navigate = useNavigate();

    var emailRegex = /[^\s]*@[a-z0-9.-]*/i;
    var passwordRegex = /^(?=.\d)(?=.*[A-Z]).{6,14}$/;

    // length --> [6,14]
    // it should contain atleast one digit
    // it should contain atleast one capital letter




    const handleRegister = async(e) =>{

        e.preventDefault();
        
        const isValidEmail = (email) => {
            return emailRegex.test(email);
        }

        if(isValidEmail(email)){
            setEmailerror('');
        }
        else{
            setEmailerror('Enter a valid Email address');
            return;
        }


        try{
            const response = await fetch('http://172.20.0.55:9001/user/register',{
                method: 'POST', 
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name , email , phone, passwordHash }),
            } )
            console.log(response);
            if(response.ok){
                var resp=await response.json()
              if(resp.success){
                navigate('/login');
              }else{
                if(resp.errcode===1){
                    //email already exists
                }else{
                    //internal server error try bacvk latter
                }
              }
            }
            else{
                console.error('Register Failed');
            }
        }
        catch(error){
            console.error('Error during register:', error);
        }
        
    };

    return (
        <>

        <MDBContainer fluid>

        <MDBCard className='text-black m-5' style={{borderRadius: '25px'}}>
            <MDBCardBody>
            <MDBRow>
                <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                <div className="d-flex flex-row align-items-center mb-4 ">
                    <MDBIcon fas icon="user me-3" size='lg'/>
                    <MDBInput label='Your Name' id='form1' type='text' className='w-100' value = {name} onChange = {(e)=> setName(e.target.value)}/>
                </div>

                
                <div className="d-flex flex-row align-items-center mb-4">
                    <MDBIcon fas icon="envelope me-3" size='lg'/>
                    <MDBInput label='Your Email' id='form2' type='email' value = {email} onChange = {(e)=> {setEmail(e.target.value) }} />
                    
                </div>
                {emailerror && <h6 style={{color:'red'}}>{emailerror}</h6>}

                <div className="d-flex flex-row align-items-center mb-4 ">
                    <MDBIcon fas icon="user me-3" size='lg'/>
                    <MDBInput label='Mobile Number' id='form1' type='text' className='w-100' value = {phone} onChange = {(e)=> setMobileNumber(e.target.value) }/>
                </div>

                <div className="d-flex flex-row align-items-center mb-4">
                    <MDBIcon fas icon="lock me-3" size='lg'/>
                    <MDBInput label='Password' id='form3' type='password' value = {passwordHash} onChange = {(e)=> setPassword(e.target.value)}/>
                    
                </div>

                <div className = "password-validator">
                    <h6><ul>
                        <li>The password must be between 6 to 14 characters </li>
                        <li>The password must contain a digit</li>
                        <li>The password must contain a capital letter </li>
                     </ul></h6>
                </div>

                <MDBBtn onClick = {handleRegister} className='mb-4' size='lg'>Register</MDBBtn>
                <h7>If you are already registered <Link to = '/login'>Login </Link> </h7>
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

export default Register;