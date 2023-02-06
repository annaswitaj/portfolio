import React from 'react'
import { Link } from 'react-scroll'
import Pineapple from '../../img/pineapple.png'

const Navigation = () => {
  return (
    <nav className='App-nav'>
      <img
        className='App-nav-img'
        src={Pineapple}
        alt='pineapple'
        load='lazy'
      ></img>
      <ul className='App-nav-ul'>
        <Link
          to='App-aboutme'
          spy={true}
          smooth={true}
          offset={-110}
          duration={500}
        >
          <li>O mnie</li>
        </Link>
        <Link
          to='App-projects'
          spy={true}
          smooth={true}
          offset={-110}
          duration={500}
        >
          <li>Projekty</li>
        </Link>
        <Link
          to='App-technology'
          spy={true}
          smooth={true}
          offset={-110}
          duration={500}
        >
          <li>umiejętności</li>
        </Link>
        <Link
          to='App-contact'
          spy={true}
          smooth={true}
          offset={-110}
          duration={500}
        >
          <li>Kontakt</li>
        </Link>
      </ul>
    </nav>
  )
}
export default Navigation
