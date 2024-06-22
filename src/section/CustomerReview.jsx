import React from 'react'
import { reviews } from '../constants'
import ReviewCard from '../components/ReviewCard'

const CustomerReview = () => {
    return (
        <section className='max-container '>
            <h3 className='font-palanquin text-4xl font-bold text-center'>

                What Our <span className='text-coral-red'> Customer </span> say?
            </h3>
            <p className="text-center mx-auto font-montserrat mt-4 info-text max-w-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi doloremque, eaque perferendis
            </p>
            <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">

                {
                    reviews.map((review) => (
                        <ReviewCard
                            key={review.customerName}
                            customerName={review.customerName}
                            imgURL={review.imgURL}
                            rating={review.rating}
                            feedback={review.feedback}
                        />
                    ))
                }

            </div>

        </section>
    )
}

export default CustomerReview