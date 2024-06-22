import React, { useState } from 'react'
import { arrowRight } from '../assets/icons/'
import Button from '../components/Button'
import { shoes, statistics } from '../constants'
import { bigShoe1 } from '../assets/images'
import ShoesCard from '../components/ShoesCard'
const Hero = () => {
    const [bigShoeImg, setBigShoeImg] = useState(bigShoe1)
    return (
        <section id='home' className='w-full flex xl:flex-row flex-col justify-start min-h-screen gap-10 max-container'>
            <div className="relative w-full xl:w-2/5 flex flex-col justify-center items-start xl:padding-x padding-x pt-28">
                <p className='font-montserrat text-xl text-coral-red' >Our new Collation</p>
                <h1 className='mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold' ><span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>The New Arrival</span> <br />
                    <span className='text-coral-red inline-block mt-3'> Nike </span>
                    Shoes </h1>
                <p className='font-montserrat text-lg mt-6 mb-14 leading-8 text-slate-gray sm:max-w-sm' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, cum?</p>
                <Button label="Shop Now" imgURL={arrowRight} />
                <div className="flex flex-wrap justify-start items-start w-full xl:gap-10 gap-16 mt-20">
                    {statistics.map((stat) => (
                        <div className="data" key={stat.label}>
                            <p className='text-4xl font-palanquin font-bold'> {stat.value} </p>
                            <p className='font-montserrat text-slate-gray leading-7'> {stat.label} </p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="relative flex flex-1 justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
                <img src={bigShoeImg} className='object-contain z-10 relative' width={610} height={500} alt="show collection" />

                <div className="flex sm:gap-6 gap-4 justify-center items-center absolute -bottom-[5%] sm:left-[10%] max-sm:px-6 ">
                    {
                        shoes.map((shoes, index) => (
                            <div key={index}>
                                <ShoesCard imgUrl={shoes} changeBigShoeImage={(shoes) => { setBigShoeImg(shoes) }} bigShoeImg={bigShoeImg} />
                            </div>
                        ))
                    }
                </div>

            </div>
        </section>
    )
}

export default Hero