import React from 'react';
import Header from '../SharedComponent/Header';
import Marque from '../Component/Marque';
import Navbar from '../SharedComponent/Navbar';
import LeftComponent from '../Component/LeftComponent';
import NewsComponent from '../Component/NewsComponent';
import RightComponent from '../SharedComponent/RightComponent';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Marque></Marque>
            <Navbar></Navbar>
            <div className=' mt-20 grid grid-cols-4 gap-6'>
                <div className='border'>
                    <LeftComponent></LeftComponent>
                </div>
                <div className=' border col-span-2'>
                    <NewsComponent></NewsComponent>
                </div>
                <div className='border'>
                    <RightComponent></RightComponent>
                </div>
            </div>
        </div>
    );
};

export default Home;