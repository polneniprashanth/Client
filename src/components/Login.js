import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
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
import axios from 'axios';

const Login = ()=>{
    const [email,setEmail] = useState('');
    const [passwordHash, setPassword] = useState('');
    const [attempts, setAttempts] = useState(3);
    const [loginMessage, setLoginMessage] = useState('');
    const navigate = useNavigate();
    const emailRegex = "";
    const passwordRegex = "";

    const handleLogin = async(e) =>{
        e.preventDefault();
        try{
            // const response = await fetch('http://172.20.0.55:9001/user/auth',{
            //     method: 'POST', 
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify({  email , passwordHash }),
            // } )

            const response = await axios.post('http://172.20.0.55:9001/user/auth', {email, passwordHash});
            console.log(response);
            // const token = response.data.token;
            // localStorage.setItem("token",token);

            // if(response.status === 200){
            //     //var resp=await response.json()


            

              if(response.data.success){
                var userid = response.data.uid;
                sessionStorage.setItem("ID", userid);
                console.log(userid);
                navigate(`/usersummary/${userid}`);

              }else{

                setAttempts(attempts-1);
                if(attempts === 1){
                    setLoginMessage(<span style ={{color: 'red'}}> {"No more attempts left"}</span>)
                }
                
                if(response.data.errcode===1){
                    //email not registered
                    setLoginMessage(<span style = {{color: 'red'}}> {`Email not registered. ${attempts - 1} attempts left`}</span>);
                    
                   
                }else{
                    setLoginMessage(<span style = {{color: 'red'}}>{`Email registered, but incorrect password entered. ${attempts- 1} attempts left`}</span>);
                  
                }
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


    return(
<>
        
        <h4>{loginMessage}</h4>
        <MDBContainer fluid>

        <MDBCard className='text-black m-5' style={{borderRadius: '25px'}}>
            <MDBCardBody>
            <MDBRow>
                <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Log In</p>

                <div className="d-flex flex-row align-items-center mb-4">
                    <MDBIcon fas icon="envelope me-3" size='lg'/>
                    <MDBInput label='Your Email' id='form2' type='email' value = {email} onChange = {(e)=> setEmail(e.target.value)}/>
                </div>

                <div className="d-flex flex-row align-items-center mb-4">
                    <MDBIcon fas icon="lock me-3" size='lg'/>
                    <MDBInput label='Password' id='form3' type='password' value = {passwordHash} onChange = {(e)=> setPassword(e.target.value)}/>
                </div>

                <MDBBtn onClick = {handleLogin} className='mb-4' size='lg' disabled = {attempts === 0}>{attempts >0 ?'Login': "No Attempt Left."}</MDBBtn>
                <h6>Not registered?<Link to = '/register'>Register</Link></h6>

                <h5>Forgot Password?<Link to = '/Forgotpassword'>Click here </Link></h5>

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

export default Login;