import React from 'react';
import { Link } from 'react-router-dom';

const Errorpage = () => {
    return (
        <div>
            <h1>Oops !!!</h1>
             <Link to="/"> Go to Back Home</Link> 
        </div>
    );
};

export default Errorpage;