import './_Button.scss'

const Button = ({children, variant, className}) => {
  return (
    <button className={`button button-${variant} ${className}`}>{ children }</button>


  )
}

export default Button