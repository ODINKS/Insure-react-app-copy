import React from "react";
import BUTTON from "../../../components/molecules/global/Button";
import { Link } from "react-router-dom";

const Login = () => {

  return (
    <main className="w-full h-screen flex justify-center items-center">
      <form className="rounded-md w-[500px] p-5">
        <div className="logo flex justify-center items-center">
          <img src="https://tinyurl.com/3wuh45ve" alt="INSURE LOGO" />
        </div>
        <h1 className="font-bold mb-4 text-2xl lg:text-4xl">
            Welcome <span className="text-[--orange-bg]">Back</span> Admin
          </h1>
        <div className="flex flex-col w-full my-2">
          <input
            type="email"
            className="px-2 py-3 my-2 rounded-[3px] border border-blue-500 focus:outline-none"
            placeholder="Enter email address"
          />
          <input
            type="password"
            className="px-2 py-3 my-2 rounded-[3px] border border-blue-500 focus:outline-none"
            placeholder="Enter password"
          />
        </div>
        <BUTTON
          description="Login"
          width = 'full'
        //   className="w-full text-[#000]"
        />
        <Link to="/reset" className='text-[12px] mt-5 pl-2'>Forgot password?</Link>
        
      </form>
    </main>
  );
};

export default Login;
