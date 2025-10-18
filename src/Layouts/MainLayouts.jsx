import Containers from '../components/Containers';
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { Outlet, useLocation } from 'react-router';
import Footer from '../components/Footer';
import Loading from '../Pages/Loading';

const MainLayouts = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 800); 
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <Containers>
      <div className="flex flex-col min-h-screen relative">
        <Navbar />

      
        <div className="flex-1 relative">
          <Outlet />

          {loading && <Loading />}
        </div>

        <Footer />
      </div>
    </Containers>
  );
};

export default MainLayouts;
