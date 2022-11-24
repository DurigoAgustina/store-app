import Button from '../Button/Button'
import Title from '../Title/Title'
import { Link } from 'react-router-dom'
import './_Card.scss'

const Card = ({img, title, price, id}) => {
  return (
    <div className='card'>
      <Link to={`/producto/${id}`}>
        <img src={img} className='card__img'/>
      </Link>
      <div className='card__info'>
        <Title Type='h3'>{title}</Title>
        <p className='card__price'>${price}</p>
          <Button variant='primary'>
            Agregar al carrito</Button>
      </div>
    </div>
  )
}

export default Card