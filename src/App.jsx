import React from 'react'
import { Hero, SpecialOffers, QualityProduct, Footer, Services, PopularProduct, CustomerReview, Subscriber, Nav } from './section/index'
const App = () => {
  return (

    <main className='relative'>
      <Nav />
      <section className='xl:padding-1 wide:padding-r padding-b'>
        <Hero />
      </section>
      <section className="padding">
        <PopularProduct />
      </section>
      <section className="padding">
        <QualityProduct />
      </section>
      <section className="padding-x py-10">
        <Services />
      </section>
      <section className="padding">
        <SpecialOffers />
      </section>
      <section className="bg-pale-blue padding">
        <CustomerReview />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscriber />
      </section>
      <section className="bg-black padding-x padding-t pb-8">
        <Footer />
      </section>

    </main>

  )
}

export default App