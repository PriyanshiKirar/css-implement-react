import "../App.css"
import css from "../components/Header.module.css"
import React from 'react'

const Header = () => {
  return (
    <div>
        <h1 className='h1'>priya</h1>
        <h2 className={`${css.heading}`}>pinso</h2>
    </div>
  )
}

export default Header