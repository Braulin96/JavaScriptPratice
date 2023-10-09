import React, {useReducer, useState} from 'react'
import { act } from 'react-dom/test-utils'


const reducer = (state, action) => {
    switch(action.type){
        case "increment":
            return {...state, count: state.count + 1 }
        case "showText":
        return {...state, showText: !state.showText }
        default:
            return 'this action does not exist'

    }

}

const ReducerTest = () => {
    const [state, dispatch] = useReducer(reducer, {
        count: 0,
        showTest: true,
    })

    //const [count, setCount] = useState(0)
    //const [showTest, setShowText] = useState (true)

    const handleClick = () => {
        dispatch({type: 'increment'})
        dispatch({type: 'showText'})
        //setCount((count) => count +1)
        //setShowText(!showTest)
    }
  return (
    <div>
        <p className='text-lg'> front end beginners</p>
        <p> {state.count} </p>
        <button onClick={handleClick}>Clique</button>
        {state.showText && <p> Welcome to ReducerTest </p>}

    
    </div>
  )}
export default ReducerTest