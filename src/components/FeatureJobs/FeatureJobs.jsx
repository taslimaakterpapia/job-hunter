import React, { useEffect, useState } from 'react';
import './FeatureJobs.css';
import Feature from '../Feature/Feature';

const FeatureJobs = () => {
    const [posts, setPosts] = useState([])
    const [seeAll, setSeeAll] = useState(false)
    useEffect(()=>{
        fetch("feature.json")
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setPosts(data)
        })
    },[])
    return (
        <div className='feature-jobs'>
            <h1>Feature Jobs</h1>
            <p>Explore thousand of job opportunities with all information you need, it's your future</p>
            <div className='feature-container'>
                {posts.slice(0, seeAll ? 6 : 4).map(alljob=> <Feature
                key={alljob.id}
                alljob={alljob}
                ></Feature>)}
            </div>
            <div className='text-center mt-4 btn-center'>
                    {
                        !seeAll &&
                        <button className='button' onClick={setSeeAll}>See All Jobs</button>
                    }
            </div>
        </div>
    );
};

export default FeatureJobs;