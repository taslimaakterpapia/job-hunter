import React, { useEffect, useState } from 'react';
import Category from '../Category/Category';

const JobCategories = () => {
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        fetch("job.json")
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])
    return (
        <div className='py-24'>
            <div className='text-center'>
                <h1 className='text-6xl font-bold bg-gradient-to-r from-orange-800 via-orange-500 to-orange-400 inline-block text-transparent bg-clip-text pb-3
                '>Job Category List</h1>
                <p className='text-2xl font-medium text-slate-600 pb-10'>Explore thousand of job opportunities with all information you need, it's your future</p>
            </div>
            <div className='category-container flex gap-20'>
                {jobs.map(job => <Category
                    job={job}
                ></Category>)}
            </div>
        </div>
    );
};

export default JobCategories;