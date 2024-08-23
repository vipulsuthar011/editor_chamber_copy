import React from 'react'
import { BsCheckAll } from 'react-icons/bs'

const PricingDetail = ({ service,best }) => {
    // console.log(service);
    return (
        <div >
            {service.map((services, index) => (
                <div className='flex align-center mt-2 gap-2  px-3 mb-4'>
                    <BsCheckAll size={24} color={best?"black":"#EBCE5B"} />
                    <div className={`text-${best?"black":"whtie"}`}>{services.name}</div>
                </div>
            ))}
        </div>
    )
}

export default PricingDetail