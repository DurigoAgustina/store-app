import './_Button.scss'

const Button = ({children, variant, className, ...props}) => {
  return (
    <button className={`button button-${variant} ${className}`}{...props}>{ children }</button>


  )
}

export default Button