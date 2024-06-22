import React from 'react'
import { products } from '../constants'
import PopularProductCard from '../components/PopularProductCard'
const PopularProduct = () => {
    return (
        <section id='products'>
            <div className="max-container max-sm:mt-12">
                <div className="flex flex-col justify-start gap-5">
                    <h1 className='text-4xl font-palanquin font-bold'>Our <span className='text-coral-red'> Popular </span> Product </h1>
                    <p className="lg:max-w-lg font-montserrat text-slate-gray">
                        Lorem ipsum dolor consectetur adipisicing elit. Eligendi, Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    </p>
                </div>
            </div>
            <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-4 gap-14">
                {
                    products.map((product) => (
                        <PopularProductCard
                            key={product.name} {...product}
                        />
                    ))
                }
            </div>

        </section>
    )
}

export default PopularProduct