import React from 'react';

const Containers = ({children}) => {
    return (
        <div className='container mx-auto'>
            {children}
        </div>
    );
};

export default Containers;