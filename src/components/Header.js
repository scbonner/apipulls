import Button from './Button'
//property types 
import PropTypes from 'prop-types'



//removed props, greeting, after title
const Header = ({ title }) => {
    return (
        <div className='container'>
        <header className='header'>
            <h1>{title}</h1>
            <Button color='green' text='ADD' />
            {/* <h2 style={headingStyle1}>{greeting}</h2> */}
        </header>
        </div>
    )   
}


Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    // want this to be a string, so type
    title: PropTypes.string,
    greeting: PropTypes.string,
}


// CSS in JS
const headingStyle = {
    color: 'black',
    padding: 15,
    backgroundColor: 'orange',
    marginBottom: 20,
}

// // CSS in JS
// const headingStyle1 = {
//     color: 'white',
//     backgroundColor: 'blue',
//     padding: 15,
//     marginBottom: 35,
// }



export default Header



// OR OR OR OR - use below or above code




// const Header = (props) => {
//     return (
//         <header>
//             <h1>{props.title}</h1>
//             <h2>{props.greeting}</h2>
//         </header>
//     )
// }


// Header.defaultProps = {
//     title: 'Updated Task Tracker',
// }


// export default Header
