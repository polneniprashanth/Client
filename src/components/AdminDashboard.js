import React,{useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { MDBInputGroup, MDBInput, MDBIcon, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import axios from 'axios';


const AdminDashboard =()=>{

    const [userdetails1,setuserdetails1] = useState([])
    const [userdetails2,setuserdetails2] = useState([]);
    const [userdetails3,setuserdetails3] = useState([]);

    const [query,setquery] = useState('');

    useEffect(() =>{
        axios.get(  `http://172.20.0.55:9001/search/user/name/${query}`)
        .then((response) => {
          console.log(response);
           setuserdetails1(response.data);
           //console.log(user);
           
        })
        .catch((error) => console.error(error));
      }, [query]);

      useEffect(() =>{
        axios.get(  `http://172.20.0.55:9001/search/user/email/${query}`)
        .then((response) => {
          console.log(response);
           setuserdetails2(response.data);
           //console.log(user);
           
        })
        .catch((error) => console.error(error));
      }, [query]);
      
      useEffect(() =>{

        const merged = [...userdetails1, ...userdetails2];

        const uniquemerged = [];

        Object.values(merged).forEach((item)=>{
            uniquemerged[item.userID] = item;
        });

        setuserdetails3(uniquemerged);

        console.log(userdetails3);
        console.log(uniquemerged);

      }, [userdetails1, userdetails2]);



    const handleChange = (event) => {
        const newQuery = event.target.value;
        setquery(newQuery);
    }
    

    return(
        <>
        <h3>Welcome to Admin Dashboard</h3>
        <MDBInputGroup style={{justifyContent:"center", marginTop:"50px"}}>
        <MDBInput label='Search' value={query} onChange={handleChange} />
        <MDBBtn style={{padding:"10px", height:"38px", width:"80px"}} rippleColor='dark'>Search</MDBBtn>
        </MDBInputGroup>

        <MDBTable striped>
        <MDBTableHead>
        <tr>
           <th scope='col'>User ID</th>
           <th scope='col'>Name</th>
           <th scope='col'>Email</th>
           <th scope='col'>Mobile Number</th>
        </tr>
        </MDBTableHead>
     {userdetails3.map((user)=>(
         <MDBTableBody>
         <tr>
           <th scope='row'>{user.userID}</th>
           <td>{user.name}</td>
           <td>{user.email}</td>
           <td>{user.phone}</td>
         </tr>
         </MDBTableBody>
     ))}
     {/* {userdetails2.map((user)=>(
         <MDBTableBody>
         <tr>
           <th scope='row'>{user.userID}</th>
           <td>{user.name}</td>
           <td>{user.email}</td>
           <td>{user.phone}</td>
         </tr>
         </MDBTableBody>
     ))} */}
     </MDBTable>
        
        </>

    );
}

export default AdminDashboard;