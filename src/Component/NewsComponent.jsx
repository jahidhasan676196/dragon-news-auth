import React from 'react';
import NewsCard from './NewsCard';
import Navbar from '../SharedComponent/Navbar';

const NewsComponent = ({news}) => {
    // console.log(news);
    return (
        <div>
            <h3 className='text-xl text-[#403F3F] font-semibold'>Dragon News Home</h3>
            <div>
                {
                    news.map(aNews=><NewsCard key={aNews._id} aNews={aNews}></NewsCard>)
                }
            </div>
        </div>
    );
};

export default NewsComponent;