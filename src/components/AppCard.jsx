import React from 'react';
import downImg from '../assets/icon-downloads.png';
import starImg from '../assets/icon-ratings.png';
import { Link } from 'react-router';

const AppCard = ({ app }) => {
    const { id, companyName, title, ratingAvg, downloadsText, image } = app;

    return (
        <Link to={`/apps/${id}`}>
            <div className='p-5 shadow-2xl rounded-xl hover:scale-105 transition ease-in-out cursor-pointer'>
                <img className='w-full h-55 rounded-2xl' src={image} alt={title} />
                <p className='font-semibold my-3'>{title}: {companyName}</p>

                <div className='flex justify-between items-center'>
                    <div className='flex items-center gap-1 bg-green-200 p-2 rounded-xl '>
                        <img className='h-4' src={downImg} alt="downloads" />
                        <span>{downloadsText}</span>
                    </div>

                    <div className='flex items-center gap-1 p-2 rounded-xl bg-amber-100 text-amber-500'>
                        <img className='h-4' src={starImg} alt="rating" />
                        <span>{ratingAvg}</span>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default AppCard;
