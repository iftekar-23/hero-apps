import React from 'react';
import heroImage from '../assets/hero.png'; 
import appStoreImg from '../assets/appstore.png'
import playStoreImg from '../assets/playstore.png'
import { Link } from 'react-router';

const HeroSection = () => {
  return (
    <section className="bg-white text-center pt-16 pb-0">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          We Build <br /> <span className="text-indigo-600">Productive</span> Apps
        </h1>

        <p className="text-gray-600 mb-8">
          At <span className="font-semibold">HERO.IO</span>, we craft innovative apps designed to make everyday life simpler, smarter, 
          and more exciting. Our goal is to turn your ideas into digital experiences that truly make an impact.
        </p>

   
        <div className="flex justify-center gap-4 mb-12">
          <Link to={'https://play.google.com/store/games?hl=en'} className="btn p-5 rounded-xl  ">
            <img src={playStoreImg} alt="" />
            <p>Google Play</p>
          </Link>
          <Link to={'https://www.apple.com/app-store/'} className="btn p-5 rounded-xl ">
            <img src={appStoreImg} alt="" />
            <p className='ml-1'>App Store</p>
          </Link>
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
