import { useState } from "react"

const Contador = () => {
    const [count, setCount] = useState(0)

    
    const sumar = () => {
        setCount( count + 1 )
        
    }

    const restar = () => {
        if(count > 0) {
            setCount( count - 1 )
        }
    }

    // useEffect( () => {
    //     console.log("Contador Montado!")
    // } , [])

    return (
        <div className="">
            <h2>Cantidad</h2>

            <button  onClick={restar} className="btn btn-outline-dark">-</button>
            <span className="mx-2">{count}</span>
            <button onClick={sumar} className="btn btn-outline-dark">+</button>

        </div>
    )

}

export default Contador