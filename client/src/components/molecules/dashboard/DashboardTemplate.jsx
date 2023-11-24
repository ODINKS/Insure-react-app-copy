import React from 'react'

const DashboardTemplate = (props) => {
    const {sidebar, dashboardNav, dashboardBody, notificationSection} = props
    return (
        <>
            <div className='lg:flex lg:justify-between w-[98.5vw] bg-[#DFE7FA] h-full'>

                {sidebar}
                <main className='bg-[#DFE7FA] lg:w-[80vw] xl:w-[83vw] flex flex-col px-16'>
                    {notificationSection}
                    {dashboardNav}
                    {dashboardBody || "Your contents will appear here"}
                </main>
            </div>

        </>
    )
}

export default DashboardTemplate
