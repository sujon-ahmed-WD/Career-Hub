import React, { useEffect, useState } from 'react';
import Single from '../Job/Single';

const FeJob = () => {
    const[jobs,setjobs]=useState([]);
    useEffect (()=>{
        fetch('jobs.json')
        .then(res =>res.json())
        .then(data =>setjobs(data));
    })
    return (
        <div>
        <div className='text-center max-w-6xl mx-auto '>
            <h1 className='  text-3xl'>Featured Jobs {jobs.length}</h1>
            <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque odit natus doloribus!</p>
        </div>
        <div className='grid grid-cols-2 gap-6'>
            {
                jobs.map(job=> <Single key={job.id} job={job}></Single>)
            }
        </div>
        </div>
    );
};

export default FeJob;