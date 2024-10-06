import React, {useState} from 'react'
import Modal from './Modal'
import pdfFile from './DE Front End Developer Resume.pdf'
// About section
export default function About() {
  const [isOpen, setIsOpen] = useState(false)
  const handleDownload = () => {window.open(pdfFile, '_blank')}

  return (
    <div className='flex flex-col gap-8 p-4 bg-anti-flash-white'>
      <h2 className='font-bold text-2xl md:text-3xl'>About Me</h2>
      <p>I like building creative and practical web applications using front end technologies and frameworks.  For example, my (minimalistic) - and responsive - web portfolio
        was developed with React and Tailwind CSS.
      </p>
      {/* LinkedIn and GitHub links */}
      <h2 className='font-bold text-2xl md:text-3xl'>Info</h2>
        <div className='flex flex-col gap-2'>
            <div className='flex items-center gap-1 text-base relative after:absolute after:bottom-0 after:w-full
              after:h-[2px] after:right-full after:bg-moonstone hover:after:translate-x-full after:duration-300 overflow-hidden'>
                <h3 className='font-semibold'>LinkedIn: </h3>
                <a className='text-moonstone font-semibold' href="https://www.linkedin.com/in/danielleequere">Danielle Equere</a>
              </div>
              <div className='flex items-center gap-1 text-base relative after:absolute after:bottom-0 after:w-full
              after:h-[2px] after:right-full after:bg-moonstone hover:after:translate-x-full after:duration-300 overflow-hidden'>
                <h3 className='font-semibold'>GitHub: </h3>
                <a className='text-moonstone font-semibold' href="https://www.github.com/dane2k5500">dane2k5500</a>
            </div>
        </div>
        {/* Resume and Portfolio buttons */}
        <div className='gap-3 flex flex-col md:grid grid-rows-2 md:grid-cols-2'>
                    <button className='justify items-center py-2 px-1 sm:py-3 sm:px-2 rounded-full bg-raisin-black text-anti-flash-white text-lg sm:text-xl 
                          hover:bg-mustard hover:text-raisin-black font-semibold' onClick={handleDownload} >
                      Resume
                    </button>
                    <button className='justify items-center py-2 px-1 sm:py-3 sm:px-2 rounded-full bg-raisin-black text-anti-flash-white text-lg sm:text-xl 
                          hover:bg-mustard hover:text-raisin-black font-semibold' onClick={()=>setIsOpen(true)}>
                      Portfolio
                    </button>
            </div>
            {/* Modal opening and closing upon Portfolio button and close button clicks */}
            <Modal open={isOpen} onClose={()=>setIsOpen(false)}/>
    </div>
  )
}
