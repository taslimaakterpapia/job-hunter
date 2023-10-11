import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
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
    const applyToJob = (id) => {
        addToDb(id);
    }
    return (
        <div className='mx-28'>

            <div>

            <div className='text-center'>
                <h1 className='pt-10 text-6xl font-bold bg-gradient-to-r from-orange-800 via-orange-500 to-orange-400 inline-block text-transparent bg-clip-text pb-3'>Job Detail</h1>
            </div>




            <div className=' flex gap-20'>

                <div className='p-6 text-2xl text-justify text-slate-600'>
                    <h2 className='pb-5 text-4xl font-medium bg-gradient-to-r from-orange-800 via-orange-500 to-orange-400 inline-block text-transparent bg-clip-text'>{name}</h2>
                    <h5 className='pb-5'><strong> Job Description:</strong> {description}</h5>
                    <h5 className='pb-5'><strong>Job Responsibility:</strong>{responsibility}</h5>
                    <h5 className='pb-5'><strong>Educational Requirement:</strong> {education} </h5>
                    <h5 className='pb-5'></h5>
                    <h5 className='pb-5'><strong>Experience:</strong> {experience} years in This Field</h5>

                </div>



                <div className=' p-6 w-[1200px] border-2 border-orange-600 mt-12 my-10 rounded-md'>
                    <div className='text-center'>
                        
                        <h3 className='bg-gradient-to-r from-orange-800 via-orange-500 to-orange-400 inline-block text-transparent bg-clip-text  font-semibold text-3xl pb-8 '>Job Details</h3>
                      </div>  

                        <div className='flex  text-slate-600 pb-2'>
                            <div>
                                <FontAwesomeIcon icon={faDollar}></FontAwesomeIcon>
                            </div>
                            <div><p className='mx-2'><strong> Salary:</strong> {salary} (per month)</p></div>
                        </div>




                        <div className='flex  text-slate-600'>
                            <div className='pb-6'><FontAwesomeIcon icon={faBagShopping}></FontAwesomeIcon></div>
                            <div>
                                <p className='mx-2 '><strong> Job Title:</strong> {post}</p>
                            </div>
                        </div>

                       <div className='text-center'>
                       <h3 className='pt-5 bg-gradient-to-r from-orange-800 via-orange-500 to-orange-400 inline-block text-transparent bg-clip-text  font-semibold text-3xl text-center'> Contact Information</h3>
                       </div>

                        <div className='flex  text-slate-600 pb-2 pt-8 '>
                            <div><FontAwesomeIcon icon={faPhone}></FontAwesomeIcon></div>
                            <div className='mx-2'>
                                <strong>Phone:</strong> {phone}
                            </div>
                        </div>

                        <div className='flex text-slate-600 pb-2'>
                            <div className=''><FontAwesomeIcon icon={faMessage}></FontAwesomeIcon></div>
                            <div className='mx-2'><strong> Email:</strong> {email}</div>
                        </div>
                        <div className='flex text-slate-600 pb-2 mb-3'>
                            <div className='pb-6'><FontAwesomeIcon icon={faLocation}></FontAwesomeIcon></div>
                            <div><p className='mx-2'><strong> Address:</strong> {location}</p></div>
                        </div>


                        <div className='text-center'>
                        <Link to="/appliedjobs">
                            <button onClick={() => applyToJob(id)} className='bg-gradient-to-r from-orange-800 via-orange-500 to-orange-400 px-8 py-2 rounded-md text-white text-xl'> Apply Now</button>
                        </Link>
                        </div>


                    </div>
                    </div>


                


            </div>


            </div>

        


    );
};

export default SingleJob;