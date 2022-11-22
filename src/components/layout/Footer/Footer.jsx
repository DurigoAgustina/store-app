import { Link } from 'react-router-dom'
import NavBar from '../../commons/NavBar/NavBar'
import './_Footer.scss'

const Footer = () => {
  return (
    <>
      <footer className='footer'>
        <div className='container'>
          <p className='footer__logo'><Link to='/'>StoreApp</Link></p>
          <div className='footer__nav'>
            <NavBar />
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer