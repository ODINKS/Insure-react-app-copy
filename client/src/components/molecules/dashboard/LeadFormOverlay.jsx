import axios from "axios";
import Swal from "sweetalert2";
import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation } from 'react-router-dom';
// import { useAuth } from "../../auth/Authentication/AuthContext";

const LeadFormOverlay = ({ onClose }) => {
  const [leadData, setLeadData] = useState({
    firstName: "",
    lastName: "",
    middleName: "",
    email: "",
    gender: "",
    Address: "",
    phoneNumber: "",
    status: "new",
    policyNumber: "",
    totalAmountPaid: "",
    role: "leads",
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const location = useLocation();
  const formData = location.state?.formData || {};

  console.log(formData, "formData on agentLeads")


  const baseURL = process.env.REACT_APP_BASE_URL;
  // const registrationURL = `${baseURL}/agent/lead/${}`;

  const onSubmit = async (data, e) => {
    await axios.post;

    // Clear the form data
    e.target.reset();

    // Close the form
    // onClose();
  };

  return (
    // <div className="bg-[--black-bg] opacity-50 w-full h-full fixed top-0 left-0 z-10 ">
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-10">
      <div className="max-w-md mx-auto mt-8 p-8 border rounded shadow-lg bg-white">
        <form onSubmit={(e) => handleSubmit(onSubmit)(e)}>
          {/* First Name */}

          <div className="mb-4">
            <label
              className="block text-[--orange-bg] font-medium mb-2"
              htmlFor="Fname"
            >
              First Name
            </label>
            <input
              className="appearance-none border border-[--form-border-bg] rounded w-full py-2 px-3 text-[--black-text] leading-tight focus:outline-none focus:border-[--orange-hover]"
              id="Fname"
              value={leadData.firstName}
              onChange={(e) => {
                setLeadData({ ...leadData, firstName: e.target.value });
              }}
              type="text"
              name="Fname"
              placeholder="John"
              {...register("Fname", {
                required: "this field is required ",
              })}
            />

            <p className="text-red-500 text-sm italic">
              {errors.Fname?.message}
            </p>
          </div>

          {/* Middle Name */}

          <div className="mb-4">
            <label
              className="block text-[--orange-bg] font-medium mb-2"
              htmlFor="Mname"
            >
              Middle Name
            </label>
            <input
              className="appearance-none border border-[--form-border-bg] rounded w-full py-2 px-3 text-[--black-text] leading-tight focus:outline-none focus:border-[--orange-hover]"
              id="Mname"
              value={leadData.middleName}
              onChange={(e) => {
                setLeadData({ ...leadData, middleName: e.target.value });
              }}
              type="text"
              name="Mname"
              placeholder="Timothy"
              {...register("Mname", {
                required: "this field is required ",
              })}
            />

            <p className="text-red-500 text-sm italic">
              {errors.Mname?.message}
            </p>
          </div>

          {/* Last Name */}

          <div className="mb-4">
            <label
              className="block text-[--orange-bg] font-medium mb-2"
              htmlFor="Lname"
            >
              Last Name
            </label>
            <input
              className="appearance-none border border-[--form-border-bg] rounded w-full py-2 px-3 text-[--black-text] leading-tight focus:outline-none focus:border-[--orange-hover]"
              id="Lname"
              value={leadData.lastName}
              onChange={(e) => {
                setLeadData({ ...leadData, lastName: e.target.value });
              }}
              type="text"
              name="Lname"
              placeholder="Doe"
              {...register("Lname", {
                required: "this field is required ",
              })}
            />

            <p className="text-red-500 text-sm italic">
              {errors.Lname?.message}
            </p>
          </div>

          {/* Email */}
          <div className="mb-4">
            <label
              className="block text-[--orange-bg] font-medium mb-2"
              htmlFor="mail"
            >
              Email
            </label>
            <input
              className="appearance-none border border-[--form-border-bg] rounded w-full py-2 px-3 text-[--black-text] leading-tight focus:outline-none focus:border-[--orange-hover]"
              id="mail"
              value={leadData.email}
              onChange={(e) => {
                setLeadData({ ...leadData, email: e.target.value });
              }}
              type="email"
              name="mail"
              placeholder="johndoetim@email.com"
              {...register("mail", {
                required: "this field cannot be empty ",
              })}
            />

            <p className="text-red-500 text-sm italic">
              {errors.mail?.message}
            </p>
          </div>

          {/* Gender */}
          <div className="mb-4">
            <label
              className="block text-[--orange-bg] font-medium mb-2"
              htmlFor="sex"
            >
              Gender
            </label>
            <input
              className="appearance-none border border-[--form-border-bg] rounded w-full py-2 px-3 text-[--black-text] leading-tight focus:outline-none focus:border-[--orange-hover]"
              id="sex"
              value={leadData.gender}
              onChange={(e) => {
                setLeadData({ ...leadData, gender: e.target.value });
              }}
              type="text"
              name="sex"
              placeholder="male/female"
              {...register("sex", {
                required: "this field cannot be empty ",
              })}
            />

            <p className="text-red-500 text-sm italic">{errors.sex?.message}</p>
          </div>

          {/* Address */}
          <div className="mb-4">
            <label
              className="block text-[--orange-bg] font-medium mb-2"
              htmlFor="location"
            >
              Address
            </label>
            <input
              className="appearance-none border border-[--form-border-bg] rounded w-full py-2 px-3 text-[--black-text] leading-tight focus:outline-none focus:border-[--orange-hover]"
              id="location"
              value={leadData.Address}
              onChange={(e) => {
                setLeadData({ ...leadData, Address: e.target.value });
              }}
              type="text"
              name="location"
              placeholder="No.12 lekki phase 1 Lagos, Nigeria"
              {...register("location", {
                required: "this field cannot be empty ",
              })}
            />

            <p className="text-red-500 text-sm italic">
              {errors.location?.message}
            </p>
          </div>

          {/* Phone Number */}
          <div className="mb-4">
            <label
              className="block text-[--orange-bg] font-medium mb-2"
              htmlFor="phone"
            >
              Phone Number
            </label>
            <input
              className="appearance-none border border-[--form-border-bg] rounded w-full py-2 px-3 text-[--black-text] leading-tight focus:outline-none focus:border-[--orange-hover]"
              id="phone"
              value={leadData.phoneNumber}
              onChange={(e) => {
                setLeadData({ ...leadData, phoneNumber: e.target.value });
              }}
              type="tel"
              name="phone"
              placeholder="+234-123-234-1234"
              {...register("phone", {
                required: "this field cannot be empty ",
              })}
            />

            <p className="text-red-500 text-sm italic">
              {errors.phone?.message}
            </p>
          </div>

          {/* Policy Number */}
          <div className="mb-4">
            <label
              className="block text-[--orange-bg] font-medium mb-2"
              htmlFor="policy"
            >
              Policy Number
            </label>
            <input
              className="appearance-none border border-[--form-border-bg] rounded w-full py-2 px-3 text-[--black-text] leading-tight focus:outline-none focus:border-[--orange-hover]"
              id="policy"
              value={leadData.policyNumber}
              onChange={(e) => {
                setLeadData({ ...leadData, policyNumber: e.target.value });
              }}
              type="text"
              name="policy"
              placeholder="xxx-xxx-xx"
              {...register("policy", {
                required: "this field cannot be empty ",
              })}
            />

            <p className="text-red-500 text-sm italic">
              {errors.policy?.message}
            </p>
          </div>

          {/* Total Amount Paid */}
          <div className="mb-4">
            <label
              className="block text-[--orange-bg] font-medium mb-2"
              htmlFor="AmountPaid"
            >
              Amount Paid
            </label>
            <input
              className="appearance-none border border-[--form-border-bg] rounded w-full py-2 px-3 text-[--black-text] leading-tight focus:outline-none focus:border-[--orange-hover]"
              id="AmountPaid"
              value={leadData.AmountPaid}
              onChange={(e) => {
                setLeadData({ ...leadData, AmountPaid: e.target.value });
              }}
              type="text"
              name="AmountPaid"
              placeholder=""
              {...register("AmountPaid", {
                required: "this field cannot be empty ",
              })}
            />

            <p className="text-red-500 text-sm italic">
              {errors.AmountPaid?.message}
            </p>
          </div>

          <div className="flex space-x-3">
            <input
              className="bg-[--orange-bg] hover:bg-[--orange-hover] text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer"
              type="submit"
              value="submit"
            />
            <input
              className="bg-[--orange-bg] hover:bg-[--orange-hover] text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer"
              type="submit"
              value="close"
              onClick={onClose}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default LeadFormOverlay;
