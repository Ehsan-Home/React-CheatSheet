import React, { useState } from 'react'
import UserCreate from './UserCreate'

const App = () => {
    const [language, setLanguage] = useState("english")

    const onLanguageChange = language => {
        setLanguage(language)
    }

    return (
        <div className="ui container">
            <br /><br />
            
            <div>Select a langauge</div>
            <i className="flag us" onClick={() => onLanguageChange("english")}/>
            <i className="flag nl" onClick={() => onLanguageChange("dutch")}/>
            <br /><br />
            <UserCreate />
        </div>
    )
}

export default App