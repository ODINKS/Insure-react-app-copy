import React, { useState, useEffect } from "react";
import { AdminRegistration } from "./AdminRegistration";
import { AdminRegContact } from "./AdminRegContact";
import { AdminRegSetup } from "./AdminRegSetup";
import { AdminRegTeamInvite } from "./AdminRegTeamInvite";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'

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
    role: "company",
  });

  const navigate = useNavigate()

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

  const baseURL= process.env.REACT_APP_BASE_URL
  const registrationURL= `${baseURL}/auth/register?type=company`
  
  // useEffect(() => {
  //   console.log(formData);
  // }, [formData]);

  const postData = async (data) => {
    try{
      const updatedFormData = { ...formData, ...data };
      const response = await axios.post(registrationURL, updatedFormData)
      if(response.data.status){
        Swal.fire({
          title: 'Success!',
          text: 'A confirmation email has been sent to you. Click okay to continue.',
          icon: 'success',
          confirmButtonText: 'OK'
        })
        navigate('/auth/otp')
      }
    }catch(error){
      console.log('Error making POST request:', error);
    }
  }

  const handleNext = (data) => {
    setFormData((prevData) => ({ ...prevData, ...data }));
    setFormStep((prevStep) => prevStep + 1);
    console.log(baseURL)
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
        return <AdminRegSetup onNext={postData} onPrev={handlePrev} />;
      case 4:
        return <AdminRegTeamInvite onNext={handleNext} onPrev={handlePrev} />;
      default:
        return null;
    }
  };

  return <>{renderStepComponent()}</>;
};
