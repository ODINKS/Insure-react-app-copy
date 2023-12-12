import React from 'react'
import SalesBox from './SalesBox'

const SalesBoxGroup = () => {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-6 ">
                <SalesBox title="Sales" price="456700" growth="+2.5%" />
                <SalesBox title="Clients" price="450" growth="-2.5%" />
                <SalesBox title="Conversion" price="456700" growth="+2.5%" />
                <SalesBox title="Claims" price="16700" growth="-0.5%" />
            </div>
        </>
    )
}

export default SalesBoxGroup
