import React, { useEffect, useState } from 'react';
import Feature from '../Feature/Feature';

const FeatureJobs = () => {
    const [posts, setPosts] = useState([])
    const [seeAll, setSeeAll] = useState(false)
    useEffect(() => {
        fetch("feature.json")
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setPosts(data)
            })
    }, [])
    return (
        <div className='pt-24 '>

            <div className='text-center'>
                <h1 className='text-4xl font-bold bg-gradient-to-r from-orange-800 via-orange-500 to-orange-400 inline-block text-transparent bg-clip-text pb-3
                '>Feature Jobs</h1>
                <p className='text-xl font-medium text-slate-600 pb-10'>Explore thousand of job opportunities with all information you need, it's your future</p>
            </div>




            <div className='grid grid-cols-2  '>
                {posts.slice(0, seeAll ? 6 : 4).map(alljob => <Feature
                    key={alljob.id}
                    alljob={alljob}
                ></Feature>)}
            </div>




            <div className='text-center mt-5 pb-20'>
                {
                    !seeAll &&
                    <button className="bg-orange-700 text-orange-300 border border-orange-400 border-b-4 font-medium overflow-hidden relative px-6 py-4 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group" onClick={setSeeAll}>
                        <span class="bg-orange-500 shadow-orange-400 absolute -top-[150%] left-0 inline-flex w-80 h-[6px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)] "></span>See All Jobs</button>
                }


            </div>



        </div>
    );
};

export default FeatureJobs;