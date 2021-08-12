import PropTypes from 'prop-types'


// Button has two props
const Button = ({ color, text }) => {
    const onClick = () => {
        console.log('click')
    }
    
    return (
        <div>
        {/* setting up and event on button */}
             <button 
            //  setting up function onClick... go to line under button component
                onClick={onClick}   
                style={{backgroundColor: color }}className='btn'>{text}</button>
        </div>
    )
}

Button.defaultProps = {
    color: 'steelblue',
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
}


export default Button