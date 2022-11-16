import banner from '../../../assets/banner-01.jpg'
import Title from '../../commons/Title/Title'
import './_HeroSection.scss'

const HeroSection = () => {
  return (
    <>
      <section className='hero'>
        <img src={ banner } className='hero__banner' />
        <div className='hero__info'>
          <Title Type='h2'>PROMOCIONES</Title>
          <Title Type='h2'>ENVÍOS</Title>
          <Title Type='h2'>MEDIOS DE PAGO</Title>
        </div>
      </section>
    </>
  )
}

export default HeroSection
