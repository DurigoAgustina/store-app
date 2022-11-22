import './_Title.scss';
import PropTypes from 'prop-types';

const Title = ({children, Type, color}) => {
  return (
    <Type className={`title title-${Type} title-${color}`}>{ children }</Type>
  )
}

Title.propTypes = {
  Type: PropTypes.string.isRequired,
  color: PropTypes.string
}

export default Title
