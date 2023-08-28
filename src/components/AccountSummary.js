import React, {useState, useEffect}from 'react';
import Navbar from './Navbar';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { MDBTable, MDBTableHead, MDBTableBody, MDBBtn } from 'mdb-react-ui-kit';

const AccountSummary = ()=>{
    //e.preventDefault();
    const [Accountdetails, setAccountdetails] = useState([]);
    const [accountID,setaccountID] =useState('');
  const {userid} = useParams();
//   const navigate = useNavigate();
    const navigate = useNavigate();
    if(!sessionStorage.getItem("ID")){
        navigate('/login');
    }
    // console.log(userid);
    // axios.get(`http://172.20.0.55:9001/account/summary/${userid}`)
    // .then(response => {
    //     const accountdetails = response.data;
    //     console.log(accountdetails);
    //     setAccountdetails(accountdetails);
    // })
    // .catch(error => {
    //     console.error(error);
    // })

    const handleaccount = (data1,data2) => {
        const data = {data1,data2};
        console.log(data);
        navigate(`/Accountdetails/${data1}`, {
            state: {data}
        });
    }


    useEffect(() =>{
        // axios.get(`http://172.20.0.55:9001/account/summary/${userid}`)
        fetch(`http://172.20.0.55:9001/account/summary/${userid}`)

        .then((response) => response.json())

        .then((data)=>{
            setAccountdetails(data);
            console.log(data);
        })
        .catch((error) => console.error(error));
      }, []);


    return (
        <>
        <div> <Navbar/></div>
        
        <div style={{marginTop:"5px"}}>
            <span style={{marginRight:"20px"}}><MDBBtn onClick={()=> navigate('/Netbankingcreate')}>Establish Netbanking </MDBBtn></span>
            <span><MDBBtn onClick = {()=> navigate('/Netbankingchange')}>Update Netbanking credentials</MDBBtn></span>
        </div> 


        

        <div>
            <h2>Account Summary for User {userid}</h2>

            
            {Accountdetails ? (
                // <pre>{JSON.stringify(Accountdetails,null,2)}</pre>

                <div>
                    {/* <p>Account ID: {Accountdetails.accountID}</p>
                    <p>Balance: {Accountdetails.balance}</p>
                    <p>State: {Accountdetails.state}</p> */}
                    <MDBTable striped>
                        <MDBTableHead>
                        <tr>
                        <th scope='col'>AccountID</th>
                        <th scope='col'>Balance</th>
                        <th scope='col'>State</th>
                        </tr>
                        </MDBTableHead>
                    {Accountdetails.map((account)=>(
                        
                       <MDBTableBody>
                       <tr>
                         <th scope='row'>{account.accountID}</th>
                         
                        {/* {setaccountID(account.accountID)} */}
                         <td>{account.balance}</td>
                         <td>{account.state}</td>
                         <td><MDBBtn onClick={() => handleaccount(account.accountID,account.balance)
                        }  className='mb-4' size='lg'>View </MDBBtn></td>
                       </tr>
                       </MDBTableBody>
                    ))}
                    </MDBTable>
                </div>

            ):(<p>Loading Account Details...</p>)}
        </div>

        </>
    )
}

export default AccountSummary;