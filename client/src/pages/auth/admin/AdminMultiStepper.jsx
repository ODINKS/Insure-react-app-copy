import React, { createContext, useContext, useState, useEffect } from "react";
import { AdminRegistration } from "./AdminRegistration";
import { AdminRegContact } from "./AdminRegContact";
import { AdminRegSetup } from "./AdminRegSetup";
import { AdminRegTeamInvite } from "./AdminRegTeamInvite";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
const KeyContext = createContext();

export const AdminMultiStepper = () => {
  const [formStep, setFormStep] = useState(1);
  const [formData, setFormData] = useState({
    companyName: "",
    teamCapacity: "",
    license: "",
    phoneNumber: "",
    companyAddress: "",
    email: "",
    password: "",
    role: "company",
  });
  const [key, setKey] = useState("");

  const navigate = useNavigate()
  const baseURL= process.env.REACT_APP_BASE_URL
  const registrationURL= `${baseURL}/auth/register?type=company`
  

  const postData = async (data) => {
    try {
      const updatedFormData = { ...formData, ...data };
      setFormData(updatedFormData);
      const response = await axios.post(registrationURL, updatedFormData);
  
      if (response.data.status) {
        await Swal.fire({
          title: 'Success!',
          text: 'A confirmation email has been sent to you. Click okay to continue.',
          icon: 'success',
          confirmButtonText: 'OK',
        });
  
        setKey(formData);
        // Pass formData as state to the /auth/otp route
        navigate('/auth/otp', { state: { formData: updatedFormData } });
      }
    } catch (error) {
      await Swal.fire({
        title: 'Error!',
        text: 'Registration failed!!!!!',
        icon: 'error',
        confirmButtonText: 'OK',
      });
      console.log('Error making POST request:', error);
    }
  };
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
