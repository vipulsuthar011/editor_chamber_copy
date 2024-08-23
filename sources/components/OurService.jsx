import React from 'react'
import { graphicDesginServices } from '../serviceConstant'
import { BsCheckAll } from 'react-icons/bs'

const OurService = () => {
  return (
    <div className='flex justify-around items-center max-md:flex-col max-md:gap-y-10'>
    {
  graphicDesginServices?.map((data, index) => (
    <div className='' key={index} >
        <div className='font-bold text-lg'>{data.title}</div>
        <div className="flex items-left gap-2 flex-col">
          {data?.services?.map((services) => (
            <div className='flex items-center gap-1'>
              <BsCheckAll size={24} color="#EBCE5B" /> <span className="tracking-widest">{services.name}</span>
            </div>
          ))}
        </div>
      </div>

    ))
  }
  </div>
  )
}

export default OurService