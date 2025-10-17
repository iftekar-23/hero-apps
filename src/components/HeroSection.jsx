import React from 'react';
import heroImage from '../assets/hero.png'; 
import appStoreImg from '../assets/appstore.png'
import playStoreImg from '../assets/playstore.png'

const HeroSection = () => {
  return (
    <section className="bg-white text-center py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          We Build <br /> <span className="text-indigo-600">Productive</span> Apps
        </h1>

        <p className="text-gray-600 mb-8">
          At <span className="font-semibold">HERO.IO</span>, we craft innovative apps designed to make everyday life simpler, smarter, 
          and more exciting. Our goal is to turn your ideas into digital experiences that truly make an impact.
        </p>

   
        <div className="flex justify-center gap-4 mb-12">
          <button className="btn btn-outline  ">
            <img src={playStoreImg} alt="" />
            <p>Google Play</p>
          </button>
          <button className="btn btn-outline ">
            <img src={appStoreImg} alt="" />
            <p>App Store</p>
          </button>
        </div>

       
        <div className="flex justify-center">
          <img
            src={heroImage}
            alt="Hero"
            className="w-[300px] md:w-[400px] lg:w-[450px] "
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
