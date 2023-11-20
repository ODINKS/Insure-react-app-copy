import React from 'react'
import { Link } from 'react-router-dom';
import BUTTON from "../../../components/molecules/global/Button";

const reset = () => {
  return (
    <main className="w-full h-screen flex justify-center items-center">
      <form className="rounded-md w-[500px] p-5">
        <div className="logo flex justify-center items-center">
          <img src="https://tinyurl.com/3wuh45ve" alt="INSURE LOGO" />
        </div>
        <div className="flex flex-col w-full my-2">
          <div className="w-full py-3 px-5 border border-blue-500 border-l-4 border-l-[#e76927] mb-5">
            Please, enter your username or email address. You will receive an
            email message with instrutions on how to reset your password.
          </div>
          <input
            type="text"
            className="px-2 py-3 my-2 rounded-[3px] border border-blue-500 focus:outline-none"
            placeholder="Enter username or email address"
          />
        </div>
        <BUTTON
          description="Get new password"
          width="full"
          //   className="w-full text-[#000]"
        />
        <Link to="/login" className="text-[12px] mt-5 pl-2">
          Login
        </Link>
      </form>
    </main>
  );
}

export default reset