import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../../store/slices/products/thunks';
import Card from '../../commons/Card/Card'
import './_GridCard.scss'

const GridCard = ({ limit }) => {

  const dispatch = useDispatch();
  const {products} = useSelector( state => state.products);

  useEffect( () => {
    dispatch( getProducts(0, limit) )
  }, [])
  return (
    <div className='gridcard'>
      {
        products.map( ({id, images, title, price}) => (
          <Card
            img= {images}
            title= {title}
            price= {price}
            id= {id}
            key= {id}
          />
        ))
      }
    </div>
  )
}

export default GridCard
