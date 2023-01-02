import banner from '../../../assets/banner-01.jpg'
import './_HeroSection.scss'

const HeroSection = () => {
  return (
    <>
      <section className='hero'>
        <img src={banner} className='hero__banner' />
      </section>
    </>
  )
}

export default HeroSection
