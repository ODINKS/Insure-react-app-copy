import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'

export const AdminRegTeamInvite = ({ onPrev }) => {
  const [email1, setEmail1] = useState('');
  const [email2, setEmail2] = useState('');
  const [email3, setEmail3] = useState('');
  const [emailError, setEmailError] = useState('');

  const navigate=useNavigate()
  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate that no two email addresses are the same
    if (email1 === email2 || email1 === email3 || email2 === email3) {
      setEmailError('Each Email address must be unique.')
      return false;
    } else {
      // Clear any previous error
      setEmailError('');
    }
    if(emailError){
        // Navigate to the next page

        // setTimeout(() => {
          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 8000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            }
          });
          Toast.fire({
            icon: "success",
            title: "Signed in successfully"
          });
          navigate('/dashboard/admin');
        // }, 1000);
      
    }
  };
  const handleBack =()=>{
    //navigate('/auth/admin/registration/setup')
    onPrev()
  }

  return (
    <main className="flex flex-col lg:flex-row lg:w-full">
      {/* Left Column */}
      <div className="lg:w-[50%] h-screen flex flex-col px-20 pt-3">
        {/* Logo */}
        <a href="index.html">
          <img
            src="https://tinyurl.com/3wuh45ve"
            alt="logo"
            className="mb-2 w-16 h-12 lg:w-24 lg:h-14"
          />
        </a>
        {/* Header Section */}
        <div className="mb-14 text-left">
          <div className="flex justify-between items-center">
            <h1 className="font-bold mb-4 text-xl lg:text-4xl">
              Invite <span className="text-red-500">agents</span>
            </h1>
            <a href="/">Skip for later</a>
          </div>
          <button
            type="button"
            className="sm:w-full lg:w-[30%] h-[40px] bg-orange-600 text-white py-2 px-1 rounded-md hover:bg-orange-400 mb-2"
          >
            + Add another
          </button>
        </div>
        {/* Form Area */}
        <form name="signUpData" className="flex flex-col w-full">
          {/* Email input fields */}
          <input
            type="email"
            name="email1"
            value={email1}
            onChange={(e) => setEmail1(e.target.value)}
            placeholder="Add email address"
            className={`w-full h-[40px] px-3 py-2 border border-gray-900 rounded-md mb-4 focus:border-blue-500 ${
              emailError ? 'border-red-500' : ''
            }`}
          />

          <input
            type="email"
            name="email2"
            value={email2}
            onChange={(e) => setEmail2(e.target.value)}
            placeholder="Add email address"
            className={`w-full h-[40px] px-3 py-2 border border-gray-900 rounded-md mb-4 focus:border-blue-500 ${
              emailError ? 'border-red-500' : ''
            }`}
          />

          <input
            type="email"
            name="email3"
            value={email3}
            onChange={(e) => setEmail3(e.target.value)}
            placeholder="Add email address"
            className={`w-full h-[40px] px-3 py-2 border border-gray-900 rounded-md mb-16 focus:border-blue-500 ${
              emailError ? 'border-red-500' : ''
            }`}
          />

          {emailError && <p className="text-red-500 text-sm">{emailError}</p>}

          {/* Back and Proceed buttons */}
          <div className="flex justify-between flex-col lg:flex-row w-full mt-6">
            <button
            onClick={handleBack}
              type="button"
              className="w-full lg:w-[25%] h-[40px] bg-white text-gray-500 font-bold border-2 border-orange-400 py-2 px-4 rounded-md hover:bg-orange-400 hover:text-white mb-2"
            >
              Back
            </button>
            <button
            onClick={handleSubmit}
              type="button"
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
        style={{
          backgroundImage:
            'url("https://euvola.sirv.com/Images/Multiethnic%20leaders%20greeting%20each%20other%20in%20city.png")',
        }}
      ></div>
    </main>
  );
};
