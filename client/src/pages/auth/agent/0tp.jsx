import React, { useState } from "react";

export const Otp = () => {
  const [otpValues, setOtpValues] = useState(["", "", "", "", ""]);
  const [error, setError] = useState("");

  const handleInputChange = (index, value) => {
    // Validate numeric input
    // if (!/^\d*$/.test(value)) {
    //   setError('Please enter numeric values only.');
    //   return;
    // }

    // Update the OTP values
    const newOtpValues = [...otpValues];
    newOtpValues[index] = value;
    setOtpValues(newOtpValues);
    setError("");
  };

  // function moveToNextOrPreviousInput(
  //   currentInput,
  //   nextInputId,
  //   previousInputId
  // ) {
  //   if (currentInput.value.length === 1) {
  //     const nextInput = document.getElementById(nextInputId);
  //     if (nextInput) {
  //       nextInput.focus();
  //     }
  //   } else if (currentInput.value.length === 0) {
  //     const previousInput = document.getElementById(previousInputId);
  //     if (previousInput) {
  //       previousInput.focus();
  //     }
  //   }
  // }

  function moveToNextOrPreviousInput(
    currentInput,
    nextInputId,
    previousInputId
  ) {
    if (currentInput.value.length === 1) {
      const nextInput = document.getElementById(nextInputId);
      if (nextInput) {
        nextInput.focus();
      } else {
        // If this is the last input, focus on the submit button
        document.getElementById("register-button").focus();
      }
    } else if (currentInput.value.length === 0) {
      const previousInput = document.getElementById(previousInputId);
      if (previousInput) {
        previousInput.focus();
      }
    }
  }

  function moveToPreviousInput(currentInput, previousInputId) {
    if (currentInput.value.length === 0) {
      const previousInput = document.getElementById(previousInputId);
      if (previousInput) {
        previousInput.focus();
      }
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate if all OTP fields are filled
    if (otpValues.some((value) => value === "")) {
      setError("Please fill in all the OTP fields.");
      return;
    }

    // Proceed with OTP validation logic or submission
    // Example: call your authentication API or perform other OTP validation logic
  };

  return (
    <main className="flex flex-col lg:flex-row lg:w-full">
      {/* Left Column */}
      <div
        className="flex-1 bg-cover bg-center hidden lg:block"
        style={{ backgroundImage: 'url("https://tinyurl.com/bdzfvt2y")' }}
      ></div>

      {/* Right Column (image) */}
      <div className="sm:px-20 lg:w-[50%] h-screen flex flex-col px-8">
        {/* Logo */}
        <a href="index.html">
          <img
            src="https://tinyurl.com/3wuh45ve"
            alt="logo"
            className="mb-8 w-16 h-12 mt-20 lg:w-24 lg:h-14"
          />
        </a>
        {/* Header Section */}
        <div className="mb-12">
          <h1 className="font-bold mb-2 text-2xl lg:text-4xl">
            Enter <span className="text-red-500"> OTP</span>
          </h1>
          <div className="text-sm">
            Enter the OTP code that we sent to your email gt***@gmail.com.
            <br /> Be careful not to share the code with anyone.
          </div>
        </div>
        {/* Form Area */}
        <form
          name="otp"
          onSubmit={handleSubmit}
          className="flex flex-col w-full"
        >
          {/* OTP fields */}
          <div className="flex justify-around">
            {otpValues.map((value, index) => (
              <input
                key={index}
                onInput={(e) => {
                  handleInputChange(index, e.target.value);
                  moveToNextOrPreviousInput(
                    e.target,
                    `${index + 1}`,
                    `${index}`
                  );
                }}
                onKeyDown={(e) => {
                  if (e.key === "Backspace" && e.target.value.length === 0) {
                    moveToNextOrPreviousInput(
                      e.target,
                      `${index}`,
                      `${index - 1}`
                    );
                  }
                }}
                id={index}
                type="text"
                name="otp"
                maxLength={1}
                value={value}
                onChange={(e) => handleInputChange(index, e.target.value)}
                className="w-[60px] h-[60px] px-6 py-2 border border-gray-900 rounded-md mb-4 focus:border-blue-500"
              />
            ))}
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}

          {/* Proceed button */}
          <button
            type="submit"
            className="w-full h-[40px] bg-orange-600 text-white font-bold py-2 px-4 rounded-md hover:bg-orange-400 mb-8"
            id="register-button"
          >
            Confirm
          </button>
          <div>
            <a href="/">
              <b>Resend OTP</b>
            </a>
          </div>
        </form>
      </div>
    </main>
  );
};
