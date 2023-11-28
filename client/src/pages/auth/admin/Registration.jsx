import React from 'react';

export const Registration = () => {
  return (
    <main className="flex flex-col lg:flex-row lg:w-full">
      {/* Left Column */}
      <div className="sm:px-20 lg:w-[50%] h-screen flex flex-col px-8">
        {/* Logo */}
        <a href="index.html" className="flex text-center items-center justify-center ">
          <img src="https://tinyurl.com/3wuh45ve" alt="logo" className="mb-2 w-16 h-12 lg:w-24 lg:h-14" />
        </a>
        {/* Header Section */}
        <div className="">
          <h1 className="font-bold mb-4 text-2xl lg:text-4xl">
            Register <span className="text-red-500">with</span> INsure
          </h1>
          <p className="pb-4 text-xs lg:text-base">
            Get started - <span className="text-red-500">7</span> days free trial
          </p>
        </div>
        {/* Form Area */}
        <form name="signUpData" 
        // onSubmit={(event) => signUP(event)} 
        className="flex flex-col w-full">
          {/* Company name */}
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Company's name"
            className="w-full h-[40px] px-3 py-2 border border-gray-900 rounded-md mb-4 focus:border-blue-500"
          />
          <input
            type="text"
            name="Btype"
            placeholder="Business type (e.g., proprietorship)"
            className="w-full h-[40px] px-3 py-2 border border-gray-900 rounded-md mb-4 focus:border-blue-500"
          />
          <select className="w-full h-[40px] px-3 py-2 border border-gray-900 rounded-md mb-4 text-xs lg:text-sm text-gray-400 focus:border-blue-500">
            <option>Team capacity</option>
            <option>1 - 10</option>
            <option>11 - 20</option>
            <option>21 - 50</option>
            <option>51 - 200</option>
          </select>
          {/* Company license */}
          <input
            type="text"
            name="license"
            placeholder="Company license"
            className="w-full h-[40px] px-3 py-2 border border-gray-900 rounded-md mb-4"
          />
          {/* Register button */}
          <button
            type="submit"
            className="w-full h-[40px] bg-orange-600 text-white font-bold py-2 px-4 rounded-md hover:bg-orange-400 mb-8"
            id="register-button"
          >
            Continue
          </button>
          <div className="text-left text-xs">
            <p className="mt-2 text-xs">
              By proceeding, you agree to the
              <a href="#">
                <span className="text-blue-500 hover:underline">Terms of services</span>
              </a>{' '}
              and
              <a href="#">
                <span className="text-blue-500 hover:underline">privacy policy</span>
              </a>
            </p>
            <p className="mt-[1rem] text-xs lg:text-sm flex items-center justify-center gap-3">
              Already have an account?
              <span className="text-red-500 cursor-pointer hover:underline">
                <a href="./login.html">Log in</a>
              </span>
            </p>
          </div>
        </form>
      </div>
      {/* Right Column (image) */}
      <div
        className="flex-1 bg-cover bg-center hidden lg:block"
        style={{ backgroundImage: 'url("https://euvola.sirv.com/Images/Multiethnic%20leaders%20greeting%20each%20other%20in%20city.png")' }}
      ></div>
    </main>
  );
};
