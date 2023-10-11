import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='pt-6 flex gap-60 mx-16 '>
            <div>
                <h1 className='text-3xl bg-gradient-to-r from-orange-800 via-orange-500 to-orange-400 inline-block text-transparent bg-clip-text'><strong>Job Hut</strong></h1>
            </div>

            <div className='flex gap-10 text-slate-600 text-xl font-semibold pl-8'>
                <Link to="/">Home</Link>
                <Link to="/statistics">Statistics</Link>
                <Link to="/appliedjobs">Applied Jobs</Link>
                <Link to="/blog">Blog</Link>
                
               
            </div>
            
            <div className='pl-8'>
            <button className=" bg-orange-700 text-orange-300 border border-orange-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
            <span class="bg-orange-500 shadow-orange-400 absolute -top-[150%] left-0 inline-flex w-80 h-[6px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)] "></span>Start Applying</button>
            </div>
        </nav>
    );
};

export default Header;