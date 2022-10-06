import { useState } from "react";

const Counter = () => {
    const initial = 0
    const [count, setCount] = useState(initial)

    const decrement = () => {
        if(count > 0) {
            setCount(count - 1)
        }
    }

    const increment = () =>{
        setCount(count + 1)
    }


    return (
        <div>
            <h1>{count}</h1>
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
            <button>Agregar al carrito</button>
        </div>
    )
} 

export default Counter


// funcion a pasaar a la prop onAdd
// const handOnAdd = ()=> console.log('Agregar al carrito)