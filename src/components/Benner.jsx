import React from 'react'
import Navbar from '../layouts/Navbar'

const Benner = () => {
  return (
    <div className='w-full h-screen bg-no-repeat bg-cover relative' style={{backgroundImage:"url('https://images.pexels.com/photos/965878/pexels-photo-965878.jpeg')"}}>
      <Navbar />

     <div className="container mx-auto">

     <div className="flex flex-col absolute xl:bottom-20 bottom-20 lg:w-[70%] px-4 md:px-0">
        <p className='font-p sm:text-6xl text-5xl  md:text-7xl lg:text-7xl xl:text-5xl  text-black/80 font-semibold'>Lorem ipsum dolor</p>
      
      <button className='py-2 my-6 md:w-[70%] md:text-6xl text-4xl sm:text-6xl xl:text-5xl xl:w-[40%] capitalize font-semibold'>lorem ispam sit</button>
      
        <p className='text-white text-lg font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quae autem hic asperiores, vero optio molestiae eaque quis repellendus libero minima? Reprehenderit nemo consequuntur maxime autem veniam corrupti quod exercitationem?</p>
      </div>


     </div>
    </div>
  )
}

export default Benner
