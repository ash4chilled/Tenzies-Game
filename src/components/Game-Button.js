import React from 'react'
import '../App.css'
import dotImage from '../images/dot.png'

export const Button = ({ onButtonPress,object}) =>{
    var empty = new Array(object.title).fill('')
    const displayElements = empty.map( dot => 
        <img 
            key = {dot.id}
            className = 'w-4 h-4'
            alt = "DotImage"
            src= {dotImage} />
    )

    const mindTheGap = (title) =>{
        if(title === 4 )
            return 'grid-cols-2 gap-2'
        if( title === 1 )
            return 'gap-0'
        if(title === 2 || title === 6)
            return 'grid-cols-2 gap-3'
            if(title ===3)
            return 'grid-cols-3 gap-2'
        if(title ===5)
            return 'grid-cols-2 grid-rows-3 gap-2'
        
    }
    
    return(
        <div
            className = {`flex items-center justify-center w-24 h-24 rounded-md m-2 drop-shadow-lg border-black border-button border-inherit ${object.clicked ? 'bg-navajo' : ''}`}
            onClick={() => {onButtonPress(object) }}
        >
          <div className={
                `inline-grid  ${mindTheGap(object.title)} `}>{displayElements}</div> 
        </div>
    )
}
