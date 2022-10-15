import React from 'react'
import Benner from '../components/Benner'
import Photo from '../components/Photo'
import Footer from '../layouts/Footer'
import About from './About'
import Product from './Product'
import Testimonial from './Testimonial'

const Home = () => {
  return (
    <div className='w-full overflow-hidden'>
    <Benner />
    <About />
    <Product />
    <Photo />
    <Testimonial />
    <Footer />
      
    </div>
  )
}

export default Home
