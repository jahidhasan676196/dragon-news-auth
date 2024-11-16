import React from 'react';
import bookmark from '../assets/Frame (11).svg'
import share from '../assets/Frame (12).svg'
import { Link } from 'react-router-dom';

const NewsCard = ({aNews}) => {
    const {name,img,published_date}=aNews.author
    const {title,image_url,_id ,details}=aNews
    return (
        <div className="card bg-base-100  border rounded-md mt-6 ">
            {/* author */}
            <div className='mb-3 bg-[#F3F3F3] p-4 rounded-md flex justify-between'>
                <div className='flex gap-4'>
                    <img className='w-10 rounded-full' src={img} alt="" />
                    <div>
                        <h3 className='text-base text-[#403F3F] font-semibold'>{name}</h3>
                        <p className='text-sm text-[#706F6F] font-normal'>{published_date}</p>
                    </div>
                </div>
                <div className='flex'>
                    <img className='w-6' src={bookmark} alt="" />
                    <img className='w-6' src={share} alt="" />
                </div>
            </div>
            <div className='p-5 space-y-6'>
                <h3 className='text-xl text-[#403F3F] font-bold'>{title}</h3>
                <figure>
                <img
                src={image_url}
                alt="Shoes" />
                </figure>
                {
                    details.length>200? <>
                    <p className='text-base text-[#706F6F] font-normal'>{details.slice(0,200)}</p>
                    <Link  to={`/detail/${_id}`} aNews={aNews} className='text-blue-800 text-lg font-bold'>Read more</Link>
                    </>:<p>{details}</p>
                }
            </div>
      </div>
    );
};

export default NewsCard;