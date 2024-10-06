import React from 'react'

export default function Layout(props) {
  const { children } = props
  return (
    <div className='min-h-screen flex flex-col relative'>
      <main className='flex flex-col flex-1'>
          {children}
      </main>
    </div>
  )
}
