import React from 'react'
import { star } from '../assets/icons'

const ReviewCard = ({ customerName, imgURL, rating, feedback }) => {
    return (
        <div className='flex justify-center items-center flex-col'>
            <img src={imgURL} alt={customerName} className='rounded-full object-contain w-[120px] h-[120px] ' />
            <p className='mt-6 max-w-sm info-text text-center' > {feedback} </p>
            <div className="mt-3 flex justify-center items-center gap-2.5">
                <img src={star} alt="star" width={24} height={24} className='object-contain' />
                <span className='text-xl text-slate-gray font-montserrat' >({rating})</span>
            </div>
            <h2 className='font-bold text-3xl font-palanquin mt-1'>{customerName}</h2>
        </div>
    )
}

export default ReviewCard