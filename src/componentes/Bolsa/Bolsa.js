import { useContext } from "react";
import { BolsaContext } from "../../context/BolsaContext";
import { Link } from "react-router-dom";
import BolsaItem from "../BolsaItem.js/BolsaItem";
import Checkout from "../Checkout/Checkout";



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
                <BolsaItem item={item} key={item.id}/> 
            )) }


                <h2>Total: {bolsaTotal()} Rupias</h2>
                <Link to='/Checkout' path={ <Checkout /> } className='btn btn-success mx-2'>Terminar tu compra</Link>
                <button onClick={vaciarBolsa} className="btn btn-danger">Vaciar bolsa</button>

        </div>

    );
}

export default Bolsa