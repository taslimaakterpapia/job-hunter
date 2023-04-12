import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header-main'>
            <div className='d-flex flex-row'>
                <div className='header'>
                    <h1 className='one-step'>One Step  Closer To Your <span className='dream-job'>Dream Job</span></h1>
                    <p>Explore thousands of job opportunities with all the <br /> information you need. Its your future. Come find it. Manage all <br /> your job application from start to finish.</p>
                    <button className='btn-2'>Get Started</button>

                </div>

                <div>
                    <img src="image/pic.png" alt="" />
                </div>
            </div>

        </div>
    );
};

export default Header;