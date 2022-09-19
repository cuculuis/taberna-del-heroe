import Contador from "../Contador/Contador";
import "./itemdetail.css"

const ItemDetail = ({item}) => {

    return ( 
        <div className="card" >
            <img src={item.img} alt="Producto" className="img-producto-detalle"/>
            <h4>{item.nombre}</h4>
            <p>Precio: {item.precio} Rupias</p>
            <span>Stock disponible: {item.stock}</span>
            <p>Descripción: {item.descrip}</p>
            <p>Categoria: {item.category}</p>
            <Contador />
        </div>
)

}

export default ItemDetail;