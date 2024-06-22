import React from 'react'
import Button from '../components/Button'
import { shoe8 } from '../assets/images'

const QualityProduct = () => {
    return (
        <div id='about-us' className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'>
            <div className="flex flex-1 flex-col">
                <h1 className='font-palanquin text-4xl capitalize font-bold lg:max-w-lg' >
                    We Provide you  <span className='text-coral-red inline-block mt-3'> Super </span>
                    <span className='text-coral-red inline-block mt-3'> Quality </span>  Shoes
                </h1>
                <p className='mt-4 lg:max-w-lg text-info' >
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam possimus, deserunt vero sapiente sed ullam nisi accusamus, repudiandae, natus excepturi suscipit expedita. Inventore, natus eveniet?
                </p>
                <p className='mt-6 lg:max-w-lg text-info' >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, magnam.
                </p>
                <div className='mt-8' >
                    <Button label="View Details" />
                </div>
            </div>

            <div className="flex flex-1 justify-center items-center">
                <img src={shoe8} alt="shoes8" width={570} height={522} className='object-contain' />
            </div>

        </div>
    )
}

export default QualityProduct