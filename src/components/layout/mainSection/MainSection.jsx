import Title from '../../commons/Title/Title'
import GridCard from '../GridCard/GridCard'
import './_MainSection.scss'

const MainSection = () => {
  return (
    <main className='main container'>
      <Title Type='h1'>Productos Destacados</Title>
      <GridCard limit={4}/>
    </main>
  )
}

export default MainSection