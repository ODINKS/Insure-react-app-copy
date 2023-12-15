import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AgentRegistration } from "./AgentRegistration";
import AgentBioData from "./AgentBioData";

const AgentMultiStepper = () => {
  const [formStep, setFormStep] = useState(1);
  const [agentFormData, setAgentFormData] = useState({
    firstName: "",
    lastName: "",
    middleName: "",
    gender: "",
    email: "",
    phoneNumber: "",
    password: "",
    role: "agent",
  });

  const navigate = useNavigate();
  const baseURL = process.env.REACT_APP_BASE_URL;
  const agentRegURL = `${baseURL}/auth/Register?type=agent`;

  const handlePrev = () => {
    setFormStep((prevStep) => prevStep - 1);
  };

  const handleNext = (data) => {
    setAgentFormData((prevData) => ({ ...prevData, ...data }));
    setFormStep((prevStep) => prevStep + 1);
  };

  const renderStepComponent = () => {
    switch (formStep) {
      case 1:
        return <AgentRegistration onNext={handleNext} />;
      case 2:
        return <AgentBioData onNext={handleNext} onPrev={handlePrev} />;
      // case 3:
      //   return <AdminRegSetup onNext={postData} onPrev={handlePrev} />;
      default:
        return null;
    }
  };

  return <div>{renderStepComponent()}</div>;
};

export default AgentMultiStepper;
