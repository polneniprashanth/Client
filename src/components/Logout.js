import React,{useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

function Logout() {
    const navigate = useNavigate();
    if(!sessionStorage.getItem("ID")){
        navigate('/login');
      }
    sessionStorage.removeItem("ID");
    useEffect(()=>{
        const redirectTimeout = setTimeout(()=>{
         navigate(`/login`);
        },100);

        return ()=> clearTimeout(redirectTimeout);
    });
}
export default Logout;
