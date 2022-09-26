import { useContext } from "react";
import { BsFillTrashFill } from "react-icons/bs";
import { BolsaContext } from "../../context/BolsaContext";

const BolsaItem = ({item}) => {

    const {removeToBolsa} = useContext(BolsaContext)

    return ( 
        <div className="col-4" key={item.id}>
            <h3>{item.nombre}</h3>
            <p>Precio: {item.precio} Rupias</p>
            <small>Cantidad: {item.cantidad}</small>
            <button onClick={() => removeToBolsa(item.id)} className="btn btn-warning mx-2"><BsFillTrashFill/></button>
            <hr />
        </div>
    );
}

export default BolsaItem;