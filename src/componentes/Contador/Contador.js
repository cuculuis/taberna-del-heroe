

const Contador = ({max, count, setCount, agregar}) => {
    

    
    const sumar = () => {
        if ( count < max) {
            setCount( count + 1 )
        }
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
            <h5>Cantidad</h5>

            <button  onClick={restar} className="btn btn-outline-dark">-</button>
            <span className="mx-2">{count}</span>
            <button onClick={sumar} className="btn btn-outline-dark">+</button>
            <br />
            <button onClick={agregar} className="btn btn-outline-success">Agregar a la bolsa</button>
        </div>
    )

}

export default Contador