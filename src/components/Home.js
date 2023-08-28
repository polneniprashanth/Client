import Homefooter from './Homefooter';
import Homenavbar from './Homenavbar';
import Navbar from './Navbar';
import { useNavigate, useParams } from 'react-router-dom';

const Home = () =>{ 
    const navigate = useNavigate();
  if(!sessionStorage.getItem("ID")){
    navigate('/login');
  }

  const bcgimgstyle = {
    backgroundImage:'url("https://g.foolcdn.com/editorial/images/547502/bank-building.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    height: '400px',
    backgroundColor: 'rgba(0,0,0,0.5)',
  };
    return (
        <>
         {/* <div> <Navbar/></div> */}

         <Homenavbar/>
        <div style ={bcgimgstyle}>
        
        </div>

    
        <Homefooter/>
    
        </>
   
    
    )
}

export default Home;