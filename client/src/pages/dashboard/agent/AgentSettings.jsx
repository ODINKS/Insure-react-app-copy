import React from 'react'

const AgentSettings = () => {
    return (
        <>
            <form action="" className='border border-black flex flex-col md:flex-row md:flex-wrap justify-start md:justify-center gap-5 items-center md:px-10 py-8 lg:py-14 lg:rounded-lg bg-[--white-bg] border border-0 lg:mb-7 rounded-md'>
                <input type="text" name="" id="" placeholder='Last Name' className='border border-black w-72 md:w-96 lg:w-120 md:px-3 md:py-2 md:mr-1 rounded-md' />

                <input type="text" name="" id="" placeholder='Firstname' className='border border-black w-72 md:w-96 lg:w-120 md:px-3 md:py-2 rounded-md' />

                <input type="email" name="" id="" placeholder='divine.mutuals@gmail.com' className='border border-black w-72 md:w-96 lg:w-120 md:px-3 md:py-2 rounded-md' />

                <select name="" id="" className='border border-black w-72 md:w-96 lg:w-120 md:py-2 rounded-md'>
                    <option value="" selected>Select gender</option>
                    <option value="">Male</option>
                    <option value="">Female</option>
                    <option value="">Prefer not to say</option>
                </select>
                <input type="email" name="" id="" placeholder='Address' className='border border-black w-72 md:w-120 lg:w-[78%] xl:w-120 lg:w-120 md:px-3 md:py-2 rounded-md' />

                <input type="phone" name="" id="" placeholder='Phone Number' className='border border-black w-72 md:w-96 lg:w-120 md:px-3 md:py-2 rounded-md' />

                <input type="date" name="" id="" className='border border-black w-72 md:w-96 lg:w-120 md:px-3 md:py-2 rounded-md' />

                <select className='border border-black w-72 md:w-96 lg:w-120 md:px-3 md:py-2 rounded-md'>
                    <option value="">Sales Executive</option>
                </select>
                <input type="text" name="" id="" placeholder='Duration' className='w-72 border border-black md:w-96 lg:w-120 md:px-3 md:py-2 rounded-md' />

            </form>
        </>
    )
}

export default AgentSettings
