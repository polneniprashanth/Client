import React,{useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { MDBInputGroup, MDBInput, MDBIcon, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import axios from 'axios';
import Navbar from './Navbar';


const Adminaccess =()=>{

    const [userdetails1,setuserdetails1] = useState([])
    const [userdetails2,setuserdetails2] = useState([]);
    const [userdetails3,setuserdetails3] = useState([]);

    const [state1, setstate1] = useState(["ACTIVE"]);
    const [state2, setstate2] = useState(["PROCESSING"]);
    const [state3, setstate3] = useState(["SUSPENDED"]);

    let [states, setstates] = useState([]);
    const [minBal, setminBal] = useState(0);
    const [maxBal, setmaxBal] = useState(100000);
    const navigate = useNavigate();

    

    // const [query,setquery] = useState('');

    useEffect(() =>{
        states = state1;
        axios.post(  `http://172.20.0.55:9001/account/filter`,{
            states,minBal,maxBal
        })
        .then((response) => {
          console.log(response);
           setuserdetails1(response.data);
           //console.log(user);
           
        })
        .catch((error) => console.error(error));
      }, []);



      useEffect(() =>{
        states = state2;
        axios.post(  `http://172.20.0.55:9001/account/filter`,{
            states,minBal,maxBal
        })
        .then((response) => {
          console.log(response);
           setuserdetails2(response.data);
           //console.log(user);
           
        })
        .catch((error) => console.error(error));
      }, []);


      
      useEffect(() =>{

        states = state3;
        axios.post(  `http://172.20.0.55:9001/account/filter`,{
            states,minBal,maxBal

        })
        .then((response) => {
          console.log(response);
           setuserdetails3(response.data);
           //console.log(user);
           
        })
        .catch((error) => console.error(error));
      }, [])

      const handlesuspend = (data) =>{
        axios.get(`http://172.20.0.55:9001/account/suspend/${data}`)
        .then((response) => {
        console.log(response);
        
        })
        .catch((error) => console.error(error));
        navigate('/Adminaccess');
      }

      const handleactive = (data) =>{
        axios.get(`http://172.20.0.55:9001/account/activate/${data}`)
        .then((response) => {
        console.log(response);
       // navigate('/Adminaccess');

        })
        .catch((error) => console.error(error));
        navigate('/Adminaccess');
      }




    

    return(
        <>

        
        <div>





    
        {/* <MDBInputGroup style={{justifyContent:"center", marginTop:"50px"}}>
        <MDBInput label='Search' value={query} onChange={handleChange} />
        <MDBBtn style={{padding:"10px", height:"38px", width:"80px"}} rippleColor='dark'>Search</MDBBtn>
        </MDBInputGroup> */}


        
<h3>ACTIVE ACCOUNTS </h3>

    <MDBTable striped>
        <MDBTableHead>
        <tr>
           <th scope='col'>AccountID</th>
           <th scope='col'>Balance</th>
           <th scope='col'>State</th>
        </tr>
        </MDBTableHead>

     {userdetails1.map((user)=>(
         <MDBTableBody>
         <tr>
           <th scope='row'>{user.accountID}</th>
           <td>{user.balance}</td>
           <td>{user.state}</td>
           <td>
            <MDBBtn onClick={() => handlesuspend(user.accountID)}  className='mb-4' size='lg'>Suspend </MDBBtn>
           </td>
         </tr>
         </MDBTableBody>
     ))}

</MDBTable>





<h3> PROCESSING  ACCOUNTS </h3>


<MDBTable stripped>

<MDBTableHead>
        <tr>
           <th scope='col'>AccountID</th>
           <th scope='col'>Balance</th>
           <th scope='col'>State</th>
        </tr>
</MDBTableHead>


{userdetails2.map((user)=>(

         <MDBTableBody>
         <tr>
           <th scope='row'>{user.accountID}</th>
           <td>{user.balance}</td>
           <td>{user.state}</td>
           <td>
            <MDBBtn onClick={() => handlesuspend(user.accountID)}  className='mb-4' size='lg'>Suspend </MDBBtn>
           </td>
           <td>
            <MDBBtn onClick={() => handleactive(user.accountID)}  className='mb-4' size='lg'>Activate </MDBBtn>
           </td>
         </tr>
         </MDBTableBody>

     ))}

</MDBTable>

<h3>SUSPENDED ACCOUNTS </h3>

<MDBTable stripped>


<MDBTableHead>
        <tr>
           <th scope='col'>AccountID</th>
           <th scope='col'>Balance</th>
           <th scope='col'>State</th>
        </tr>
</MDBTableHead>


{userdetails3.map((user)=>(
         <MDBTableBody>
         <tr>
           <th scope='row'>{user.accountID}</th>
           <td>{user.balance}</td>
           <td>{user.state}</td>
           <td>
            <MDBBtn onClick={() => handleactive(user.accountID)}  className='mb-4' size='lg'>Activate </MDBBtn>
           </td>
         </tr>
         </MDBTableBody>
     ))}
   
     </MDBTable>
     

    
        </div>
        </>
    )
}

    export default Adminaccess;