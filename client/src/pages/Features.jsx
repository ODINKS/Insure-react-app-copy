import React from 'react'
import Button from '../components/molecules/global/Button'
import Navbar from "../components/molecules/global/Navbar";
import Footer from "../components/molecules/global/Footer"

const Features = () => {
    return (
        <div>
            <Navbar />
            <div>
                {/* // features hero sections */}
                
                <div className="lg:object-cover lg:object-center bg-cover bg-center lg:h-[100vh] h-[100vh] w-[100%] bg-[#433A3A] flex flex-col bg-blend-overlay p-6"
                    style={{backgroundImage: `url("https://tinyurl.com/2e3e32fw")`}}>
                    <div className="flex justify-between items-center h-full">
                        <div className="text-white ml-12 font-lato">
                            <h1 className="text-7xl font-bold mb-12">
                                Explore <span class="text-orange-500">our</span> Features
                            </h1>
                            <p className="text-[1.4rem] mb-9 font-medium w-[760px]">
                                Explore INsure's Dynamic Features, Elevating Your Insurance Experience.
                                Dive into our diverse range of offerings, uncover tailored solutions,
                                and navigate through innovative features designed for your peace of mind
                            </p>
                            <Button  description="Get Started" width="20"/>
                        </div>
                    </div>
                </div>
                {/* // second section */}
        
                <div className="flex h-screen justify-between">
                    <div className="my-auto ">
                        <p className=" w-[533.99px] h-[200.41px] text-sky-800 text-[42px] ml-20 leading-tight font-bold">Collaborate with team, manage your agent and track your leads</p>
                        <div className="ml-20">
                            <p className="w-[80%] font-semibold">Insure has a wide range of tools to help you manage your organization team</p>
                            <div className="flex space-x-9">
                                <div className="my-6 flex space-x-3">
                                    <img src="https://tinyurl.com/yc3r8es9" alt="learn more icon" />
                                    <div className="font-bold text-sky-800">See INsure in Action</div>
                                </div>
                            </div>
                            <p className="font-semibold text-sky-800">14 days free trial | No credit card</p>
                        </div>
                    </div>
                    <div className="w-[60%] my-auto">
                        <img src="/images/features page img/feature 1.jpg" alt="insure features" />
                    </div>
                </div>
                {/* Third section */}
        
                <div className="flex">
                    <img src="https://tinyurl.com/3jsnv8hb" alt="" />
                    <div className="my-auto mx-auto text-xl">
                        <p className="text-5xl mb-6 font-bold">Customer <span class="text-orange-500">Data</span> Security</p>
                        <ul className="list-disc ml-8">
                            <li className="mb-2">Secured Data Transmission</li>
                            <li className="mb-2">User Authentication</li>
                            <li className="mb-2">Redundant Data Storage</li>
                            <li className="mb-2">Disaster Recovery Plan</li>
                            <li className="mb-2">Transparent Privacy Policy</li>
                            <li className="mb-2">Legal and Regulatory Compliance</li>
                        </ul>
                    </div>
                </div>
                {/* //fourth section */}
                
                <div className="flex justify-between">
                    <div className="mx-auto my-auto w-[549px] text-xl">
                        <p className="text-5xl mb-6 font-bold">Getting <span class="text-orange-500">Started</span> Videos</p>
                        <ul className="list-disc ml-8">
                            <li className="mb-2"><span>User Registration: </span>Learn how to create your account and set up your profile.</li>
                            <li className="mb-2"><span>Dashboard Overview: </span>Get acquainted with the main dashboard and it's key features.</li>
                            <li className="mb-2"><span>Navigation: </span>Discover how to easily navigate through the app's various sections.</li>
                            <li className="mb-2"><span>Security: </span>Understand the security measures in place to protect your data.</li>
                            <li className="mb-2"><span>Agent Onboarding: </span>Learn how to add new agents to your team.</li>
                            <li className="mb-2"><span>Policy Approval: </span>Understand how to reveiw and approve policies generated by agents.</li>
                        </ul>
                    </div>
                    <div>
                        <img src="https://tinyurl.com/4svdfh94" alt="" />
                    </div>
                </div>
                {/* //fifth section */}
                
                <div className="flex justify-between bg-indigo-100">
                    <div className="ml-12 my-auto">
                        <img className="w-[800px] h-[500px]" src="https://tinyurl.com/4sw3ywj2" alt="" />
                    </div>
                    <div className="my-auto mx-auto text-xl">
                        <p className="text-5xl mb-6 font-bold">Analytics <span class="text-orange-500">and</span> Reporting</p>
                        <ul className="w-[440px] list-disc ml-8">
                            <li className="mb-2">Generate reports on sales performance, lead conversion rates, and revenue.</li>
                            <li className="mb-2">Analyse trends and identify areas for improvement.</li>
                            <li className="mb-2">Monitor agent productivity and clients retention rates.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer />
        </div>

    );
};

export default Features;