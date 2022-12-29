import React from 'react'
import {BiSearch} from 'react-icons/bi'
import {BsHeart, BsCartCheck} from 'react-icons/bs'
import {AiOutlineUser} from 'react-icons/ai'
import {ImMenu} from 'react-icons/im'

const HeaderTitles = () => {
  return (
    <div className='sticky top-0 p-5 flex items-start justify-between max-w-5xl mx-auto z-50' >
        <p>ecommerce</p>
        
        <ul className='flex  text-lg'>
          <li className='hidden sm:block'>
          <ul className='flex space-x-2 sm:space-x-5 text-lg'>
            <li className='hover:underline hover:text-yellow-200'>Shop</li>
            <li className='hover:underline hover:text-yellow-200'>Blog</li>
            <li className='hover:underline hover:text-yellow-200'>Home</li>
            <li className='hover:underline hover:text-yellow-200'>Contact</li>
            <li className='hover:underline hover:text-yellow-200'>About</li>
          </ul>
          </li>
          <li className='sm:hidden'>
            <ImMenu />
          </li>
        </ul>
        <ul className='flex space-x-3 sm:space-x-5'>
            <li>< BiSearch/></li>
            <li><AiOutlineUser/></li>
            <li><BsHeart /></li>
            <li> <BsCartCheck/></li>
        </ul>
    </div>
  )
}

export default HeaderTitles