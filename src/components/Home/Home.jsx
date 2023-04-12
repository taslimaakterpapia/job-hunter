import React from 'react';
import './Home.css';
import myimg from '../../images/sk.png';
import JobCategories from '../JobCategories/JobCategories';
import FeatureJobs from '../FeatureJobs/FeatureJobs';

const Home = () => {
    return (
        <div className='container'>
            <div className='banner'>
                <div>
                    <h3 class="banner-sub-title">One Step</h3>
                    <h3 class="banner-title">Closer To Your <br /> Dream Job</h3>
                    <p class="banner-description">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button className="button">Get Started</button>
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