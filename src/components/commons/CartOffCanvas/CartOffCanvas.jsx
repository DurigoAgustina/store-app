import './_CartOffCanvas.scss'
import Title from '../Title/Title'
import iconClose from '../../../assets/close.svg'
import showCartOffCanvas from '../../../utils/showCartOffCanvas'
import { useSelector, useDispatch } from 'react-redux'
import Trash from '../../../assets/trash.svg'
import Button from '../Button/Button'
import { removeFromCart, decreaseCart, addToCart, clearCart, getTotals } from '../../../store/slices/cart/cartSlice'
import { useEffect } from 'react'


const CartOffCanvas = () => {

  const cart = useSelector((state) => state.cart)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTotals())
  }, [cart])

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id))
  }

  const handleDecreaseCart = (productsCart) => {
    dispatch(decreaseCart(productsCart))
  }

  const handleIncreaseCart = (productsCart) => {
    dispatch(addToCart(productsCart))
  }

  const handleClearCart = () => {
    dispatch(clearCart([]))
  }
  return (
    <div className='cart-off-canvas'>
      <div className='cart-off-canvas__header'>
        <Title Type='h3'>Carrito de compras</Title>
        <button>
          <img src={iconClose} className='cart-off-canvas__icon-close' onClick={showCartOffCanvas}/>
        </button>
      </div>

      <ul>
        {
          cart.productsCart.length === 0 ? (
            <div>
              <p>El carrito está vacío</p>
            </div>
          ) : (
            <>
              <div className='cart-off-canvas__cart'>
                {
                  cart.productsCart.map(productCart => (
                    <div className='cart-off-canvas__cart-item' key={productCart.id}>
                      <div className='cart-off-canvas__product'>
                        <div className='cart-off-canvas__images'>
                          <button className='cart-off-canvas__trash' onClick={() => handleRemoveFromCart(productCart.id)}><img src={Trash} /></button>
                          <img src={productCart.img} alt={productCart.title} className='cart-off-canvas__img-product' />
                        </div>
                        <div className='cart-off-canvas__price'>
                          <Title Type='h3'>{productCart.title}</Title>
                          <p>${productCart.price}</p>
                          <div className='cart-off-canvas__quantity'>
                            <Button variant='cart' onClick={() => handleDecreaseCart(productCart)}>-</Button>
                            <div className='quantity'>{productCart.cartQuantity}</div>
                            <Button variant='cart' onClick={() => handleIncreaseCart(productCart)}>+</Button>
                          </div>
                        </div>
                        <div className='cart-off-canvas__total'>
                          <Title Type='h3'>Total</Title>
                          ${productCart.price * productCart.cartQuantity}
                        </div>
                      </div>
                    </div>
                  ))
                }
                <div className='cart-off-canvas__summary'>
                  <Button variant='outline' onClick={ () => handleClearCart()}>Limpiar carrito</Button>
                  <div>
                    <div className='cart-off-canvas__subtotal'>
                      <Title Type='h4'>Subtotal</Title>
                      <p className='amount'> ${cart.totalAmountCart} </p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )
        }
      </ul>
    </div>
  )
}

export default CartOffCanvas