import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { pedirDatos } from "../../helpers/pedirDatos";
import ItemDetail from "../ItemDetail/ItemDetail";
import Loader from "../Loader/Loader";



const ItemDetailContainer = () => {
    
    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)
    const {itemId} = useParams()
    
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
                    loading
                    ?
                    <Loader />
                    : 
                    <ItemDetail item={item} />
    
            }
        </div>
        
    );
}

export default ItemDetailContainer;