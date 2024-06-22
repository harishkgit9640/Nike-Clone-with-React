import React from 'react'

const Button = ({ label, imgURL, backgroundColor, textColor, borderColor, fullWith }) => {
    return (
        <button className={`flex justify-center items-center gap-4 py-4 px-7 font-montserrat leading-none
         ${backgroundColor ? ` ${backgroundColor} ${textColor} ${borderColor}` : "bg-coral-red text-white border-coral-red"}
         text-lg border rounded-full ${fullWith && 'w-full'}`} >
            {label}
            {imgURL && <img src={imgURL} alt="right Arrow" className='w-5 h-5 ml-2 rounded-full' />}
        </button >
    )
}

export default Button