import { useDispatch, useSelector } from 'react-redux'
import Title from '../../components/commons/Title/Title'
import GridCard from '../../components/layout/GridCard/GridCard'
import './_StorePage.scss'

const StorePage = () => {

  const dispatch = useDispatch();
  const {isLoading, page} = useSelector(state => state.products);

  return (
    <div className='store-page container'>
      <Title Type="h1">Tienda</Title>
      <GridCard />
    </div>
  )
}

export default StorePage
