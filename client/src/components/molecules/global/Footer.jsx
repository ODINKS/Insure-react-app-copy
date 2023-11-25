import React from 'react'
import Button from './Button'
import { SocialIcon } from 'react-social-icons'
import { Link } from 'react-router-dom'

const Footer = () => {
  const description = "Talk to Sales"
  const fontSize = "text-[1.5rem]"
  const width = "w-[15rem]"
  const route = "/sales"

  return (
    <>
      <footer className="w-full bg-[--white-bg] lg:relative h-[100vh]">
        <div className="bg-[--white-bg] lg:left-[12%] lg:right-[12%] lg:px-[10rem] lg:absolute lg:z-10 flex flex-col justify-center items-center py-12 m-auto">
          <h1 className="text-center mb-5 text-[2rem] font-bold">
            Welcome to your new digital HQ
          </h1>
          {/* <button className='bg-[--orange-bg] text-[--white-bg] px-16 py-3 rounded-lg text-[1.5rem]'>Talk to Sales</button> */}
          <Button
            description={description}
            width={width}
            fontSize={fontSize}
            route={route}
          />
        </div>
        <div className="bg-[--black-bg]">
          {/* Dark section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:flex lg:justify-between gap-10 pt-10 text-[--white-text] bg-[--black-bg] lg:px-12 px-12 pb-14 lg:absolute lg:top-[6rem] lg:pt-[9rem] lg:left-0 lg:right-0">
            <div className="flex flex-col justify-center items-center lg:items-start gap-5 lg:mt-10">
              <img src="https://tinyurl.com/3wuh45ve" alt="INsure Logo" />
              <p className="w-[20rem] text-left text-[1.1rem]">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit
                illo et delectus modi fugiat sed explicabo. Doloremque
                reiciendis ex, explicabo voluptate ratione.
              </p>
            </div>

            <div className="flex flex-col gap-4 items-center lg:items-start justify-start lg:mt-14">
              <h1 className="text-[1.5rem] font-bold border border-0 border-b-4 border-[--orange-bg] pb-2">
                Quick Links
              </h1>
              <ul className="flex flex-col gap-4 text-[1.1rem] list-none">
                <li className="list-none">Home</li>
                <li className="list-none">About Us</li>
                <li className="list-none">Pricing</li>
              </ul>
            </div>
            <div className="flex flex-col gap-4 items-center lg:items-start justify-start lg:mt-14">
              <h1 className="text-[1.5rem] font-bold">Quick Links</h1>
              <ul className="flex flex-col gap-4 text-[1.1rem]">
                <li>Features</li>
                <Link to="/AgentTasks">Dashboard</Link>
              </ul>
            </div>

            <div className="flex flex-col gap-5 items-center lg:items-start justify-start lg:mt-14">
              <h1 className="text-[1.5rem] font-bold">Download our App</h1>
              <p className="text-[1.1rem] w-[15rem]">
                Get access to exclusive updates and features
              </p>
              <ul className="flex gap-5 w-[20rem] text-[1.1rem] mr-10">
                <li className="border border-white px-5 rounded-lg font-thin">
                  Download on <span className="font-bold">App Store</span>
                </li>
                <li className="border border-white px-5 rounded-lg font-thin">
                  Download on <span className="font-bold">Google Play</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-[--black-bg] text-[--white-bg] lg:w-full lg:absolute lg:top-[90%]">
            <div className="border border-0 border-t-2 py-8 flex flex-col lg:flex-row lg:justify-between items-center justify-center gap-5 bg-[--black-bg] lg:mx-[3rem]">
              <p className="text-center">
                &copy; 2023. All Right Reserved. INSure Technologies. A
                Salesforce Company
              </p>
              <div className="flex gap-3 self-center">
                <span>
                  <SocialIcon url="https://x.com" />
                </span>
                <span>
                  <SocialIcon bgColor="black" url="https://instagram.com" />
                </span>
                <span>
                  <SocialIcon bgColor="black" url="https://facebook.com" />
                </span>
                <span>
                  <SocialIcon bgColor="black" url="https://youtube.com" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer
