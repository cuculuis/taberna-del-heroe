
const Item = ( {producto}) => {
    return (
        <div>
            <img src={producto.img} alt="Producto"/>
            <h4>{producto.nombre}</h4>
            <p>Precio: {producto.precio}</p>
            <span>Stock disponible: {producto.stock}</span>
            <p>{producto.descrip}</p>
        </div>
    )
}

export default Item