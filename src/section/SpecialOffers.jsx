import React from 'react'
import { offer } from '../assets/images'
import Button from '../components/Button'
import { arrowRight } from '../assets/icons'

const SpecialOffers = () => {
    return (
        <div className='flex justify-wrap items-center max-lg:flex-col-reverse gap-10 max-container'>
            <div className="flex1">
                <img src={offer} alt="offer" width={773} height={687} className='object-contain w-full' />
            </div>
            <div className="flex flex-1 flex-col">
                <h1 className='font-palanquin text-4xl capitalize font-bold lg:max-w-lg' >
                    <span className='text-coral-red inline-block mt-3'> Special </span> Offer
                </h1>
                <p className='mt-4 lg:max-w-lg text-info' >
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam possimus, deserunt vero sapiente sed ullam nisi accusamus, repudiandae, natus excepturi suscipit expedita. Inventore, natus eveniet?
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam possimus, deserunt vero sapiente sed ullam nisi accusamus, repudiandae, natus excepturi suscipit expedita. Inventore, natus eveniet?
                </p>
                <p className='mt-6 lg:max-w-lg text-info' >
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam possimus, deserunt vero sapiente sed ullam nisi accusamus, repudiandae, natus excepturi suscipit expedita.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam possimus, deserunt vero sapiente sed ullam nisi accusamus, repudiandae, natus excepturi suscipit expedita.
                </p>
                <div className='mt-11 flex flex-wrap gap-4' >
                    <Button label="Show Now" imgURL={arrowRight} />
                    <Button label="Learn More." backgroundColor="bg-white" textColor="text-slate-gray" borderColor="border-slate-gray" />
                </div>
            </div>
        </div>
    )
}

export default SpecialOffers