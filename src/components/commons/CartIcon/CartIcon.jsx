import IconCart from '../../../assets/cart-icon.svg'
import './_CartIcon.scss'

export const CartIcon = ({...props}) => {
  return (

    <img src={IconCart} alt='cart icon' className='cart-icon' {...props}/>

  )
}
