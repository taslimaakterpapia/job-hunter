import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollar, faLocation } from '@fortawesome/free-solid-svg-icons';
import './Filter.css'
// import FilterJobs from '../FilterJobs/FilterJobs';

const Filter = ({data}) => {
    const {name,post,img,location,salary,category,jobtype}=data || {};
    return (
        
        <div >
         <div className='container filter-container  mt-4'>
            <div className='flex'>
                <div className='flex'>
                    <div>
                        <img className='image-container' src={img} alt="" />
                    </div>
                    <div className='ms-3 mt-3'>
                        <p>{post}</p>
                        <p>{name}</p>
                        <button className='me-2'>{category}</button>
                        <button>{jobtype}</button>
                        <div className='flex align-items-center'>
                            <div className='flex justify-content-around'>
                                <div>
                                    <FontAwesomeIcon icon={faLocation}/>
                                </div>
                                <div className='ms-2'>
                                    <p>{location}</p>
                                </div>
                            </div>
                            <div className='flex'>
                                <div className='ms-5'>
                                    <FontAwesomeIcon icon={faDollar}/>
                                </div>
                                <div className='ms-3'>
                                    <p>Salary: {salary}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                
            </div>
            <button className=' flex filter align-items-center justify-content-center button'>Filter</button>
        </div>
        </div>
    );
};

export default Filter;