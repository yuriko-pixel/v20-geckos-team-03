import React from 'react'
import {Link} from 'react-router-dom'
import headerstyle from '../styles/headerstyle.css'

const Header = ()=> {
  return (
    <div>
      <ol>
        <Link to=""><li>Home</li></Link>
        <li>About</li>
        <li>Terms</li>
        <li>Contact</li>
        <li>Cart</li>
      </ol>
    </div>
  )
}
export default Header