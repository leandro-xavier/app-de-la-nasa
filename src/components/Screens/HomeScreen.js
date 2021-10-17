import React from 'react'
import { CardNasa } from '../CardNasa'
import { Navigation } from '../Navigation'

export const HomeScreen = () => {
    return (
       <div className="App">
            <Navigation/>
            <CardNasa/>
        </div>
 )
}
