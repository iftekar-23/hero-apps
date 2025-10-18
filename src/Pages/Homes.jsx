import React from 'react';
import HeroSection from '../components/HeroSection';
import TrustedSection from '../components/TrustedSection';
import useApps from '../Hooks/Hooks';
import AppCard from '../components/AppCard';
import { Link } from 'react-router';

const Homes = () => {

    const {apps} = useApps();
    // console.log(apps)

    const featuredApps = apps.slice(0,8)

    return (
        <div>
            <div className='my-20'>
                <HeroSection></HeroSection>
                <TrustedSection></TrustedSection>

                <div className='text-center my-10'>
                    <h1 className='text-5xl font-bold mb-5'>Trending Apps</h1>
                    <p className='text-xl text-gray-600'>Explore All Trending Apps on the Market developed by us</p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
                    {
                        featuredApps.map(app => (<AppCard key={app.id} app={app}></AppCard>))
                    }

                </div>

                <Link to={'/apps'} className='btn rounded- bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:scale-105 transition ease-in-out w-30 mx-auto flex justify-center items-center mt-10'>Show All</Link>
            </div>
        </div>
    );
};

export default Homes;