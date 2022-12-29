import React from 'react'
import HeaderTitles from './HeaderTitles'
import mypic from './backgroundheader.jpeg'

const Header = () => {
  return (
    <header >
      <div className="relative">

        <HeaderTitles />
        <img
        src={mypic}
        alt='my'
        className='z-1 object-fill w-full h-fit'
        />
      </div>
        
    </header>
  )
}

export default Header