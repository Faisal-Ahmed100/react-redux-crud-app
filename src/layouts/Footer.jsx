import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='bg-[#051918] md:pt-20 pt-10 text-white px-3'>
      <div className="container mx-auto">
        <div className="flex justify-between flex-wrap gap-5">
          <div>
          <h2 className='mb-8 text-3xl font-medium'>Main Links</h2>
            <ul className='flex flex-col gap-3'>
              <Link to='/'>
              <li className='font-medium'>Home</li>
              </Link>
              <Link to='/'>
              <li className='font-medium'>About us</li>
              </Link>
              <Link to='/'>
              <li className='font-medium'>Our Products</li>
              </Link>
              <Link to='/'>
              <li className='font-medium'>Photo Gallery</li>
              </Link>
              <Link to='/'>
              <li className='font-medium'>Clients Testimonial</li>
              </Link>
              <Link to='/'>
              <li className='font-medium'>Contact us</li>
              </Link>
            </ul>
          </div>
          <div>
          <h2 className='mb-8 text-3xl font-medium'>Other Link</h2>
            <ul className='flex flex-col gap-3'>
              <Link to='/'>
              <li className='font-medium'>Lorem ipsum</li>
              </Link>
              <Link to='/'>
              <li className='font-medium'>dolor sit amet,</li>
              </Link>
              <Link to='/'>
              <li className='font-medium'>consectetur</li>
              </Link>
              <Link to='/'>
              <li className='font-medium'>adipiscing</li>
              </Link>
              <Link to='/'>
              <li className='font-medium'>Vivamus nec</li>
              </Link>
              <Link to='/'>
              <li className='font-medium'>Wecursus</li>
              </Link>
            </ul>
          </div>
          <div>
          <h2 className='mb-8 text-3xl font-medium'>Main Links</h2>
         <div className='pb-8'>
         <div className='flex gap-2 items-center pb-6'>
          <i className="fa-solid fa-phone"></i>
          <p>0123 456 789</p>
          </div>
          <div className='flex gap-2 items-center pb-6'>
          <i class="fa-solid fa-envelope"></i>
          <p>info@loremipsum.com</p>
          </div>
         </div>
          <h2 className='mb-6 text-3xl font-medium'>Flow us</h2>
          <div className='flex gap-8'>
          <a href="#">
          <i className="fa-brands fa-facebook-f"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-twitter"></i>
          </a>
         
          <a href="#">
 <i className="fa-brands fa-google-plus-g"></i>

          </a>
           <a href="#">
            <i className="fa-brands fa-linkedin-in"></i>
           </a>
          <a href="">
            <i className="fa-brands fa-pinterest-p"></i>
          </a>
          
          </div>
          </div>
          <div>
          <h2 className='mb-6 text-3xl font-medium'>Newsletter</h2>
          <div className='flex flex-col'>
          <p className='mb-6'>Sign up for special offers</p>
         <div>
         <input className='py-2 px-2 text-black outline-none' placeholder='Enter your email' type="email" name="" id="" />
          <button className='uppercase py-2 px-2 font-medium'>subcribe</button>
         </div>
          </div>

          </div>
        </div>
        <div className='border-t border-1 py-4 mt-12'>
          <p className='capitalize text-center'>Copyright @2022 Faisal all rights reserved</p>
        </div>
      </div>
      
    </footer>
  )
}

export default Footer
