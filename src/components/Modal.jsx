import React from 'react'

export default function Modal({open, onClose}) {
  if (!open) return null
  const projects = [
    {
      name: 'adfdafadfd', 
      link: 'https://www.example.com', 
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt', 
      github: 'https://www.github.com'
    }, 
    {
      name: 'adfdafadfd', 
      link: 'https://www.example1.com', 
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt', 
      github: 'https://www.github.com'
    },
    {
      name: 'adfdafadfd', 
      link: 'https://www.example2.com', 
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt', 
      github: 'https://www.github.com'
    },
  ]
  return (
    // Modal for online portfolio
    <>
      <div className='absolute top-0 left-0 w-screen h-screen bg-raisin-black overflow-x-visible
       text-anti-flash-white shadow z-50 flex flex-col gap-2 md:top-1/2 md:left-1/2 md:-translate-x-1/2
       md:-translate-y-1/2 md:w-[90vw] md:h-[90vh]'>
        <div className='flex justify-between items-center p-6 md:p-4'>
          <h2 className='text-xl'>Projects</h2>
          {/* Close button for modal */}
          <button onClick={onClose} className='hover:rotate-[45deg] text-lg'>x</button>
        </div>
        {/* List of portfolio projects */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-1 bg-anti-flash-white md:p-1 md:gap-1'>
          {projects.map((project, index) => {
            return(
              <div key={index} className='w-full h-full aspect-video md:h-[200px]
               bg-raisin-black text-anti-flash-white flex flex-col gap-2 p-6 md:p-4'>
                  <h1 className='text-lg'>{project.name}</h1>
                  <p className='text-sm flex-1'>{project.description}</p>
                  <div className='grid text-center grid-cols-2 font-semibold text-md'> 
                      <a href={project.link}>Live</a>
                      <a href={project.github}>GitHub</a>
                  </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
    
  )
}
