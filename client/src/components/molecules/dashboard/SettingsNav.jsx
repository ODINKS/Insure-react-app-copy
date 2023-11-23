import React from 'react'

const SettingsNav = () => {
    return (
        <>
            <nav className='flex flex-col md:justify-center lg:flex-row lg:flex-wrap lg:justify-between w-full items-center gap-10 border border-0 bg-[--white-bg] mt-5 px-10 py-5 mb-5 rounded-md'>
                <ul className='flex flex-col  lg:flex-row lg:flex-wrap lg:justify-between w-full lg:text-[1.2rem] font-semibold list-none'>
                    <li className='border border-b-red-900 border-4'><a href="">Profile</a></li>
                    <li><a href="">Accounts</a></li>
                    <li><a href="">Change Password</a></li>
                    <li><a href="">Notifications</a></li>
                    <li><a href="">Delete Account</a></li>
                    <li><a href="">Security</a></li>
                </ul>
            </nav>
        </>
    )
}

export default SettingsNav
