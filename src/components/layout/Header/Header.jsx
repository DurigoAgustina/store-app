import { Link } from 'react-router-dom';
import NavBar from '../../commons/NavBar/NavBar';
import './_Header.scss';

const Header = () => {
  return (
    <>
      <header className='header'>
        <div className='container'>
          <p className='header__logo'><Link to='/'>StoreApp</Link></p>
          <NavBar />
        </div>
      </header>
    </>
  )
}

export default Header