import React from 'react'
import './navigation.css'
import { useState } from 'react'
import IMG1 from '../../assets/logo.png'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <img src={IMG1} alt="" />
        <ul className='nav-bar'>
          <li><a href="">Produtos</a></li>
          <li><a href="">Lançamentos</a></li>
          <li><a href="">Mais Vendidos</a></li>
          <li><a href="">Fale Conosco</a></li>
          <li><a href="">Sobre Nós</a></li>
        </ul>
    </nav>
  )
}

export default Nav