import './_Button.scss'

const Button = ({children, variant}) => {
  return (
    <button className={`button button-${variant}`}>{ children }</button>


  )
}

export default Button