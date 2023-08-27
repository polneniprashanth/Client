import React,{useState, useEffect} from 'react';
import { useNavigate,useParams, Link } from 'react-router-dom';
import Navbar from './Navbar';
import AccountSummary from './AccountSummary';
import axios from 'axios';
import { MDBBtn,
   MDBContainer,
   MDBRow,
   MDBCol,
   MDBCard,
   MDBCardBody,MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
const colordict={"CREDIT":"#D5FFD0",
"DEBIT":"#FCAEAE",
"WITHDRAWAL":"#FFD0D0",
"DEPOSIT":"#85E6C5",
"SELF":"#C5DFF8"}
const itemsperpage = 8;

const Usersummary=()=>{
    const {userid} = useParams();
    const [userdata, Fetchuserdata]= useState([]);
    const [Transactiondetails,setTransactiondetails] = useState([]);
    const [currentpage, setcurrentpage] = useState(1);
    const navigate = useNavigate();
    if(!sessionStorage.getItem("ID")){
      navigate('/login');
    }

    console.log(userid);

    useEffect(() =>{
      axios.get(`http://172.20.0.55:9001/transactions/user/${userid}`)
      .then((response) => {
        response.data.reverse()
         setTransactiondetails(response.data);
         
         console.log(Transactiondetails);
         
      })
      .catch((error) => console.error(error));
    }, [userid]);
    const lastindex = currentpage * itemsperpage;
    const firstindex = lastindex - itemsperpage;
    const currentitems = Transactiondetails.slice(firstindex, lastindex);
    const totalpages = Math.ceil(Transactiondetails.length / itemsperpage);

    const handlepageChange = (newPage) => {
      setcurrentpage(newPage);
    }
    //Transactiondetails.reverse();
     return(
        <>
        <div> <Navbar/></div>
        <h6>{userid}</h6>
        <Link to = {`/AccountSummary/${userid}`}>Account Summary </Link>
        <MDBTable striped>
            <MDBTableHead>
            <tr>
               <th scope='col'>Transaction ID</th>
               <th scope='col'>Sender Account</th>
               <th scope='col'>Receiver Account</th>
               <th scope='col'>Medium</th>
               <th scope='col'>Amount</th>
               <th scope='col'>timestamp</th>
               <th scope='col'>Remarks</th>
               <th scope='col'>Category</th>

            </tr>
            </MDBTableHead>
         {currentitems.map((Transaction)=>(
             <MDBTableBody>
             <tr>
               <th style={{background:colordict[Transaction.category]}} scope='row'>{Transaction.txid}</th>
               <td style={{background:colordict[Transaction.category]}}>{(Transaction.sender===-1)?"NA":Transaction.sender}</td>
               <td style={{background:colordict[Transaction.category]}}>{(Transaction.receiver===-1)?"NA":Transaction.receiver}</td>
               <td style={{background:colordict[Transaction.category]}}>{Transaction.medium}</td>
               <td style={{background:colordict[Transaction.category]}}>{Transaction.ammount}</td>
               <td style={{background:colordict[Transaction.category]}}>{Transaction.timestamp}</td>
               <td style={{background:colordict[Transaction.category]}}>{Transaction.remarks}</td>
               <td style={{background:colordict[Transaction.category]}}>{Transaction.category}</td>
             </tr>
             </MDBTableBody>
         ))}
         
         </MDBTable>
         <MDBCard className='d-flex justify-content-center '>
            <MDBCardBody>
               {Array.from({length: totalpages}, (_, index) => (
                  <button  key={index} onClick={() => handlepageChange(index + 1)} style={{marginRight:"10px",borderRadius:"10%",backgroundColor: currentpage === index+1 ? "grey": "white"}}>{index + 1}</button>
               ))}
            </MDBCardBody>
         </MDBCard>

        </>
       
     )
};
        
export default Usersummary;