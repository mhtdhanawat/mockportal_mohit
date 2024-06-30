import { useReducer } from "react"
import { Fragment } from "react"
import { useState } from "react"

const CountReducer = () => {
    const initialValue = {
        name : ''
    }
    const [count, setCount] = useState(initialValue)

    const initialCount = 0

    const INCREASE = 'increase'


    const handleCount = (state, action) => {
        switch(action.type) {
            case INCREASE:
                return state + 1
                break;
            case 'DECREASE':
                return state - 1;
                break;
            case 'INCREAEBY':
                    return state + action.payload;
                break;
            case 'RESET':
                return initialCount
                break;
            default:
                return state
        }
    }

    const [val, setVal] = useReducer(handleCount, initialCount)
    return (
        <Fragment>
            <h1>Recucer - {count && count.name} {val}</h1>
            <button onClick={()=>setVal({
                type: INCREASE
            })}>Increase</button>
            <button onClick={()=>setVal({
                type: 'INCREAEBY',
                payload: 10
            })}>INCREAEBY</button>
        </Fragment>
    )
}

export default CountReducer