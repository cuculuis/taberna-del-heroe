import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { pedirDatos } from "../../helpers/pedirDatos";
import ItemDetail from "../ItemDetail/ItemDetail";



const ItemDetailContainer = () => {
    
    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)
    const {itemId} = useParams()


    console.log(itemId)
    console.log(item)

    useEffect(() => {
        
        setLoading(true)
        
        pedirDatos()
        .then( (res) => {
                setItem( res.find((prod) => prod.id === Number(itemId)) )})
        .catch( (error) => {
            setItem(error)
            console.log(error)
        } )
        .finally(() => {
            setLoading(false)
        })
}, [])

    return ( 
        <div>
            {
                loading?
                    <>
                        <h2>Cargando...</h2>
                        <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                        </div>
                    </>
                    : <ItemDetail item={item} />
    
            }
        </div>
        
    );
}

export default ItemDetailContainer;