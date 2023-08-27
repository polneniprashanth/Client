import React,{useEffect} from 'react';
import {useNavigate,useParams} from 'react-router-dom';

const Result = ()=>{
    const {msg} = useParams();
    // const navigate = useNavigate();
    const navigate = useNavigate();
    if(!sessionStorage.getItem("ID")){
      navigate('/login');
    }
    console.log(msg);
    useEffect(()=>{
        const redirectTimeout = setTimeout(()=>{
         navigate(`/`);
        },5000);

        return ()=> clearTimeout(redirectTimeout);
    });
    console.log(msg);

    return(
        <>
            <div>
                <h1>{msg}</h1>
                <h1>Redirecting..</h1>
            </div>
        
        
        </>
    )
}

export default Result;