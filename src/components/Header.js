//Header component



//property types 
import PropTypes from 'prop-types'




const Header = ({ title, greeting }) => {
    return (
        <header>
            <h1 style={headingStyle}>{title}</h1>
            <br />
            <h2 style={headingStyle1}>{greeting}</h2>
            <br />
        </header>
    )
}


Header.defaultProps = {
    title: 'Updated Task Tracker',
}

Header.propTypes = {
    // want this to be a string, so type
    title: PropTypes.string,
    greeting: PropTypes.string,
}


// CSS in JS
const headingStyle = {
    color: 'white',
    padding: 15,
    backgroundColor: 'blue'
}

// CSS in JS
const headingStyle1 = {
    color: 'white',
    backgroundColor: 'black',
    padding: 15,
}



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
