import React,{useState, useEffect} from 'react';
import { useNavigate , useParams, useLocation } from 'react-router-dom';
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
    MDBTable, MDBTableHead, MDBTableBody
  }

 
from 'mdb-react-ui-kit';


import {Container, Row, Col, Card, Typography} from 'mdbreact';


import Navbar from './Navbar';
import './Navbar.css';
import axios from 'axios';


// '/transactions/{userid}'
function Accountdetails(){
  const navigate = useNavigate();
  if(!sessionStorage.getItem("ID")){
    navigate('/login');
  }

  //const {data} = useParams();
  const location = useLocation();
  const {data} = location.state || {};
  const {data1,data2} =data || {};
  const [Transactiondetails,setTransactiondetails] = useState([]);
  const [user, setUserdetails] = useState([]);
  console.log(data);

  useEffect(() =>{
    axios.get(  `http://172.20.0.55:9001/account/details/${data1}`)
    .then((response) => {
      console.log(response);
       setUserdetails(response.data);
       console.log(user);
       
    })
    .catch((error) => console.error(error));
  }, [data1]);



  useEffect(() =>{
    axios.get(`http://172.20.0.55:9001/transactions/account/${data1}`)
    .then((response) => {
      console.log(response);
       setTransactiondetails(response.data);
       console.log(Transactiondetails);
       
    })
    .catch((error) => console.error(error));
  }, [data1]);




  return(
    <>
    <div> <Navbar/></div>

    <main>
      <h2 className='justify-content-center'>Account Details</h2>
      <Container>
        <Row>
              <Card>
                <div>
                  <Typography variant = "h2">{user.firstName} {user.lastName}</Typography>
                  <p>Mobile: {user.mobile}</p>
                  <p>Father's Name: {user.fathersName}</p>
                  <p>Residential address: {user.addrRes}</p>
                  <p>Annual Income: {user.grossAnualIncome}</p>
                  <p> DOB :{user.dob}</p>
                  <p>Aadhar Card Number: {user.adharCard}</p>
                  <p>Balance: {data2}</p>
                </div>
              </Card>
        </Row>
      </Container>
    </main>

    <h2 className='justify-content-center mt:40px'>Transactions</h2>

    <MDBTable striped>
        <MDBTableHead>
        <tr>
           <th scope='col'>Transaction ID</th>
           <th scope='col'>Medium</th>
           <th scope='col'>Amount</th>
           <th scope='col'>timestamp</th>
           <th scope='col'>Remarks</th>
        </tr>
        </MDBTableHead>
     {Transactiondetails.map((Transaction)=>(
         <MDBTableBody>
         <tr>
           <th scope='row'>{Transaction.txid}</th>
           <td>{Transaction.medium}</td>
           <td>{Transaction.ammount}</td>
           <td>{Transaction.timestamp}</td>
           <td>{Transaction.remarks}</td>
         </tr>
         </MDBTableBody>
     ))}
     </MDBTable>
  
    </>
   
  )

}

export default Accountdetails;