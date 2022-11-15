import {Link} from 'react-router-dom'
import './_NavBar.scss'

const NavBar = ({color}) => {
  return (
    <nav className='navbar'>
      <ul className='navbar__list'>
        <li className={`navbar__link navbar__list-${color}`}><Link to='/'>Inicio</Link></li>
        <li className={`navbar__link navbar__list-${color}`}><Link to='/tienda'>Tienda</Link></li>
      </ul>
    </nav>
  )
}

export default NavBar
