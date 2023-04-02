import React from 'react';

const PriceCard = ({singleData}) => {
    
    return (
        <div className='font-bold bg-sky-950 text-white p-16 rounded-md flex flex-col'>
            <h1 className='text-3xl'>{singleData.price}</h1>
            <h4 className='text-2xl'>{singleData.name}</h4>
            <p>
</p>
            <div className='text-left text-xl font-bold'>
                {
                    singleData.features.map(feature=>{
                      return( <div className='flex align-middle gap-3 items-center  text-left'>
                        
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                         </svg>                       
                        <li className='list-none'>{feature}</li>
                      

                      </div>
                      )

                    })
                }
            </div>
            <button className='w-full mt-auto my-2 text-xl font-semibold py-2 rounded-lg bg-zinc-300'>Bye Now</button>
        </div>
    );
};

export default PriceCard;