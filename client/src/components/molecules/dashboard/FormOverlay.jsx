import React from 'react'
import { useForm } from "react-hook-form"

const FormOverlay = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    // Save the form data to local storage
    const storedData = JSON.parse(localStorage.getItem("formData")) || [];
    storedData.push(data);
    localStorage.setItem("formData", JSON.stringify(storedData));
  };
  
  return (
    <div className='bg-[--black-bg] opacity-50 w-full h-full'>
      <div className="max-w-md mx-auto mt-8 p-8 border rounded shadow-lg bg-green-100">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              className="block text-green-700 font-medium mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="appearance-none border border-green-400 rounded w-full py-2 px-3 text-green-700 leading-tight focus:outline-none focus:border-green-500"
              id="name"
              type="text"
              name="name"
              placeholder="John Doe"
              {...register("name", { required: "this field is required " })}
            />

            <p className="text-red-500 text-sm italic">{errors.name?.message}</p>
          </div>

          {/* field for email */}

          <div className="mb-4">
            <label
              className="block text-green-700 font-medium mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="appearance-none border border-green-400 rounded w-full py-2 px-3 text-green-700 leading-tight focus:outline-none focus:border-green-500"
              id="email"
              type="email"
              name="email"
              placeholder="John@johnmail.com"
              {...register(
                "email",
                { required: "enter a valid email address" },
                { pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i }
              )}
            />

            <p className="text-red-500 text-sm italic">{errors.email?.message}</p>
          </div>

          {/* contact address */}
          <div className="mb-4">
            <label
              className="block text-green-700 font-medium mb-2"
              htmlFor="phone_mo"
            >
              Name
            </label>
            <input
              className="appearance-none border border-green-400 rounded w-full py-2 px-3 text-green-700 leading-tight focus:outline-none focus:border-green-500"
              id="phone_no"
              type="text"
              name="phone_no"
              placeholder="000 000 000 00"
              {...register("phone_no", {
                required: "this field cannot be empty ",
                maxLength: 13,
              })}
            />

            <p className="text-red-500 text-sm italic">
              {errors.phone_no?.message}
            </p>
          </div>

          {/* Address */}
          <div className="mb-4">
            <label
              className="block text-green-700 font-medium mb-2"
              htmlFor="address"
            >
              Address
            </label>
            <input
              className="appearance-none border border-green-400 rounded w-full py-2 px-3 text-green-700 leading-tight focus:outline-none focus:border-green-500"
              id="address"
              type="text"
              name="address"
              placeholder="23tw naira land street"
              {...register("address", {
                required: "this field cannot be empty ",
              })}
            />

            <p className="text-red-500 text-sm italic">
              {errors.address?.message}
            </p>
          </div>

          <input
            className="bg-green-500 hover:bg-green-700 text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            value="submit"
          />
        </form>

      </div>
    </div>
  )
}

export default FormOverlay
