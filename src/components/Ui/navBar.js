import React from 'react'
import { Link } from 'react-router-dom';

const navBar = () => {
  return (
    <nav>
    <ul>
      <li>
        <Link exact to="/">Home</Link>
      </li>
      <li>
        <Link to="/cart">Cart</Link>
      </li>
      <li>
        <Link to="/logout">Logout</Link>
      </li>
    </ul>
  </nav>
  )
}

export default navBar