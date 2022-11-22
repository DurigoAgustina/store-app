import Button from '../Button/Button'
import Title from '../Title/Title'
import './_Card.scss'

const Card = ({img, title, price}) => {
  return (
    <div className='card'>
      <img src={img} className='card__img'/>
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