import Containers from '../components/Containers';
import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';

const MainLayouts = () => {
    return (
        <Containers>
            <div>
                <Navbar></Navbar>

                <Outlet></Outlet>

                <Footer></Footer>
            </div>
        </Containers>
    );
};

export default MainLayouts;