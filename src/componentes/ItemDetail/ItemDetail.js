import Contador from "../Contador/Contador";
import "./itemdetail.css"
import { useContext, useState } from "react";
import { BolsaContext } from "../../context/BolsaContext";
import { Link } from "react-router-dom";

const ItemDetail = ({item}) => {

    const [cantidad, setCantidad] = useState(0)

    const { bolsa, addToBolsa, isInBolsa } = useContext(BolsaContext)
    console.log(bolsa)

    const agregarBolsa = () => {
        const itemToBolsa = {
            id: item.id,
            nombre: item.nombre,
            precio: item.precio,
            cantidad
        }
        
        
        addToBolsa( itemToBolsa )
    }

    return ( 
        <div className="card" >
            <img src={item.img} alt="Producto" className="img-producto-detalle"/>
            <h4>{item.nombre}</h4>
            <p>Precio: {item.precio} Rupias</p>
            <span>Stock disponible: {item.stock}</span>
            <p>Descripción: {item.descrip}</p>
            <p>Categoria: {item.category}</p>

            {
                isInBolsa(item.id)
                ? 
                <Link to="/Bolsa" className="btn btn-success my-2"> Terminar mi compra</Link>
                :
                <Contador 
                    max={item.stock}
                    count={cantidad}
                    setCount={setCantidad}
                    agregar={agregarBolsa}
                />
            }
            

        </div>
)

}

export default ItemDetail;