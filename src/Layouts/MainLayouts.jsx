import Containers from '../components/Containers';
import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';

const MainLayouts = () => {
    return (
        <Containers>
            <div className='flex flex-col min-h-screen'>
                <Navbar></Navbar>
                
                <div className='flex-1'>
                    <Outlet></Outlet>
                </div>
                <Footer></Footer>
            </div>
        </Containers>
    );
};

export default MainLayouts;