import React from 'react'

export default function Modal({open, onClose}) {
  if (!open) return null
  const projects = [
    {
      name: 'React and Tailwind Portfolio Website', 
      link: 'https://dane2k5500.github.io/react-tailwind-portfolio-website/', 
      description: 'I developed a responsive portfolio website using React and TailwindCSS, featuring interactive design and smooth navigation. I included access to a PDF version of my resume and links to various projects. I also implemented reusable components for easy updates and optimized performance for fast loading across devices.', 
      github: 'https://github.com/dane2k5500/react-tailwind-portfolio-website'
    }, 
    {
      name: 'React Image Uploader with Express and Node.js', 
      link: 'https://dane2k5500.github.io/react-image-upload-app/', 
      description: 'This project is an **image uploading system** built using React on the frontend and Express with Node.js on the backend. It enables users to upload images from their local device and securely store them on the server. Note: Since GitHub does not support server side code (e.g., the Node.js portion of this app), the front end will not work.  However, the frontend and backend code is provided in the repository!', 
      github: 'https://github.com/dane2k5500/react-image-upload-app'
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
              <div key={index} className='w-full h-full aspect-video md:h-[250px]
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
