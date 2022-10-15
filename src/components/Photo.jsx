import React from 'react'

const Photo = () => {
  return (
    <section className='flex items-center' id='photo-gallery'>
      <div className='container mx-auto'>
<div className='grid grid-cols-1 md:grid-cols-5 gap-3 p-3'>
        <img className='w-full h-full' src="https://www.handles4u.co.uk/custom/upload/images/Category%20Images/Handles/Lever%20Handles.jpg" alt="" />
        <img className='w-full h-full' src="https://ae01.alicdn.com/kf/H78fdf6cc90f0476580650a55aab532f3x/French-Bedroom-Home-Lock-Door-Hotel-Sliding-Outdoor-Interior-Cylinder-Set-Door-Handle-Security-Vintage-Deurslot.jpg_Q90.jpg_.webp" alt="" />
        <img className='md:col-span-3 md:row-span-2 w-full h-full' src="https://www.doorhandlestore.com/media/megamenu_dhs/black-door-handles-on-backplate.jpg" alt="" />
        <img className='w-full h-full' src="https://www.doorhandlestore.com/media/megamenu_dhs/black-door-handles-on-backplate.jpg" alt="" />
        <img className='w-full h-full' src="https://www.handles4u.co.uk/custom/upload/images/Category%20Images/Handles/Lever%20Handles.jpg" alt="" />
      </div>
      </div>
      
    </section>
  )
}

export default Photo
