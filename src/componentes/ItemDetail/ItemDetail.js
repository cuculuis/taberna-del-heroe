import Contador from "../Contador/Contador";
import "./itemdetail.css"
import { useState } from "react";

const ItemDetail = ({item}) => {

    const [cantidad, setCantidad] = useState(0)

    const agregarBolsa = () => {
        const itemToCart = {
            id: item.id,
            nombre: item.nombre,
            precio: item.precio,
            cantidad
        }
        console.log(itemToCart)
        // console.log(
        //     ...item,
        //     cantidad
        // )
    }

    return ( 
        <div className="card" >
            <img src={item.img} alt="Producto" className="img-producto-detalle"/>
            <h4>{item.nombre}</h4>
            <p>Precio: {item.precio} Rupias</p>
            <span>Stock disponible: {item.stock}</span>
            <p>Descripción: {item.descrip}</p>
            <p>Categoria: {item.category}</p>
            <Contador 
                max={item.stock}
                count={cantidad}
                setCount={setCantidad}
                agregar={agregarBolsa}
            />
        </div>
)

}

export default ItemDetail;