import React from 'react'
import { NavLink } from 'react-router-dom'

const Product = () => {
  return (
    <section className='sm:py-20 py-10 bg-gray-200 flex items-centerh-screen' id='product'>
      <div className="container mx-auto">
        <div className='flex justify-center items-center flex-col'>
        <p className='font-p text-3xl font-bold text-[#169987]'>Producted</p>
        <h2 className='text-5xl font-semibold text-gray-800 mb-3'>Product</h2>
        </div>

        <div className='grid sm:grid-col-1 md:grid-cols-3  gap-6 pt-6 md:p-4 px-3 md:px-0 '>
           
               <div className="w-full relative">
                <div className='absolute w-full h-full top-0 left-0 bg-black/50'></div>
               <img className='w-full h-full' src="https://www.doorhandlestore.com/media/megamenu_dhs/black-door-handles-on-backplate.jpg" alt="" />
               <div className='absolute bottom-0 left-0 text-white px-2 py-4'>
                <h3 className='text-2xl font-semibold'>Lorem ipsum dolor sit.</h3>
                <p className='my-2 font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, ut.</p>
                <NavLink to='/'>
                    <p className='uppercase text-[#169987] text-lg font-medium'>read more..</p>
                </NavLink>
               </div>
               </div>
            
            <div className='w-full'>
            <img className='md:h-1/2 h-auto w-full' src="https://www.doorhandlestore.com/media/megamenu_dhs/bathroom-backplates.jpg" alt="" />
            <div className='pt-4 px-2 md:p-2'>
                <h3 className='text-2xl font-semibold'>Lorem ipsum dolor sit.</h3>
                <p className='my-2 font-medium leading-normal'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non pariatur architecto fugit eaque rerum earum soluta saepe consectetur aliquid. Facilis!</p>
                <NavLink to='/'>
                    <p className='uppercase text-[#169987] font-medium'>read more..</p>
                </NavLink>
               </div>
            </div>
            <div className='relative'>
            <img className='md:h-1/2 h-auto w-full' src="https://rukminim1.flixcart.com/image/416/416/kt4ozgw0/knob-handle/c/b/v/matte-559-black-gold-lapo-original-imag6jcz5jvabjkc.jpeg?q=70" alt="" />
            <div className='pt-4 md:p-2 px-2'>
                <h3 className='text-2xl font-semibold'>Lorem ipsum dolor sit.</h3>
                <p className='my-2 font-medium leading-normal'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non pariatur architecto fugit eaque rerum earum soluta saepe consectetur aliquid. Facilis!</p>
                <NavLink to='/'>
                    <p className='uppercase text-[#169987] font-medium'>read more..</p>
                </NavLink>
               </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Product
