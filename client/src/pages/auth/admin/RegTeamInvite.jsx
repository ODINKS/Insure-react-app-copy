import React from 'react'

export const RegTeamInvite = () => {
  return (
    <main className="flex flex-col lg:flex-row lg:w-full">
      {/* Left Column */}
      <div className="lg:w-[50%] h-screen flex flex-col px-20 pt-3">
        {/* Logo */}
        <a href="index.html">
          <img src="./assets/Insure/INsure.png" alt="logo" className="mb-2 w-16 h-12 lg:w-24 lg:h-14" />
        </a>
        {/* Header Section */}
        <div className="mb-14 text-left">
            <div className='flex justify-between items-center'>
          <h1 className="font-bold mb-4 text-xl lg:text-4xl">
            Invite <span className="text-red-500">agents</span> 
          </h1>
          <a href='/'>Skip for later</a>
    </div>
          <button
          type="submit"
          className="sm:w-full lg:w-[30%] h-[40px] bg-orange-600 text-white py-2 px-1 rounded-md hover:bg-orange-400 mb-2"
        >
          + Add another
        </button>
        </div>
        {/* Form Area */}
        <form name="signUpData" 
        // onSubmit={(event) => signUP(event)} 
        className="flex flex-col w-full">
         
          <input
            type="email"
            name="email"
            placeholder="Add email address"
            className="w-full h-[40px] px-3 py-2 border border-gray-900 rounded-md mb-4"
          />

          <input
            type="email"
            name="email2"
            placeholder="Add email address"
            className="w-full h-[40px] px-3 py-2 border border-gray-900 rounded-md mb-4"
          />
          
          
          <input
            type="email"
            name="email3"
            placeholder="Add email address"
            className="w-full h-[40px] px-3 py-2 border border-gray-900 rounded-md mb-16"
          />
          {/* back and continue  button */}
          <div className="flex justify-between flex-col lg:flex-row w-full mt-6">
            <button
          type="button"
          className="w-full lg:w-[25%] h-[40px] bg-orange-600 text-white font-bold py-2 px-4 rounded-md hover:bg-orange-400 mb-2"
        >
          Back
        </button>
        <button
          type="submit"
          className="sm:w-full lg:w-[25%] h-[40px] bg-orange-600 text-white font-bold py-2 px-4 rounded-md hover:bg-orange-400 mb-8"
        >
          Proceed
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
  )
}
