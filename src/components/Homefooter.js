import React from 'react';

function Homefooter (){
    return(
        <footer style = {footerstyle}>
            <div className = "container">
                <div className = "row">
                    <div className = "col-md-6">
                        <p>&copy; 2023 QuatSyn Banking and Financial Services</p>

                    </div>

                    <div className = "col-md-6">
                        <p className = "text-md-end">Contact US: support@quantysynbank.com</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

const footerstyle = {
    backgroundColor: '#333',
    color: '#fff',
    padding: '50px 0',
}

export default Homefooter;