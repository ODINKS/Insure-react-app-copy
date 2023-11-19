import React from 'react';

export const RegAccount = () => {
  return (
    <main className="flex flex-col lg:flex-row lg:w-full">
      {/* Left Column */}
      <div className="mx-auto lg:w-[50%] h-screen flex flex-col justify-center items-center p-6">
        {/* Logo */}
        <a href="index.html">
          <img src="./assets/Insure/INsure.png" alt="logo" className="mb-2 w-16 h-12 lg:w-24 lg:h-14" />
        </a>
        {/* Header Section */}
        <div className="text-center">
          <h1 className="font-bold mb-4 text-2xl lg:text-4xl">
            Account <span className="text-red-500">setup</span> 
          </h1>
          
        </div>
        {/* Form Area */}
        <form name="signUpData" 
        // onSubmit={(event) => signUP(event)} 
        className="flex flex-col w-full">
         
          <input
            type="email"
            id="email"
            name="naemailme"
            placeholder="Company's email"
            className="w-full h-[40px] px-3 py-2 border border-gray-900 rounded-md mb-4"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full h-[40px] px-3 py-2 border border-gray-900 rounded-md mb-4"
          />
          
          
          <input
            type="password"
            name="password"
            placeholder="Confirm password"
            className="w-full h-[40px] px-3 py-2 border border-gray-900 rounded-md mb-4"
          />
          {/* back and continue  button */}
          <div className="flex justify-between flex-col lg:flex-row w-full mt-6">
            <button
          type="button"
          className="w-full lg:w-[25%] h-[40px] bg-orange-600 text-white font-bold py-2 px-4 rounded-md hover:bg-orange-400 mb-8"
        >
          Back
        </button>
        <button
          type="submit"
          className="w-full lg:w-[25%] h-[40px] bg-orange-600 text-white font-bold py-2 px-4 rounded-md hover:bg-orange-400 mb-8"
        >
          Continue
        </button>
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
