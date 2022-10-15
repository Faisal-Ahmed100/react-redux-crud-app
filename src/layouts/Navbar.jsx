import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const [open,setOpen]=useState(false);
  

  return (
    <>
    <nav className='container bg-white mx-auto hidden lg:flex py-6 top-10 relative justify-between items-center px-4 xl:px-4'>
    <div className=''> <NavLink to='/' className='uppercase'>
            
            <span className='text-[#169987] text-3xl font-semibold xl:text-4xl'>Logo </span>
            <span className='text-3xl font-semibold xl:text-4xl'>here</span>
            
            </NavLink></div>
            <div className='flex justify-between items-center'>
              <ul className='flex xl:gap-4'>
                <NavLink to='/'>
                  <li className='px-3 py-2 font-medium hover:text-white hover:bg-[#169987]'>Home</li>
                </NavLink>
                <a href='#about'>
                  <li className='px-2 font-medium py-2 hover:text-white hover:bg-[#169987]'>About us</li>
                </a>
                <a href='#product'>
                  <li className='px-2 font-medium py-2 hover:text-white hover:bg-[#169987]'>Our products</li>
                </a>
                <a href='#photo-gallery'>
                  <li className='px-2 font-medium py-2 hover:text-white hover:bg-[#169987]'>Photo gellary</li>
                </a>
                <a href='#client-testimonials'>
                  <li className='px-2 font-medium py-2 hover:text-white hover:bg-[#169987]'>Clients Testimonial</li>
                </a>
                <NavLink to='/contact-us'>
                  <li className='px-2 font-medium py-2 hover:text-white hover:bg-[#169987]'>Contact us</li>
                </NavLink>
              </ul>
              <div className='flex justify-center items-center xl:ml-10 ml-5'>
                <div className='mr-2'>
                  <a href="tel:01028-92029">
 <i className="fa-solid fa-phone p-2 w-[40px] h-[40px] bg-white border rounded-full border-[#169987] flex justify-center items-center hover:bg-[#169987] hover:text-white text-[#169987]"></i>

                  </a>
                 
                  </div>
                
                <div className='flex flex-col'>
                  <h6 className='font-bold'>Call On</h6>
                  <p className='font-medium'>01028-92029</p>
                </div>
               
              </div>
            </div>
    </nav>

     {/* mobile view */}
    <nav className='lg:hidden'>
    <div className={open ? 'absolute top-0 cursor-pointer z-10  right-0 w-full h-screen transition-all bg-black/70':'absolute top-0 -z-10 transition-all right-0 w-full h-screen bg-black/60'} onClick={()=>setOpen(!open)}></div>
     <div className='bg-white relative z-5  py-6'>
      
      <div className="container mx-auto">
        <div className="flex justify-between items-center px-4">
          <div className=''> <NavLink to='/' className='uppercase'>
            
            <span className='text-[#169987] text-3xl font-semibold'>Logo </span>
            <span className='text-3xl font-semibold'>here</span>
            
            </NavLink></div>
          <div onClick={()=>setOpen(!open)} className='cursor-pointer'>
          <i className="fa-solid fa-bars text-3xl"></i>
          </div>
        </div>
      </div>

 
     
    </div>
   
    <ul className={open ? 'absolute top-0 right-[0] w-[70%] sm:w-[50%] bg-white h-screen z-10 flex flex-col transition-all' : 'absolute top-0 -right-[100%] w-[70%] sm:w-[50%] bg-white h-screen flex flex-col transition-all z-50'}>
        
        
        <li className='border-b p-4 '>  <i className="fa-solid fa-close text-3xl cursor-pointer" onClick={()=>setOpen(!open)}></i>
       </li>  
        
       <NavLink to='/' onClick={()=>setOpen(false)}>
        <li className='border-b hover:bg-gray-200 p-4 '>  Home
       </li>  
        </NavLink>
       <a href='#about' onClick={()=>setOpen(false)}>
        <li className='border-b hover:bg-gray-200 p-4'>  About us
       </li>  
        </a>
       <a href='#product' onClick={()=>setOpen(false)}>
        <li className='border-b hover:bg-gray-200 p-4'>  Our Products
       </li>  
        </a>
       <a href='#photo-gallery' onClick={()=>setOpen(false)}>
        <li className='border-b hover:bg-gray-200 p-4'>  Photo Gallery
       </li>  
        </a>
       <a href='#client-testimonials' onClick={()=>setOpen(false)}>
        <li className='border-b hover:bg-gray-200 p-4'>  Clients Testimonial
       </li>  
        </a>
        <NavLink to='/contact-us' onClick={()=>setOpen(false)}>
        <li className='border-b hover:bg-gray-200 p-4 '>  Contact us
       </li>  
        </NavLink>
     
     
   </ul>
    </nav>

   
    </>
    
   
  )
}

export default Navbar
