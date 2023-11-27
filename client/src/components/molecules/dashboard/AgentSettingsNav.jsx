import React, { useState } from 'react'

const AgentSettingsNav = () => {
    const [activeLink, setActiveLink] = useState('');
    const handleLinkClick = (event, link) => {
        event.preventDefault()
        setActiveLink(link);
    };
    return (
        <>
            <nav className='flex flex-col md:justify-center lg:flex-row lg:flex-wrap lg:justify-between w-full items-center gap-10 border border-0 bg-[--white-bg] mt-5 px-10 py-5 mb-5 rounded-md'>
                <ul className='flex flex-col  lg:flex-row lg:flex-wrap lg:justify-between w-full lg:text-[1.2rem] font-semibold list-none'>
                    <li className='' ><a href="#"
                        onClick={(event) => handleLinkClick(event, 'profile')}
                        className={`border border-0 ${activeLink === 'profile' ? 'border-b-red-900 border-b-4 text-xl transition-all duration-75 pb-1' : ''}`}
                    >Profile</a></li>

                    <li><a href="#"
                        onClick={(event) => handleLinkClick(event, 'accounts')}
                        className={`border border-0 ${activeLink === 'accounts' ? 'border-b-red-900 border-b-4 text-xl transition-all duration-75 pb-1' : ''}`}
                    >Accounts</a></li>

                    <li><a href="#"
                        onClick={(event) => handleLinkClick(event, 'change password')}
                        className={`border border-0 ${activeLink === 'change password' ? 'border-b-red-900 border-b-4 text-xl transition-all duration-75 pb-1' : ''}`}
                    >Change password</a></li>

                    <li><a href="#"
                        onClick={(event) => handleLinkClick(event, 'notifications')}
                        className={`border border-0 ${activeLink === 'notifications' ? 'border-b-red-900 border-b-4 text-xl transition-all duration-75 pb-1' : ''}`}
                    >Notifications</a></li>

                    <li><a href="#"
                        onClick={(event) => handleLinkClick(event, 'delete account')}
                        className={`border border-0 ${activeLink === 'delete account' ? 'border-b-red-900 border-b-4 text-xl transition-all duration-75 pb-1' : ''}`}
                    >Delete Account</a></li>

                    <li><a href="#"
                        onClick={(event) => handleLinkClick(event, 'security')}
                        className={`border border-0 ${activeLink === 'security' ? 'border-b-red-900 border-b-4 text-xl transition-all duration-75 pb-1' : ''}`}
                    >Security</a></li>
                </ul>
            </nav>
        </>
    )
}

export default AgentSettingsNav
