import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faMap, faMoneyBill } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Feature = ({ alljob }) => {
    const { id, img, post, name, category, location, jobtype, salary } = alljob;
    return (
        <div>

            <div class="p-6 rounded-xl border border-orange-400 m-2 text-center">
               


                    <div class="flex flex-col items-center">
                        <img className='w-[300px] ' src={img} alt="" />
                        <h4 className='font-medium text-3xl text-orange-900 pt-6'>{post}</h4>
                        <h6 className="pb-5 text-2xl font-medium text-slate-600">{name}</h6>



                        <div className='flex gap-16'>

                            <button className='bg-gradient-to-r from-orange-800 via-orange-500 to-orange-400 px-8 py-2 rounded-md text-white text-xl'>{category}</button>

                            <button className='bg-gradient-to-r from-orange-800 via-orange-500 to-orange-400 px-8 py-2 rounded-md text-white text-xl'>{jobtype}</button>

                        </div>



                        <div className="flex py-6 gap-12 ">
                            <div className="flex gap-3 text-xl font-medium text-slate-600">
                                <FontAwesomeIcon icon={faMap} />
                                <h6>{location}</h6>
                            </div>

                            <div className="flex gap-3 text-xl font-medium text-slate-600">
                                <FontAwesomeIcon icon={faMoneyBill} />
                                <h6>Salary: {salary}</h6>
                            </div>
                        </div>




                        <Link to={`/jobs/${id}`}>
                            <button className='bg-gradient-to-r from-orange-800 via-orange-500 to-orange-400 px-8 py-2 rounded-md text-white text-xl'>View Details</button>
                        </Link>



                    </div>

                

            </div>

        </div>

    );
};

export default Feature;