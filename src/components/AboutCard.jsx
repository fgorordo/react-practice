import React from 'react'

const AboutCard = ({icon,heading,text}) => {
  return (
    <div className='flex flex-col border rounded-2xl text-left py-12 px-8'>
                    <div>
                        <div className='bg-[#00d8ff] inline-flex p-2 rounded-full text-gray-800'>
                            {icon}
                        </div>
                        <h3 className='text-xl font-bold py-4'>{heading}</h3>
                        <p className=''>{text}</p>
                    </div>
                </div>
  )
}

export default AboutCard