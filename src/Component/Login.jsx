import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../SharedComponent/Navbar';
import { AuthContext } from '../Layout/AuthProvider';

const Login = () => {
    const { userLogin}=useContext(AuthContext)
    const handleLogin=(e)=>{
        e.preventDefault()
        const email =e.target.email.value
        const password =e.target.password.value
        console.log(email,password);

        // user login
        userLogin(email,password)
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
                <h3 className='text-[#403F3F] text-4xl font-bold text-center mb-12'>Login your account</h3>
                <hr />
                 <form onSubmit={handleLogin} className="mt-7">
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
                     <button className="btn bg-[#403F3F] text-white">Login</button>
                   </div>
                 </form>
                 <p className='text-center mt-8'>Dont’t Have An Account ? <Link to="/register" className='text-red-600 font-bold'>Register</Link></p>
               </div>
           </div>
        </div>
    );
};

export default Login;