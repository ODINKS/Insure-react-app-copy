import React, { useState } from 'react';

export const AdminRegContact = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [selectedPlan, setSelectedPlan] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState('');

  const validatePhoneNumber = () => {
    const phoneRegex = /^\+234\d{10}$/;
    if (!phoneNumber.match(phoneRegex)) {
      setPhoneNumberError('Please enter a valid Nigerian phone number (+234xxxxxxxxxx)');
    } else {
      setPhoneNumberError('');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    validatePhoneNumber();

  };

  return (
    <main className="flex flex-col lg:flex-row lg:w-full">
      {/* Left Column */}
      <div className="sm:px-20 lg:w-[50%] h-screen flex flex-col px-8">
        {/* Logo */}
        <a href="index.html">
          <img
            src="https://tinyurl.com/3wuh45ve"
            alt="logo"
            className="mb-2 w-16 h-12 lg:w-24 lg:h-14"
          />
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
        <form name="signUpData" onSubmit={handleSubmit} className="flex flex-col w-full">
          {/* Phone number */}
          <input
            type="text"
            id="number"
            name="phonenumber"
            value={phoneNumber}
            maxLength={14}
            onChange={(e) => setPhoneNumber(e.target.value)}
            onBlur={validatePhoneNumber}
            placeholder="Company's phone number"
            className={`w-full h-[40px] px-3 py-2 border border-gray-900 rounded-md mb-4 focus:border-blue-500 ${
              phoneNumberError ? 'border-red-500' : ''
            }`}
          />
          {phoneNumberError && (
            <p className="text-red-500 text-sm">{phoneNumberError}</p>
          )}

          {/* Address */}
          <input
            type="text"
            name="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Company's address"
            className="w-full h-[40px] px-3 py-2 border border-gray-900 rounded-md mb-4 focus:border-blue-500"
          />

          {/* Plan selection */}
          <select
            value={selectedPlan}
            onChange={(e) => setSelectedPlan(e.target.value)}
            className="w-full h-[40px] px-3 py-2 border border-gray-900 rounded-md mb-4 text-xs lg:text-sm text-gray-400 focus:border-blue-500"
          >
            <option value="">Pick a plan</option>
            <option value="Standard">Standard</option>
            <option value="Premium">Premium</option>
            <option value="Gold">Gold</option>
          </select>

          {/* Continue button */}
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
        style={{
          backgroundImage:
            'url("https://euvola.sirv.com/Images/Multiethnic%20leaders%20greeting%20each%20other%20in%20city.png")',
        }}
      ></div>
    </main>
  );
};