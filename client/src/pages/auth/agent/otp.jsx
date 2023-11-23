import React from 'react'

export const Otp = () => {
  return (
    <main className="flex flex-col lg:flex-row lg:w-full">
    {/* Left Column */}
     <div
      className="flex-1 bg-cover bg-center hidden lg:block"
      style={{ backgroundImage: 'url("https://tinyurl.com/bdzfvt2y")' }}
    ></div>
    
    {/* Right Column (image) */}
<div className="sm:px-20 lg:w-[50%] h-screen flex flex-col px-8">
      {/* Logo */}
      <a href="index.html">
        <img src="https://tinyurl.com/3wuh45ve" alt="logo" className="mb-8 w-16 h-12 mt-20 lg:w-24 lg:h-14" />
      </a>
      {/* Header Section */}
      <div className="mb-12">
        <h1 className="font-bold mb-2 text-2xl lg:text-4xl">
          Enter <span className="text-red-500"> OTP</span> 
        </h1>
        <div className='text-sm'>Enter the OTP code that we sent to your email gt***@gmail.com. <br /> Be careful not to share code with anyone.</div>
      </div>
      {/* Form Area */}
      <form name="otp" 
      // onSubmit={(event) => signUP(event)} 
      className="flex flex-col w-full">
        {/* OTP field */}
        <div className='flex justify-around'>
        <input
          type="text"
          name="otp"
          maxLength={1}
          className="w-[60px] h-[60px] px-6 py-2 border border-gray-900 rounded-md mb-4 placeholder:text-3xl"
        />
         <input
          type="text"
          name="otp"
          maxLength={1}
          className="w-[60px] h-[60px] px-6 py-2 border border-gray-900 rounded-md mb-4"
        />
         <input
          type="text"
          name="otp"
          maxLength={1}
          className="w-[60px] h-[60px] px-6 py-2 border border-gray-900 rounded-md mb-4"
        />
         <input
          type="text"
          name="otp"
          maxLength={1}
          className="w-[60px] h-[60px] px-6 py-2 border border-gray-900 rounded-md mb-4"
        />
        <input
          type="text"
          name="otp"
          maxLength={1}
          className="w-[60px] h-[60px] px-6 py-2 border border-gray-900 rounded-md mb-4"
        />



        </div>
        {/* Proceed button */}
        <button
          type="submit"
          className="w-full h-[40px] bg-orange-600 text-white font-bold py-2 px-4 rounded-md hover:bg-orange-400 mb-8"
          id="register-button"
        >
          Confirm
        </button>
        <div>
          <a href="/"><b>Resend OTP</b></a>
        </div>
      </form>
    </div>
  </main>
  )
}
