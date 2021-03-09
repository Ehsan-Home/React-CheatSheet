import React, { useContext } from 'react'
import nameContext from '../Contexts/NameContext'
import NameHeader from './NameHeader'

const Name = () => {
    const {name} = useContext(nameContext)

    return (
        <>
        <div>Name : {name}</div>
        <div class="ui divider"></div>
        <NameHeader />
        <div class="ui divider"></div>
        </>
        
    )
}

export default Name