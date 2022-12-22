import React from 'react';
import { Link } from 'react-router-dom';
import img2 from '../asset/bg.jpg';
import PrimaryButton from './Button/PrimaryButton';
import Contact from './Contact/Contact';
import HiringCompany from './HiringCompany';
import JobCategory from './JobCategory';
import Login from './Login/Login';

const Home = () => {
    return (
        <div>
            {/* this is banner */}
            <div className=" min-h-screen bg-no-repeat bg-cover" style={{ backgroundImage: `url(${img2})` }}>
                <div className="flex md:justify-end md:mr-40 md:pt-10 justify-center">
                    <div>
                        <h1 className="text-5xl text-orange-500 font-bold">Find Your Job</h1>
                        <p className="py-6 text-orange-500 w-[350px]">Find full or part-time jobs in England, Scotland and Wales.
                            Use the ‘Find a job’ service to search and apply for jobs.
                            This service has replaced Universal Jobmatch.</p>
                        <Link to={'/contact'}> <PrimaryButton>Contact US</PrimaryButton></Link>
                    </div>
                </div>
            </div>
            {/* this is job category */}
            <JobCategory />
            {/* this is company category */}
            <HiringCompany />
            {/* this is login */}
            <Login />
            {/* this is contact */}
            <Contact />
        </div>
    );
};

export default Home;