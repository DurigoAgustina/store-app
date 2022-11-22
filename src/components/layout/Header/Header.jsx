import { Link } from 'react-router-dom';
import { CartIcon } from '../../commons/CartIcon/CartIcon';
import NavBar from '../../commons/NavBar/NavBar';
import './_Header.scss';

const Header = () => {
  return (
    <>
      <header className='header'>
        <div className='container'>
          <p className='header__logo'><Link to='/'>StoreApp</Link></p>
          <div className='header__nav'>
            <NavBar />
            <CartIcon />
          </div>
        </div>
      </header>
    </>
  )
}

export default Header