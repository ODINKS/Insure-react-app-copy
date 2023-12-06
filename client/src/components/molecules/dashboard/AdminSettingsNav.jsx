import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const AdminSettingsNav = () => {
    const [activeLink, setActiveLink] = useState('company profile');
    const handleLinkClick = (event, link) => {
        event.preventDefault()
        setActiveLink(link);
    };
    return (
        <>
            <nav className='flex flex-col md:justify-center lg:flex-row lg:flex-wrap lg:justify-between w-full items-center gap-10 border border-0 bg-[--white-bg] mt-5 px-10 py-5 mb-5 rounded-md'>
                <ul className='flex flex-col  lg:flex-row lg:flex-wrap lg:justify-between w-full lg:text-[1.125rem] font-semibold list-none'>
                    <li className='' ><Link to="/dashboard/admin/settings"
                        onClick={(event) => handleLinkClick(event, 'company profile')}
                        className={`border border-0 ${activeLink === 'company profile' ? 'border-b-[--orange-bg] border-b-4 transition-all duration-75 pb-1' : ''}`}
                    >Company Profile</Link></li>

                    <li><Link to="/dashboard/admin/settings/accounts"
                        onClick={(event) => handleLinkClick(event, 'accounts')}
                        className={`border border-0 ${activeLink === 'accounts' ? 'border-b-[--orange-bg] border-b-4 transition-all duration-75 pb-1' : ''}`}
                    >Accounts</Link></li>

                    <li><Link to="#"
                        onClick={(event) => handleLinkClick(event, 'payment')}
                        className={`border border-0 ${activeLink === 'payment' ? 'border-b-[--orange-bg] border-b-4 transition-all duration-75 pb-1' : ''}`}
                    >Payment</Link></li>

                    <li><Link to="#"
                        onClick={(event) => handleLinkClick(event, 'notifications')}
                        className={`border border-0 ${activeLink === 'notifications' ? 'border-b-[--orange-bg] border-b-4 transition-all duration-75 pb-1' : ''}`}
                    >Notifications</Link></li>

                    <li><Link to="#"
                        onClick={(event) => handleLinkClick(event, 'delete account')}
                        className={`border border-0 ${activeLink === 'delete account' ? 'border-b-[--orange-bg] border-b-4 transition-all duration-75 pb-1' : ''}`}
                    >Delete Account</Link></li>

                    <li><Link to="#"
                        onClick={(event) => handleLinkClick(event, 'security')}
                        className={`border border-0 ${activeLink === 'security' ? 'border-b-[--orange-bg] border-b-4 transition-all duration-75 pb-1' : ''}`}
                    >Security</Link></li>
                </ul>
            </nav>
        </>
    )
}

export default AdminSettingsNav
