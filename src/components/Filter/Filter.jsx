import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollar, faLocation } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Filter = ({ data }) => {
    const { id, name, post, img, location, salary, category, jobtype } = data || {};
    return (

        <div >


            <div className='flex justify-between mx-52 border border-orange-600 rounded-md mb-5'>


                <div className='flex gap-12 text-xl  font-medium text-slate-600 mx-5 p-10'>


                    <img className='image-container w-[150px] border border-orange-600 rounded-md p-3' src={img} alt="" />



                    <div>

                        <div className='bg-gradient-to-r from-orange-800 via-orange-500 to-orange-400 inline-block text-transparent bg-clip-text text-2xl '>{post}</div>

                        <div className='py-2'>{name}</div>


                        <div className='flex gap-4 py-2'>

                            <button className='bg-gradient-to-r from-orange-800 via-orange-500 to-orange-400 px-6 py-2 rounded-md text-white text-xl'>{category}</button>

                            <button className='bg-gradient-to-r from-orange-800 via-orange-500 to-orange-400 px-6 py-2 rounded-md text-white text-xl'>{jobtype}</button>

                        </div>


                        <div className='flex py-2'>


                            <div className='flex'>
                                <div>
                                    <FontAwesomeIcon icon={faLocation} />
                                </div>
                                <div className='ms-2'>
                                    <p>{location}</p>
                                </div>
                            </div>


                            <div className='flex'>
                                <div className='ms-5'>
                                    <FontAwesomeIcon icon={faDollar} />
                                </div>
                                <div className='ms-3'>
                                    <p>Salary: {salary}</p>
                                </div>
                            </div>


                        </div>


                    </div>




                </div>

               

                <Link to={`/jobs/${id}`} className='p-24'>
                <button className="bg-gradient-to-r from-orange-800 via-orange-500 to-orange-400 px-10 py-4 rounded-md text-white text-2xl">View Details</button>     
                </Link>


            </div>



        </div>

    );
};

export default Filter;