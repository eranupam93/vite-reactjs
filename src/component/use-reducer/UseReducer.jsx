import React, { useReducer } from 'react'




const UseReducer = () => {
    const reducer = (state, action) => {

        if (action.type == 'increment') {
            return {
                ...state,
                count: state.count + 1,
                modified_by: action.name

            }
        } else if (action.type == 'decrement') {
            return {
                ...state,
                count: state.count - 1,
                modified_by: action.name

            }
        }

    }
    const [data, dispatch] = useReducer(reducer, {
        'count': 0,
        'modified_by': ''
    })



    return (
        <div>
            <h1>Counter {data.count} and modified by :{data.modified_by}</h1>
            <button onClick={() => dispatch({ type: 'increment', name: 'Anupam' })}>Increment</button>
            <button onClick={() => dispatch({ type: 'decrement', name: 'Sharma' })}>Decrement</button>
        </div>
    )
}

export default UseReducer