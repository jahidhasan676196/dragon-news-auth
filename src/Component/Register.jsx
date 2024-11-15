import React, { useContext } from 'react';
import Navbar from '../SharedComponent/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Layout/AuthProvider';

const Register = () => {
    const {userRegister}=useContext(AuthContext)
    const handleRegister=(e)=>{
        e.preventDefault()
        const name=e.target.name.value
        const photo=e.target.photo.value
        const email=e.target.email.value
        const password=e.target.password.value
        console.log(name,photo,email,password);

        // register
        userRegister(email,password)
        .then(result=>{
            console.log(result.user);
        })
        .catch(error=>{
            console.log(error);
        })
    }
    return (
        <div className='  '>
        <Navbar></Navbar>
       <div className="hero  min-h-screen">
      
       <div className="card bg-[#F3F3F3] w-1/2 shrink-0  card-body ">
           <h3 className='text-[#403F3F] text-4xl font-bold text-center mb-12'>Register your account</h3>
           <hr />
            <form onSubmit={handleRegister} className="mt-7">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-[#403F3F] font-xl font-semibold">Your name</span>
                </label>
                <input type="text" name='name' placeholder="Enter your name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-[#403F3F] font-xl font-semibold">Photo URL</span>
                </label>
                <input type="text" name='photo' placeholder="Enter your photo " className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-[#403F3F] font-xl font-semibold">Email address</span>
                </label>
                <input type="email" name='email' placeholder="Enter your email address" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-[#403F3F] font-xl font-semibold">Password</span>
                </label>
                <input type="password" name='password' placeholder="Enter your password" className="input input-bordered" required />
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-[#403F3F] text-white">Register</button>
              </div>
            </form>
            <p className='text-center mt-8'>Do Have An Account ? <Link to="/login" className='text-red-600 font-bold'>Login</Link></p>
          </div>
      </div>
   </div>
    );
};

export default Register;