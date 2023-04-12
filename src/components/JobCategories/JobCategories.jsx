import React, { useEffect, useState } from 'react';
import './JobCategories.css'
import Category from '../Category/Category';

const JobCategories = () => {
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        fetch("job.json")
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])
    return (
        <div>
            <div className='title'>
                <h1>Job Category List</h1>
                <p>Explore thousand of job opportunities with all information you need, it's your future</p>
            </div>
            <div className='category-container'>
                {jobs.map(job => <Category
                    job={job}
                ></Category>)}
            </div>
        </div>
    );
};

export default JobCategories;