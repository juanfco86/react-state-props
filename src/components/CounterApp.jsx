import { useState } from 'react'

const CounterApp = ({ value = 0 }) => {
    const [counter, setCounter] = useState(value);

    const increaseValue = () => {
        setCounter( counter + 1 );
    }

    const decreaseValue = () => {
        if (counter > 0) {
            setCounter( counter - 1 );
        }
    }

    const resetValue = () => {
        // 2 FORMS - SAME RESULT
        // setCounter( counter - counter );
        setCounter( value = 0 );
    }
    

    return (
        <>
            <div>{ counter }</div>
            <button onClick={ increaseValue }>+</button>
            <button onClick={ decreaseValue }>-</button>
            <button onClick={ resetValue }>Reset</button>
        </>
    )
}

export default CounterApp