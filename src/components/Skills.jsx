import React from 'react'
import Experience from './Experience'

// Skkills section of resume portfolio
export default function Skills() {
  const skillSet = {
      JavaScript: ['React', 'Node.js', 'Express.js', 'Typescript', 'Angular'],
      Web: ['HTML', 'CSS', 'TailwindCSS', 'WordPress', 'SQL', 'MySQL', 'PHP', 'Git', 'AWS', 'Docker'],
      Design: ['Canva', 'Figma', 'Adobe Photoshop'],
      Java: ['Spring Boot'],
  }
  return (
    <div className='flex flex-col gap-4 p-4'>
      <h2 className='font-bold text-2xl md:text-3xl'>Skills</h2>
      
        {Object.keys(skillSet).map((keyName, index) => {
            return (
              <div>
              <h3 className='font-bold text-raisin-black'>{keyName}</h3>
                <div key={index} className='flex items-center gap-2 flex-wrap'>
                    {skillSet[keyName].map((skill, i) => {
                        return (
                          <div key={i} className='rounded font-semibold bg-moonstone text-anti-flash-white px-2 py-1'> 
                            {skill}
                          </div>
                        )
                    }
                )}
                </div>
              </div>
            )
        }
      )}
      {/* <h2 className='font-bold text-2xl md:text-3xl'>Experience</h2>
      <Experience/> */}
    </div>
  )
}
