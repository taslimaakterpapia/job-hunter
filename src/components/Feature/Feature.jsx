import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMap, faMoneyBill } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Feature = ({ alljob }) => {
    const { id, img, post, name, category, location, jobtype, salary } = alljob;
    return (
        <div class="w-[600px] p-4 rounded-xl border border-orange-400 mb-4 text-center ">

            <div class="flex flex-col items-center">

                <img className='w-[150px] ' src={img} alt="" />
                <h4 className='font-medium text-3xl text-orange-900 pt-6'>{post}</h4>
                <h6 className="pb-3 text-2xl font-medium text-slate-600">{name}</h6>
                <div className='flex gap-8'>
                    <button className='bg-gradient-to-r from-orange-800 via-orange-500 to-orange-400 px-6 py-2 rounded-md text-white text-lg'>{category}</button>
                    <button className='bg-gradient-to-r from-orange-800 via-orange-500 to-orange-400 px-6 py-2 rounded-md text-white text-lg'>{jobtype}</button>
                </div>
                <div className="flex py-4 gap-6">
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
                    <button className='bg-gradient-to-r from-orange-800 via-orange-500 to-orange-400 px-6 py-2 rounded-md text-white text-lg'>View Details</button>
                </Link>
            </div>
        </div>
    );
};

export default Feature;
