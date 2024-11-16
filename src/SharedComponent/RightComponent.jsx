import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import kidsImg1 from '../assets/swimming.png'
import kidsImg2 from '../assets/class.png'
import kidsImg3 from '../assets/playground.png'
import { AuthContext } from '../Layout/AuthProvider';


const RightComponent = () => {
    const { userGoogle}=useContext(AuthContext)
    const handleGoogleLogin=()=>{
        userGoogle()
        .then(result=>{
            console.log(result.user);
        })
        .catch(error=>{
            console.log(error);
        })
    }
    return (
        <div>
            {/* login with */}
            <div className='p-2 '>
                <p className='text-xl text-[#403F3F] font-semibold'>Login with</p>
                <Link><button onClick={handleGoogleLogin} className="btn bg-white w-full my-4 mt-5"><FaGoogle />Login with Google</button></Link>
                <Link><button className="btn bg-white w-full"><IoLogoGithub />Login with Github</button></Link>
            </div>
            {/* Find Us On */}
            <div className='mt-8 '>
                <p className='text-xl text-[#403F3F] font-semibold mb-5'>Find Us On</p>
                <a className='flex items-center p-4 border rounded-t-lg' href=""><FaFacebook></FaFacebook>facebook</a>
                <a className='flex items-center p-4 border-x' href=""><FaTwitter></FaTwitter>Twitter</a>
                <a className='flex items-center p-4 border rounded-b-lg' href=""><FaInstagram></FaInstagram>Instragram</a>
            </div>
            {/* Q-Zone */}
            <div className='bg-[#F3F3F3] p-4 space-y-8 mt-8'>
                <p className='text-xl text-[#403F3F] font-semibold '>Q-Zone</p>
                <img src={kidsImg1} alt="" />
                <img src={kidsImg2} alt="" />
                <img src={kidsImg3} alt="" />
            </div>
        </div>
    );
};

export default RightComponent;