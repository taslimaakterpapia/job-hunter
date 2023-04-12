import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import './SingleJob.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faDollar, faLocation, faMessage, faPhone } from '@fortawesome/free-solid-svg-icons';
import { addToDb } from '../../../public/utilities/fakedb';

const SingleJob = () => {

    const job = useLoaderData()
    // console.log(job);
    const info = useParams()
    const [jobDetails, setJobDetails] = useState({})
    useEffect(() => {
        const remaining = job.find(singleJob => singleJob.id == info.id);
        console.log(remaining)
        if (remaining) {
            setJobDetails(remaining)
        }
        else {

        }
    }, [])
    console.log(jobDetails)
    const { id, img, post, name, category, location, salary, jobtype, education, description, responsibility, phone, experience, email } = jobDetails;
    const applyToJob = (id)=> {
        addToDb(id);
    }
    return (
        <div className='container'>
            <div className='heading'>
                <h1>Job Detail</h1>
            </div>
            <div className='single-job-container'>

                <div className='p-6'>
                    <h2>{name}</h2>
                    <h5><strong>Job Description:</strong>{description}</h5>
                    <h5><strong>Job Responsibility:</strong>{responsibility}</h5>
                    <h5><strong>Educational Requirement:</strong></h5>
                    <h5>{education}</h5>
                    <h5><strong>Experience:</strong></h5>
                    <h5>{experience} in This Field</h5>
                </div>
                <div className='job-details p-6'>
                    <h3 className='heading'>Job Details</h3>
                    <hr />
                    <div className='flex'>
                        <div>
                            <FontAwesomeIcon icon={faDollar}></FontAwesomeIcon>
                        </div>
                        <div><p className='mx-2'><strong>Salary:</strong>{salary} (per month)</p></div>
                    </div>
                    <div className='flex'>
                        <div><FontAwesomeIcon icon={faBagShopping}></FontAwesomeIcon></div>
                        <div>
                            <p className='mx-2'><strong>Job Title:</strong> {post}</p>
                        </div>
                    </div>
                    {/* <br /> */}
                    <h3 className='heading'>Contact Information</h3>
                    <hr />
                    <div className='flex'>
                        <div><FontAwesomeIcon icon={faPhone}></FontAwesomeIcon></div>
                        <div className='mx-2'>
                            <strong>Phone:</strong>{phone}
                        </div>
                    </div>
                    <br />
                    <div className='flex'>
                        <div><FontAwesomeIcon icon={faMessage}></FontAwesomeIcon></div>
                        <div className='mx-2'><strong>Email:</strong>{email}</div>
                    </div>
                    <div className='flex mb-3'>
                        <div><FontAwesomeIcon icon={faLocation}></FontAwesomeIcon></div>
                        <div><p className='mx-2'><strong>Address:</strong>{location}</p></div>
                    </div>
                    <Link to="/appliedjobs">
                             <button onClick={()=>applyToJob(id)} className='button'>Apply Now</button>
                    </Link>
                </div>
                
            </div>

        </div>
    );
};

export default SingleJob;