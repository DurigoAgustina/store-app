import Button from '../../components/commons/Button/Button'
import Title from '../../components/commons/Title/Title'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import './_SingleProduct.scss'
import { useEffect } from 'react'
import { getSingleProduct } from '../../store/slices/singleProduct/thunks'

const SingleProduct = () => {

  const dispatch = useDispatch();
  const { singleProduct, isLoading } = useSelector( state => state.singleProduct );

  const { images, price, title, description } = singleProduct;

  const { id } = useParams();

  useEffect(() => {
    dispatch( getSingleProduct( id ) )
  },[])

  return (
    <div className='single-product container'>
      {
        isLoading
          ?
            <h2>Cargando...</h2>
          :
            <>
              <div className='single-product__image'>
                <img src={images} alt={title} className='single-product__photo'/>
              </div>
              <div className='single-product__info'>
                <Title Type='h1' className='single-product__title'>{title}</Title>
                <p>{description}</p>
                <span className='single-product__price'>${price}</span>
                <Button variant='primary' className='single-product__button'>Añadir al carrito</Button>
              </div>
            </>
      }
    </div>
  )
}

export default SingleProduct
