import React from 'react'
import { star } from '../assets/icons'

const PopularProductCard = ({ imgURL, name, price }) => {
    return (
        <div className='flex flex-1 flex-col w-full max-sm:w-full '>
            <img src={imgURL} alt={name} className='w-[280px] h-[280px] ' />
            <div className="mt-8 flex justify-start gap-2.5">
                <img src={star} alt="start rating" width={24} height={24} />
                <p className="font-montserrat text-xl leading-normal text-slate-gray">
                    (4.5)
                </p>
            </div>
            <h2 className='font-palanquin text-2xl font-semibold mt-2 leading-normal'> {name} </h2>
            <p className='mt-2 font-montserrat text-coral-red leading-normal text-2xl'> {price} </p>
        </div>
    )
}

export default PopularProductCard