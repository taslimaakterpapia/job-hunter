import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='nav-bar'>
            <div>
                <h1><strong>OpportunityHub</strong></h1>
            </div>
            <div>
                <Link to="/">Home</Link>
                <Link to="/statistics">Statistics</Link>
                <Link to="/appliedjobs">Applied Jobs</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/error">Error</Link>
                {/* <Link to="/">Home</Link> */}
            </div>
            <div>
                <button className='button'>Start Applying</button>
            </div>
        </nav>
    );
};

export default Header;