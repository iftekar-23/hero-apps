import React from 'react';

const TrustedSection = () => {
  return (
    <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white mt-0 py-14">
      <div className="max-w-5xl mx-auto px-4 text-center">
        
        <h2 className="text-3xl md:text-4xl font-semibold mb-10">
          Trusted By Millions, Built For You
        </h2>

        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
         
          <div>
            <h3 className="text-gray-200 text-lg mb-1">Total Downloads</h3>
            <p className="text-5xl font-bold">29.6M</p>
            <p className="text-sm text-gray-300 mt-2">21% More Than Last Month</p>
          </div>

         
          <div>
            <h3 className="text-gray-200 text-lg mb-1">Total Reviews</h3>
            <p className="text-5xl font-bold">906K</p>
            <p className="text-sm text-gray-300 mt-2">46% More Than Last Month</p>
          </div>

          <div>
            <h3 className="text-gray-200 text-lg mb-1">Active Apps</h3>
            <p className="text-5xl font-bold">132+</p>
            <p className="text-sm text-gray-300 mt-2">31 More Will Launch</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedSection;
