import React from 'react';
import './Feature.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapLocation, faMap, faMoneyBill } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Feature = ({ alljob }) => {
    const { id, img, post, name, category, location, jobtype, salary } = alljob;
    return (
        <div>
            <div className='feature'>
                <img src={img} alt="" />
                <h4>{post}</h4>
                <h6>{name}</h6>
                <button>{category}</button>
                <button>{jobtype}</button>
                <div className="info">
                    <div className="location-icon">
                        <FontAwesomeIcon icon={faMap} />
                        <h6>{location}</h6>
                    </div>

                    <div className="salary-info">
                        <FontAwesomeIcon icon={faMoneyBill} />
                        <h6>Salary: {salary}</h6>
                    </div>
                </div>
                <Link to={`/jobs/${id}`}>
                    <button className='button'>View Details</button>
                </Link>
            </div>

        </div>

    );
};

export default Feature;