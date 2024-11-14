import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const LeftComponent = () => {
    const [news,setNews]=useState([])
    useEffect(()=>{
        fetch('categories.json')
        .then(res=>res.json())
        .then(data=>setNews(data))
    },[])
    return (
        <div>
            <div>
                <p className='text-[#403F3F] text-xl font-semibold mb-6 text-center'>All Caterogy</p>
                <div className='flex flex-col text-start '>
                    {
                        news.map(ne=><NavLink><button className="btn bg-white w-full border-none">{ne.name}</button></NavLink>)
                    }
                </div>
            </div>
        </div>
    );
};

export default LeftComponent;