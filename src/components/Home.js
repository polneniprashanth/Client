import Navbar from './Navbar';
import { useNavigate, useParams } from 'react-router-dom';

const Home = () =>{ 
    const navigate = useNavigate();
  if(!sessionStorage.getItem("ID")){
    navigate('/login');
  }
    return (
    <div> <Navbar/></div>
    
    )
}

export default Home;