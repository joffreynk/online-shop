import React from 'react'
import { Link } from "react-router-dom";

const Routing = () => {
  return (
    <ul>
      <li><Link to="/" >Heome</Link></li>
      <li><Link to="/shop"  >Shop</Link></li>
      <li><Link to="/featured"  >Featured</Link></li>
      <li> <Link to="/blog"  >Blog</Link></li>
      <li><Link to="/contact"  >Contact us</Link></li>
      <li><Link to="/about"  >About us</Link></li>
    </ul>
  )
}

export default Routing
