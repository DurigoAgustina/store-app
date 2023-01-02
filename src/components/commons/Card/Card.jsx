import Button from '../Button/Button'
import Title from '../Title/Title'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import './_Card.scss'
import { addToCart } from '../../../store/slices/cart'
import { productsSlice } from '../../../store/slices/products/productsSlice'

const Card = ({img, title, price, id}) => {
  const dispatch = useDispatch();

  const handleAddToCart = (e) => {
    dispatch(addToCart({
      id,
      title,
      img,
      price,
    }))
  }

  return (
    <div className='card'>
      <Link to={`/producto/${id}`}>
        <img src={img} className='card__img'/>
      </Link>
      <div className='card__info'>
        <Title Type='h3'>{title}</Title>
        <p className='card__price'>${price}</p>
        <Button variant='primary' onClick={() => handleAddToCart(productsSlice)}>
          Agregar al carrito</Button>
      </div>
    </div>
  )
}

export default Card