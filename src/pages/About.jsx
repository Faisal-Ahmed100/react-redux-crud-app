import React from 'react'

const About = () => {
  return (
    <section className='relative lg:p-0 py-10 lg:py-0 px-3 sm:w-[80%] lg:w-full mx-auto lg:h-[600px] xl:h-[600px]' id='about'>
      <div className='absolute -z-10 w-1/6
       h-full bg-[#169987] hidden lg:block'>
        
       </div>
<div className=" absolute left-0 lg:h-[80%] lg:w-1/2 lg:top-[58px] xl:top-[61px] object-cover hidden lg:block">
<img className='rounded-l rounded-full lg:h-full   w-full object-cover' src="https://images.pexels.com/photos/965878/pexels-photo-965878.jpeg" alt="" />
</div>

       <div className='lg:absolute top-[20%] left-[55%] lg:mr-6'>

<div className="flex flex-col">
    <p className='font-p text-3xl font-bold text-[#169987]'>About</p>
    <h2 className='text-5xl font-semibold text-gray-800 mb-3'>Welcom!</h2>
    <p className='mb-6 font-semibold text-lg'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque necessitatibus architecto repudiandae debitis laboriosam voluptatibus saepe, quaerat fugiat tenetur. Odio.</p>
    <p className='font-semibold text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora doloremque molestiae, repellat fugit dolor quidem est molestias. Omnis, architecto quas!</p>
    <button className='sm:w-1/4 lg:w-1/3 w-1/2 py-2 text-lg uppercase font-semibold mt-6'>Read More</button>
</div>
        
       </div>
    </section>
  )
}

export default About
