import React from 'react'
// Profile section
export default function ProfileContact() {
  return (
    <div className='flex flex-col gap-3 p-4'>
      <img className="mx-auto h-[250px] aspect-square rounded-full" src="https://media.licdn.com/dms/image/v2/D4D03AQH3Cnn2Kl5azA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1722909910534?e=1732752000&v=beta&t=_F4xx1sRWUIZ2urorlNSldvqtF3mrnzFHqnsgoWF9lU" alt="me"/>
      <h1 className='font-bold text-4xl sm:text-5xl'>Danielle Equere</h1>
      <h2 className='font-semibold text-xl sm:text-2xl'>Front End Developer</h2>
      <button className='p-2 rounded-full bg-moonstone text-anti-flash-white text-lg sm:text-xl 
      hover:bg-mustard hover:text-raisin-black font-semibold'><a href="mailto:dework09@gmail.com">Email Me</a></button>
    </div>
  )
}
