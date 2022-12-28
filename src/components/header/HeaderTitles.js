import React from 'react'
import {BiSearch} from 'react-icons/bi'
import {BsHeart, BsCartCheck} from 'react-icons/bs'
import {AiOutlineUser} from 'react-icons/ai'
import { Link } from 'react-router'

const HeaderTitles = () => {
  return (
    <div >
        <p>ecommerce</p>
        <ul>
            <li><Link to="/">Heome</Link></li>
            <li><Link to="/">Shop</Link></li>
            <li><Link to="/">Featured</Link></li>
            <li> <Link to="/">Blog</Link></li>
            <li><Link to="/">Contact us</Link></li>
            <li><Link to="/">About us</Link></li>
        </ul>

        <ul>
            <li>< BiSearch/></li>
            <li><AiOutlineUser/></li>
            <li><BsHeart /></li>
            <li> <BsCartCheck/></li>
        </ul>
        
    </div>
  )
}

export default HeaderTitles