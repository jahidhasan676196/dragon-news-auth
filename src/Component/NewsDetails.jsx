import React from 'react';
import Header from '../SharedComponent/Header';
import RightComponent from '../SharedComponent/RightComponent';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import Navbar from '../SharedComponent/Navbar';

const NewsDetails = () => {
    const news=useLoaderData()
    const params=useParams()
    const newsD= news.find(aNews=>aNews._id==params.userId)

    const {image_url,title,details}=newsD
    console.log(newsD);
     

    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className='grid grid-cols-4 gap-6 mt-11'>
                <div className='col-span-3 '>
                    <h3 className='text-[#403F3F] text-xl font-bold'>Dragon News</h3>
                    {/* news details */}
                    <div className="card bg-base-100 mt-6 border rounded-lg">
                      <figure>
                        <img className='w-full m-5'
                          src={image_url}
                          alt="Shoes" />
                      </figure>
                      <div className="card-body">
                        <h2 className="card-title">{title}</h2>
                        <p>{details}</p>
                        <div className="card-actions ">
                          <Link to="/"><button className="btn bg-[#D72050] text-white">All news in this category</button></Link>
                        </div>
                      </div>
                    </div>

                </div>
                <div className='col-span-1 '>
                    <RightComponent></RightComponent>
                </div>
            </div>
        </div>
    );
};

export default NewsDetails;