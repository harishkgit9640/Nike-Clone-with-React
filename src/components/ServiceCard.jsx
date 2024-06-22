import React from 'react'

const ServiceCard = ({ label, imgURL, subtext }) => {
    return (
        <div className='flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl p-10 ' >
            <div className="w-11 h-11 flex justify-center items-center bg-coral-red rounded-full">
                <img src={imgURL} alt={label} />
            </div>
            <h2 className='mt-5 font-palanquin font-bold leading-normal text-3xl'> {label} </h2>
            <p className='mt-3 font-montserrat break-words text-lg leading-normal'> {subtext} </p>
        </div>
    )
}

export default ServiceCard