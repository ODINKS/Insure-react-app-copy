import React from "react";
import Navbar from "../components/molecules/global/Navbar";
import Footer from "../components/molecules/global/Footer";
import HeroSection from "../components/molecules/global/HeroSection";

const Contact = () => {
  const title = "Stay <span className='text-orange-500'>in</span> Touch"
  const description = "At INsure, we're here to provide you with peace of mind and unparalleled service. Whether you have questions, need assistance, or want to discuss your insurance-related needs, our dedicated team is ready to assist you."
  const img = "https://tinyurl.com/48ffmsy8"
  const buttonDesc = "Get Started"
  const BtnFontSize = "text-[1.5rem]"
  // const buttonWidth = "20"

  return (
    <div className="overflow-hidden">
      <Navbar />
      {/* HERO SECTION */}
      < HeroSection title={title} description={description} img={img} buttonDesc={buttonDesc} BtnFontSize={BtnFontSize} />
      {/* {get-in-touch section} */}
      <section className="bg-white-200 py-16 text-left ml-60">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold mb-8">
            Get <span className="text-orange-500">in</span> Touch
          </h3>
          <p className="text-lg text-gray-700 mb-10 font-medium">
            It is very important for us to keep in touch with you so we <br />{" "}
            are always ready to answer any questions that interest you.
          </p>
          <div className="w-[100%] lg:w-[80%]">
            <div className="flex flex-col lg:flex-row justify-between mb-4 text-sm">
              <label htmlFor className="w-[45%]">
                First Name
                <input
                  className="block border-b border-b-black mb-4 w-[100%]  focus:outline-none py-2"
                  type="text"
                  placeholder="Effiong"
                />
              </label>
              <label htmlFor className="w-[45%]">
                Last Name
                <input
                  className="block border-b border-b-black mb-4 w-[100%] focus:outline-none py-2"
                  type="text"
                  placeholder="Adewale"
                />
              </label>
            </div>
            <div className="flex flex-col lg:flex-row justify-between mb-4">
              <label htmlFor className="w-[45%]">
                Email
                <input
                  className="block border-b border-b-black mb-4 w-[100%]  focus:outline-none py-2"
                  type="text"
                  placeholder="Hisick27@gmail.com"
                />
              </label>
              <label htmlFor className="w-[45%]">
                Phone Number
                <input
                  className="block border-b border-b-black mb-4 w-[100%] focus:outline-none py-2"
                  type="text"
                  placeholder="+234 7089345678"
                />
              </label>
            </div>
            <div className="mb-4">
              <p className="font-[700] my-4">Select Subject?</p>
              <label htmlFor className="mr-12">
                <input type="radio" /> Sales
              </label>
              <label htmlFor className="mr-12">
                <input type="radio" /> Onboarding
              </label>
              <label htmlFor className="mr-12">
                <input type="radio" /> Operations
              </label>
              <label htmlFor className="mr-12">
                <input type="radio" /> Penalties
              </label>
            </div>
            <textarea
              name
              id
              className="border-b border-b-black mb-4 font-semibold w-[100%] mt-6 focus:outline-none py-2"
              defaultValue={"Message"}
              placeholder="Write your Message"
            />
            <button className="bg-orange-500 text-white py-3 px-6 rounded-[8px] text-bold text-sm w-[40%]">
              Send Message
            </button>
          </div>
        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS SECTION */}
      <section className="bg-[#DFE7FA] py-16 text-left">
        <div className="container mx-auto ml-60">
          <h3 className="text-3xl font-bold mb-8 ">
            Frequently <span className="text-orange-500">asked</span> questions
          </h3>
          <p className="text-lg text-gray-700 mb-10 font-medium">
            It is very important for us to keep in touch with you so we <br />{" "}
            are always ready to answer any questions that interest you.
          </p>
          <div className="flex space-x-12 mb-8 text-sm">
            <button className="bg-white hover:bg-orange-500 hover:text-white text-black font-medium py-2 px-12 rounded">
              Features
            </button>
            <button className="bg-white hover:bg-orange-500 hover:text-white text-black font-medium py-2 px-12 rounded">
              Pricing
            </button>
            <button className="bg-white hover:bg-orange-500 hover:text-white text-black font-medium py-2 px-12 rounded">
              Sales
            </button>
            <button className="bg-white hover:bg-orange-500 hover:text-white text-black font-medium py-2 px-12 rounded">
              Onboarding
            </button>
          </div>
        </div>
        <div className="w-[100%] lg:w-[57%] ml-60 bg-white text-sm">
          <details>
            <summary className="font-semibold text-[1.2rem] p-4 cursor-pointer border-b border-t">
              Does the app provide real-time policy updates and alerts?
            </summary>
            <div className=" bg-white">
              <p className="leading-6 p-4">
                Yes, INsure offers real-time policy updates and alerts, ensuring
                that insurance sales professionals stay informed and responsive
                to policy changes, making it a valuable tool for effective
                insurance sales management.
              </p>
            </div>
          </details>
          <details>
            <summary className="font-semibold text-[1.2rem] p-4 border-b cursor-pointer">
              How does the app help with lead management?
            </summary>
            <div className=" bg-white">
              <p className="leading-6 p-4">
                INsure excels in lead management by offering a robust suite of
                tools, including lead capture, segmentation, and tracking
                features. This enables insurance professionals to efficiently
                capture and organize leads, making it easier to monitor and
                nurture prospective clients throughout the sales process
              </p>
            </div>
          </details>
          <details>
            <summary className="font-semibold text-[1.2rem] p-4 border-b cursor-pointer">
              What is the pricing structure for this app?
            </summary>
            <div className=" bg-white">
              <p className="leading-6 p-4">
                The pricing structure for INsure is designed to offer
                flexibility and cater to the diverse needs of insurance
                professionals and teams. For specific pricing details, including
                package options, features, and subscription plans, we recommend
                visiting our dedicated "Price" page on our website
              </p>
            </div>
          </details>
          <details>
            <summary className="font-semibold text-[1.2rem] p-4 border-b cursor-pointer">
              Is there a free trial available to test the app's features?
            </summary>
            <div className=" bg-white">
              <p className="leading-6 p-4">
                Yes, INsure offers a generous 7-day free trial that allows you
                to fully explore and test the app's features. This trial period
                gives you the opportunity to experience the capabilities and
                benefits of INsure, ensuring that it meets your needs before
                making a commitment.
              </p>
            </div>
          </details>
          <details>
            <summary className="font-semibold text-[1.2rem] p-4 border-b cursor-pointer">
              Can INsure integrate with third-party CRM systems?
            </summary>
            <div className=" bg-white">
              <p className="leading-6 p-4">
                Currently, INsure does not support integration with third-party
                CRM systems. However, we are continuously expanding our
                features, so stay tuned for potential future updates in this
                regard.
              </p>
            </div>
          </details>


        </div>

      </section>
      <Footer />

    </div>
  );
};

export default Contact;
