import Contador from "../Contador/Contador"
import { Link } from "react-router-dom"
import "./item.css"
import { useState } from "react"



const Item = ( {producto}) => {
    
    const [cantidad, setCantidad] = useState(0)

    // const agregarBolsa = () => {
    //     console.log({
    //         ...item,
    //         cantidad
    //     })
    // }
    
    return (
        <div className="col-4 my-3">
            <img src={producto.img} alt="Producto" className="img-producto"/>
            <h4>{producto.nombre}</h4>
            <p>Precio: {producto.precio} Rupias</p>
            <span>Stock disponible: {producto.stock}</span>
            <p>{producto.descrip}</p>
            <Contador 
                max={producto.stock}
                count={cantidad}
                setCount={setCantidad}
            />
            <Link to={`/item/${producto.id}`} className='btn btn-outline-dark'>Ver Más</Link>
        </div>
    )
}

export default Item