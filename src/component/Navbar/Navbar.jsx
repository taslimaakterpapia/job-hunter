import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className='m-4 d-flex d-flex justify-content-between px-5'>
            <h1 className='ms-2'>CareerHub</h1>
            <div className="d-flex gap-5 mt-3 fw-medium" >
                <a href="">Statistics</a>
                <a href="">Applied Jobs</a>
                <a href="">Blog</a>
                
            </div>
            <button className='btn fw-bold me-2'>Star Applying</button>
        </div>
    );
};

export default Navbar;