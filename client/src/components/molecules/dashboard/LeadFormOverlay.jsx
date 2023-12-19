import React from "react";
import { useForm } from "react-hook-form";

const LeadFormOverlay = ({ onClose }) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, e) => {
    console.log(data);

    // Save the form data to local storage
    // const storedData = JSON.parse(localStorage.getItem("formData")) || [];
    // storedData.push(data);
    // localStorage.setItem("formData", JSON.stringify(storedData));

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
              Date
            </label>
            <input
              className="appearance-none border border-[--form-border-bg] rounded w-full py-2 px-3 text-[--black-text] leading-tight focus:outline-none focus:border-[--orange-hover]"
              id="mail"
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
              type="text"
              name="sex"
              placeholder="male/female"
              {...register("sex", {
                required: "this field cannot be empty ",
              })}
            />

            <p className="text-red-500 text-sm italic">
              {errors.sex?.message}
            </p>
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
