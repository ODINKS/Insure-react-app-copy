import React, { useState, useEffect } from "react";
import { AdminRegistration } from "./AdminRegistration";
import { AdminRegContact } from "./AdminRegContact";
import { AdminRegSetup } from "./AdminRegSetup";
import { AdminRegTeamInvite } from "./AdminRegTeamInvite";
import axios from 'axios';

export const AdminMultiStepper = () => {
  const [formStep, setFormStep] = useState(1);
  const [formData, setFormData] = useState({
    // Initialize with empty values or default values
    companyName: "",
    teamCapacity: "",
    license: "",
    phoneNumber: "",
    companyAddress: "",
    email: "",
    password: "",
    role: "",
  });

    // {
  //   "companyName": "insure",
  //   "companyAddress": "Abuja",
  //   "license": "cac3458ht",
  //   "teamCapacity": 15,
  //   "email": "insure@gmail.com",
  //   "password": "Password1@",
  //   "phoneNumber": "Password1@",
  //   "role": "Admin"
  // }

  const baseURL= "https://insure-8vvy.onrender.com/v1/docs/#/Auth/post_auth_register"
  const handleNext = (data) => {
    setFormData((prevData) => ({ ...prevData, ...data }));
    setFormStep((prevStep) => prevStep + 1);
  };
  useEffect(() => {
    console.log(formData);
  }, [formData]);

  // const postData = async () => {
  //   try{
  //     const response = await axios.post(baseURL, JSON.stringify(formData))
  //     console.log(response)
  //   }catch(error){
  //     console.log('Error making POST request:', error);
  //   }
  // }

  const handlePostRequest = async () => {
    try {
      const response = await fetch('https://insure-8vvy.onrender.com/v1/docs/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Add any other headers you need, such as authentication tokens
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const responseData = await response.json();
      console.log('Response Data:', responseData);
    } catch (error) {
      console.error('Error making POST request:', error);
    }
  };

  
  const handlePrev = () => {
    setFormStep((prevStep) => prevStep - 1);
  };

  const renderStepComponent = () => {
    switch (formStep) {
      case 1:
        return <AdminRegistration onNext={handleNext} />;
      case 2:
        return <AdminRegContact onNext={handleNext} onPrev={handlePrev} />;
      case 3:
        return <AdminRegSetup onClick={handlePostRequest} onPrev={handlePrev} />;
      case 4:
        return <AdminRegTeamInvite onNext={handleNext} onPrev={handlePrev} />;
      default:
        return null;
    }
  };

  return <>{renderStepComponent()}</>;
};
