import React from 'react';

export const RegContact = () => {
  return (
    <main className="flex flex-col lg:flex-row lg:w-full">
      {/* Left Column */}
      <div className="sm:px-20 lg:w-[50%] h-screen flex flex-col px-8">
        {/* Logo */}
        <a href="index.html">
          <img src="./assets/Insure/INsure.png" alt="logo" className="mb-2 w-16 h-12 lg:w-24 lg:h-14" />
        </a>
        {/* Header Section */}
        <div className="">
          <h1 className="font-bold mb-4 text-2xl lg:text-4xl">
            Contact <span className="text-red-500">details</span>
          </h1>
          <p className="pb-4 text-xs lg:text-base">
            Get started - <span className="text-red-500">7</span> days free trial
          </p>
        </div>
        {/* Form Area */}
        <form name="signUpData" 
        // onSubmit={(event) => signUP(event)} 
        className="flex flex-col w-full">
          
          <input
            type="number"
            id="name"
            name="phonenumber"
            placeholder="Company's phone number"
            className="w-full h-[40px] px-3 py-2 border border-gray-900 rounded-md mb-4 focus:border-blue-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Company's email address"
            className="w-full h-[40px] px-3 py-2 border border-gray-900 rounded-md mb-4 focus:border-blue-500"
          />
        
            <input
                type="text"
                name="address"
                placeholder="Company's address"
                className="w-full h-[40px] px-3 py-2 border border-gray-900 rounded-md mb-4 focus:border-blue-500"
            />

          <select className="w-full h-[40px] px-3 py-2 border border-gray-900 rounded-md mb-4 text-xs lg:text-sm text-gray-400">
            <option>Pick a plan</option>
            <option>Standard</option>
            <option>Premium</option>
            <option>Gold</option>
           
          </select>
        
          <button
            type="submit"
            className="w-full h-[40px] bg-orange-600 text-white font-bold py-2 px-4 rounded-md hover:bg-orange-400 mt-8"
            id="register-button"
          >
            Continue
          </button>
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
