import React, { useState } from "react";

const AgentBioData = ({onNext, onPrev}) => {
  const [formData, setFormData] = useState({
    firstname: "",
    middlename: "",
    lastname: "",
    gender: "",
    phoneNumber: "",
  });

  const [errors, setErrors] = useState({
    firstname: "",
    lastname: "",
    gender: "",
    phoneNumber: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    // First name
    if (formData.firstname.trim() === "") {
      newErrors.firstname = "First name cannot be empty";
    } else {
      newErrors.firstname = "";
    }

    //  Middle name
    if (formData.middlename.trim() === "") {
      newErrors.middlename = "Middle name cannot be empty";
    } else {
      newErrors.middlename = "";
    }

    // Last name
    if (formData.lastname.trim() === "") {
      newErrors.lastname = "Last name cannot be empty";
    } else {
      newErrors.lastname = "";
    }

    // Validate gender
    if (formData.gender === "") {
      newErrors.gender = "Please select a gender";
    } else {
      newErrors.gender = "";
    }

    // Validate role
    if (formData.phoneNumber.trim() === "") {
      newErrors.phoneNumber = "Phone Number cannot be empty";
    } else {
      newErrors.phoneNumber = "";
    }

    setErrors(newErrors);

    // Check if there are no errors
    return Object.values(newErrors).every((error) => error === "");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate the form
    const isValid = validateForm();

    // If the form is valid, proceed with the submission
    if (isValid) {
      // Perform the rest of your form submission logic here
      onNext({
        firstName: formData.firstName,
        middlename: formData.middlename,
        lastname: formData.lastname, 
        gender: formData.gender,
        phoneNumber: formData.phoneNumber,
      })
    }
  };

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
          <img
            src="https://tinyurl.com/3wuh45ve"
            alt="logo"
            className="mb-8 w-16 mt-20 h-20 lg:w-24 lg:h-14"
          />
        </a>
        {/* Header Section */}
        <div className="mb-2">
          <h1 className="font-bold mb-4 text-2xl lg:text-4xl">
            Setup <span className="text-red-500">Your</span> Account
          </h1>
        </div>
        {/* Form Area */}
        <form
          name="BioData"
          className="flex flex-col w-full"
          onSubmit={handleSubmit}
        >
          {/* First Name */}
          <div className="mb-3">
            <input
              type="text"
              id="firstname"
              name="firstname"
              placeholder="First Name"
              className="w-full h-10 px-3 py-2 border border-gray-900 rounded-md mb-1 focus:border-blue-500"
              value={formData.firstname}
              onChange={handleInputChange}
            />
            {errors.firstname && (
              <p className="text-red-500" style={{ fontSize: "0.8rem" }}>
                {errors.firstname}
              </p>
            )}
          </div>

          {/* Middle Name */}
          <div className="mb-3">
            <input
              type="text"
              id="middlename"
              name="middlename"
              placeholder="Middle Name"
              className="w-full h-10 px-3 py-2 border border-gray-900 rounded-md mb-1 focus:border-blue-500"
              value={formData.middlename}
              onChange={handleInputChange}
            />
            {errors.middlename && (
              <p className="text-red-500" style={{ fontSize: "0.8rem" }}>
                {errors.middlename}
              </p>
            )}
          </div>

          {/* Last Name */}
          <div className="mb-3">
            <input
              type="text"
              id="lastname"
              name="lastname"
              placeholder="Last Name"
              className="w-full h-10 px-3 py-2 border border-gray-900 rounded-md mb-1 focus:border-blue-500"
              value={formData.lastname}
              onChange={handleInputChange}
            />
            {errors.lastname && (
              <p className="text-red-500" style={{ fontSize: "0.8rem" }}>
                {errors.lastname}
              </p>
            )}
          </div>

          {/* Phone Number */}
          <div className="mb-3">
            <input
              type="number"
              id="phonenumber"
              name="phonenumber"
              placeholder="Phone Number"
              className="w-full h-10 px-3 py-2 border border-gray-900 rounded-md mb-1 focus:border-blue-500"
              value={formData.phoneNumber}
              onChange={handleInputChange}
            />
            {errors.phoneNumber && (
              <p className="text-red-500" style={{ fontSize: "0.8rem" }}>
                {errors.phoneNumber}
              </p>
            )}
          </div>

          {/* Gender */}
          <div className="mb-3">
            <select
              id="gender"
              name="gender"
              className="w-full h-10 px-3 py-2 border border-gray-900 rounded-md mb-1 focus:border-blue-500"
              value={formData.gender}
              onChange={handleInputChange}
            >
              <option
                value=""
                disabled
                selected
                hidden
                className="text-gray-100"
              >
                Gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            {errors.gender && (
              <p className="text-red-500" style={{ fontSize: "0.8rem" }}>
                {errors.gender}
              </p>
            )}
          </div>

          {/* Proceed button */}
          <button
            type="submit"
            className="w-full h-[40px] bg-orange-600 text-white font-bold py-2 px-4 rounded-md hover:bg-orange-400 mt-4 mb-8"
            id="register-button"
          >
            Continue
          </button>
        </form>
      </div>
    </main>
  );
};

export default AgentBioData;
