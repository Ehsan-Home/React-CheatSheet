import React, { useContext } from 'react'
import nameContext from '../Contexts/NameContext'

const NameHeader = () => {
    const {name,setName} = useContext(nameContext)
    return (
        <>
        <h1 className="ui header">Hook context:</h1>
        <h3 className="ui header">{name}</h3>
        <button className="ui button orange"
        onClick={() => setName("Sasan")}>Set value to Sasan</button>
        <div>
        This button will change the context value and make all components to rerender
        </div>
        </>
    )
}

export default NameHeader