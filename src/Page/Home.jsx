import React from 'react';
import Header from '../SharedComponent/Header';
import Marque from '../Component/Marque';
import Navbar from '../SharedComponent/Navbar';
import LeftComponent from '../Component/LeftComponent';
import NewsComponent from '../Component/NewsComponent';
import RightComponent from '../SharedComponent/RightComponent';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const news=useLoaderData()
    return (
        <div>
            <Header></Header>
            <Marque></Marque>
            <Navbar></Navbar>
            <div className=' mt-20 grid grid-cols-4 gap-6'>
                <div className=''>
                    <LeftComponent></LeftComponent>
                </div>
                <div className='  col-span-2'>
                    <NewsComponent key={news._id} news={news}></NewsComponent>
                </div>
                <div className=''>
                    <RightComponent></RightComponent>
                </div>
            </div>
        </div>
    );
};

export default Home;