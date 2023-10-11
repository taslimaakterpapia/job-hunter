import React from 'react';
// import './Home.css';
import myimg from '../../images/sk.png';
import JobCategories from '../JobCategories/JobCategories';
import FeatureJobs from '../FeatureJobs/FeatureJobs';

const Home = () => {
    return (
        <div className='container pt-2 mx-24'>
            <div className='banner flex'>
                <div className='pl-10' >

                    <h3 className="text-slate-700 text-8xl font-bold pb-6 pt-24">One Step <br /> Closer To Your <br /> 

                    <span className=' bg-gradient-to-r from-orange-800 via-orange-500 to-orange-400 inline-block text-transparent bg-clip-text'>Dream Job</span>
                    
                    </h3>


                    <p class="banner-description text-2xl text-justify font-medium text-slate-600 pb-6">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>


                    <button className="bg-orange-700 text-orange-300 border border-orange-400 border-b-4 font-medium overflow-hidden relative px-6 py-4 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
                        <span class="bg-orange-500 shadow-orange-400 absolute -top-[150%] left-0 inline-flex w-80 h-[6px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)] "></span>Get Started</button>


                </div>



                <img src={myimg} alt=""></img>
            </div>

            <div >
                <JobCategories></JobCategories>
            </div>
            <div >
                <FeatureJobs></FeatureJobs>

            </div>

        </div>

    );
};

export default Home;