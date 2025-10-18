import React, { useState } from 'react';
import useApps from '../Hooks/Hooks';
import AppCard from '../components/AppCard';

const Apps = () => {
    const { apps } = useApps();
    // console.log(apps)

    const [search, setSearch] = useState('');
   
    const term = search.trim().toLocaleLowerCase();
    const searchApps = term ?
    apps.filter(app => app.title.toLocaleLowerCase().includes(term))
    : apps
     console.log(searchApps)



    return (
        <div>

            <div className='text-center my-10'>
                <h1 className='text-4xl font-bold mb-3'>Our All Applications</h1>
                <p className='text-gray-400'>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>


            <div className='flex justify-between items-center py-3 mt-2'>
                <span className='text-2xl font-bold'>({searchApps.length}) Apps Found</span>
                <label className="input">
                    <input type="search"
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                        placeholder="Search Products" />
                </label>
            </div>


            {
                searchApps.length > 0 ? (
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 my-6'>
                        {searchApps.map(app => (
                            <AppCard key={app.id} app={app} />
                        ))}
                    </div>
                ) : (
                    <div className='flex justify-center items-center h-64 text-xl text-gray-500 font-semibold'>
                        No apps found
                    </div>
                )
            }
        </div>
    );
};

export default Apps;