import React from "react";
import parse from 'html-react-parser';



const HeroSection = (props) => {
    const {title, description, img} = props
    
  return (
    <>
      <section className="flex h-[90vh] justify-center items-center flex-col">
        <div
          className="w-full h-screen bg-[#433A3A] bg-cover bg-center "
          style={{ backgroundImage: `url(${{img}})` }}
        >
          <div className="w-full h-full flex justify-start items-start backdrop-brightness-50">
            <div className="m-auto text-white lg:w-[50%] w-[90%] text-center lg:text-left lg:ml-[100px]">
              <h1 className="lg:text-[4rem] text-[2.5rem] font-[700]">
              {parse(title)}
              </h1>
              <p className="lg:text-[1.4rem] text-[1rem] my-4">
                {description}
              </p>

              
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
