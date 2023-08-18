import React from 'react';
import {Link} from 'react-router-dom';

const Errorpage=()=>{
    return(
        <div className = 'not-found'>
            <h1>404- Page Not Found</h1>
            <p>The page you're looking for doesnt exist.
                <Link to = '/'> Go back to Home</Link>
            </p>

        </div>
    )
}

export default Errorpage;