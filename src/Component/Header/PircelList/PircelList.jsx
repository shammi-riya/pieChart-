import React, { useEffect, useState } from 'react';
import PriceCard from '../../PriceCard/PriceCard';

const PircelList = () => {

    const [data,setData] = useState([])
    

    useEffect(()=>{
     fetch('data.json')
     .then(res=>res.json())
     .then(data=>setData(data))
    },[])



    return (
        <div>
            <h1 className='text-3xl text-slate-900 py-6'>Phiricing list</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-5'>
                {
                  data.map(singleData=><PriceCard
                  key={singleData.id}
                  singleData={singleData}
                  ></PriceCard>)
                }
            </div>
        </div>
    );
};

export default PircelList;