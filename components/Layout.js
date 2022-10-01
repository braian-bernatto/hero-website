import React from 'react'
import Header from './Header'

const Layout = ({ children }) => {
  return (
    <>
      <div className='w-screen h-full flex flex-col flex-wrap'>
        <Header />
        <main className='h-full w-full flex justify-center items-center gap-4 flex-wrap'>
          {children}
        </main>
      </div>
    </>
  )
}

export default Layout
