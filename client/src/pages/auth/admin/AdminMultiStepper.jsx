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
    businessType: "",
    teamCapacity: "",
    companyLicense: "",
    phoneNumber: "",
    address: "",
    email: "",
    password: "",
  });

  const baseURL= "https://insure-8vvy.onrender.com/v1/docs/#/Auth/post_auth_register"
  const handleNext = (data) => {
    setFormData((prevData) => ({ ...prevData, ...data }));
    setFormStep((prevStep) => prevStep + 1);
  };
  useEffect(() => {
    console.log(formData);
  }, [formData]);

  useEffect(() =>{
    const postData = async () => {
      const response = await axios.post(baseURL, formData)
      console.log(response.data)
    }
  }, []) 

  
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
        return <AdminRegSetup onClick={handleNext} onPrev={handlePrev} />;
      case 4:
        return <AdminRegTeamInvite onNext={handleNext} onPrev={handlePrev} />;
      default:
        return null;
    }
  };

  return <>{renderStepComponent()}</>;
};
