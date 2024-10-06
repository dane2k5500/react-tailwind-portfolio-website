import React from 'react'
// Object for Experience section
export default function Experience() {
  const experiences = [
    {
        company: 'Online Art Start-Up and Store',
        position: 'Front End Developer',
        description: 'Building apps for various clients'
    }, 
    {
        company: 'Upwork (Various Clients)',
        position: 'Web Developer',
        description: 'Building apps for various clients'
    }, 
    {
        company: 'Indigo Interactive',
        position: 'Software Engineer',
        description: 'Building apps for various clients'
    },
    {
        company: 'Allstate Insurance',
        position: 'Application Developer',
        description: 'Building apps for various clients'
    }
  ]
//   Looping through Experience object - and listing them out in the Skills section
  return (
    <div className='flex flex-col gap-4'>
        {experiences.map((experience, index) => {
            return (
                <div key={index}>
                    <h1 className='font-semibold text-xl text-moonstone'>{experience.company}</h1>
                    <h2 className='font-semibold text-lg'>{experience.position}</h2>
                    <p>{experience.description}</p>
                </div>
            )
        })}
    </div>
  )
}
