import React from 'react'
import ProfileContact from './ProfileContact'
import About from './About'
import Skills from './Skills'


export default function Main() {
  return (
    // Three sections of resume portfolio
    <div className='p-4 flex flex-col md:grid grid-cols-3'>
      <ProfileContact/>
      <About/>
      <Skills/>
    </div>
  )
}
