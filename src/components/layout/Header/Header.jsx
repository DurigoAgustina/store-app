import { Link } from 'react-router-dom';
import { CartIcon } from '../../commons/CartIcon/CartIcon';
import NavBar from '../../commons/NavBar/NavBar';
import showCartOffCanvas from '../../../utils/showCartOffCanvas'
import './_Header.scss';
import { useSelector } from 'react-redux';

const Header = () => {

  const {quantityCart} = useSelector(state => state.cart)

  return (
    <>
      <header className='header'>
        <div className='container'>
          <p className='header__logo'><Link to='/'>StoreApp</Link></p>
          <div className='header__nav'>
            <NavBar />
            <button className='header__cart'>
              <CartIcon onClick={showCartOffCanvas} />
              <p className='header__cart-quantity'>{quantityCart}</p>
            </button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header