import React from 'react'
import LanguageContext from '../Contexts/LanguageContext'

// const Button = () => {
//     return (
//         <button className="ui button primary">Submit</button>
//     )
// }

class Button extends React.Component {
    static contextType = LanguageContext
    render() {
        console.log(this.context)
        return (
            <button className="ui button primary">Submit</button>
        )
    }
}

export default Button