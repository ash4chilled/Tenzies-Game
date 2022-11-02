import React, {useEffect, useState} from 'react'

import {Button} from '../src/components/Game-Button'

function App() {
  const [keyObjects, setKeyObjects] = useState(generateKeys())
  const [resetGame, setResetGame] = useState(false)
  const [chances, setChances] = useState(0)
  const [startTime, setStartTime] = useState()
  const [gameTime, setGameTime] = useState()

  function getTime(){
    const d = new Date();
    return d.getTime()
  }


 const keyElements =  keyObjects.map( ( obj) => 
                              <Button 
                                key = {obj.id} 
                                title = {obj.title}
                                onButtonPress = {() => onButtonPress(obj)}
                                object = {obj} /> )
  
  const onButtonPress = (obj) => {
    setKeyObjects( prev => {
        return prev.map( key=> {
           return (key.id === obj.id) && (key.title === obj.title) 
            ? {...key, clicked : !obj.clicked}
            : key
        })
    })
  }
  
  function generateNewKey(){
    return {
      id :  Math.floor((Math.random() * 999999 ) + 10),
      title :  Math.floor((Math.random() * 6 ) + 1),
      clicked : false
    }
  }

  function generateKeys(){
    const newKeys = []
    for(let i = 0 ; i < 10; i++){
      newKeys.push(generateNewKey())
    }
    return newKeys
  }


  useEffect ( ()=> {
    if(resetGame){
      const currentTime = getTime()
      const duration = Math.floor((currentTime-startTime)/1000)
     // const durationInSeconds = (currentTime-startTime)/1000
      setGameTime(duration)
    }
  },[resetGame, startTime])

  useEffect( () => {
    if(chances === 1){
      setStartTime(getTime())
    }

    const result = keyObjects.every( key => {
      if(key.title === keyObjects[0].title && key.clicked){
        return true
      } else return false
    })
    
    setResetGame(result)
    if(result) alert("You Won...!")
  },[keyObjects, chances])


  function getRandomNumbers(){  
    setChances(prevState => prevState + 1)
    
    
     if(resetGame){
        setKeyObjects(generateKeys())
        setChances(0)
     }
     else {
        setKeyObjects(prev => prev.map( key => {
          return key.clicked 
            ? key
            : generateNewKey()
        }))
    }
  }

  return (
    <main className = "bg-ivory flex flex-col h-screen w-screen justify-center items-center px-12 py-12">
      <div className = "bg-off-white drop-shadow-xl rounded-md flex-grow p-4 flex flex-col justify-center items-center">
          <h1 className = "font-bold text-4xl">Tenzies Game</h1>
          <div className = 'flex flex-row flex-wrap' >
           {keyElements}
          </div>
          <button 
            onClick={getRandomNumbers}
            className = 'text-navajo text-5xl rounded-md m-2 px-8 py-6 border-black border-button border-inherit'>
            {resetGame ? 'Reset' : 'Roll'}
          </button> 
      </div>
      {resetGame && 
        <div className ='text-darkNavajo'>
            You took {chances} chances to win the game,  in   {gameTime} secs     
        </div>
      }
    </main>
  );
}

export default App;
