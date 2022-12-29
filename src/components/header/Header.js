import React from 'react'
import shoping from '../../shopping/shop.png'


const Header = () => {
  return (
    <header className='relative bottom-2 flex flex-col justify-between items-end ' >
      <p>
        some textsare here
      </p>
      <div>
        <img src={shoping} alt='' width={200} height={300} />
      </div>
    </header>
  )
}

export default Header