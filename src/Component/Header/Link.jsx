import React from 'react';
import { BeakerIcon } from '@heroicons/react/24/solid'

const Link = ({route}) => {


    return (
       
        <div className=' mr-5'>
          
      
            
             <li className='text-2xl font-semibold'>
                <a href={route.path}>{route.name}</a>
             </li>
        </div>
    );
};

export default Link;