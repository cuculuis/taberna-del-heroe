import { useContext } from "react";
import { BolsaContext } from "../../context/BolsaContext";
import { Link } from "react-router-dom";
import BolsaItem from "../BolsaItem.js/BolsaItem";



const Bolsa = () => {

    const { bolsa, bolsaTotal, vaciarBolsa } = useContext(BolsaContext)


    if (bolsa.length === 0) {
        return (
            <div className="container my-4">
                <h2>Tu bolsa esta vacia</h2>
                <hr />

                <Link to="/" className="btn btn-outline-primary">Ir a comprar</Link>
            </div>
        ) 
    }

    return ( 
        <div className="container">
            <h2 className="my-4">Tu bolsa</h2>
            <hr />

            { bolsa.map((item) => 
            (
                <BolsaItem item={item} /> 
                    // <div className="col-4" key={item.id}>
                    //     <h3>{item.nombre}</h3>
                    //     <p>Precio: {item.precio} Rupias</p>
                    //     <small>Cantidad: {item.cantidad}</small>
                    //     <button onClick={() => removeToBolsa(item.id)} className="btn btn-warning mx-2"><BsFillTrashFill/></button>
                    //     <hr />
                    // </div>
            )

            ) }


                <h2>Total: {bolsaTotal()} Rupias</h2>
                <button onClick={vaciarBolsa} className="btn btn-danger">Vaciar bolsa</button>
        </div>

    );
}

export default Bolsa