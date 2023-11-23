import React from 'react'

export const Login = () => {
  return (
    <main className="flex flex-col lg:flex-row lg:w-full">
    {/* Left Column */}
     <div
      className="flex-1 bg-cover bg-center hidden lg:block"
      style={{ backgroundImage: 'url("https://tinyurl.com/29p8xwx3")' }}
    ></div>
    
    {/* Right Column (image) */}
<div className="sm:px-20 lg:w-[50%] h-screen flex flex-col px-8">
      {/* Logo */}
      <a href="index.html">
        <img src="https://tinyurl.com/3wuh45ve" alt="logo" className="mb-2 w-16 h-12 mt-20 lg:w-24 lg:h-14" />
      </a>
      {/* Header Section */}
      <div className="mb-12">
        <h1 className="font-bold mb-4 text-2xl lg:text-4xl">
          Welcome <span className="text-red-500"> Back </span> Agent
        </h1>
        
      </div>
      {/* Form Area */}
      <form name="Login" 
      // onSubmit={(event) => signUP(event)} 
      className="flex flex-col w-full">
        {/* agent email */}
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter email address"
          className="w-full h-[40px] px-3 py-2 border border-gray-900 rounded-md mb-4"
        />

<input
          type="password"
          name="password"
          placeholder="Enter password"
          className="w-full h-[40px] px-3 py-2 border border-gray-900 rounded-md mb-4"
        />
        
        {/* Proceed button */}
        <button
          type="submit"
          className="w-full h-[40px] bg-orange-600 text-white font-bold py-2 px-4 rounded-md hover:bg-orange-400 mb-8"
          id="register-button"
        >
          Confirm
        </button>
        <div>
          <a href="/"><b>Forget Password?</b></a>
        </div>
      </form>
    </div>
  </main>
  )
}
