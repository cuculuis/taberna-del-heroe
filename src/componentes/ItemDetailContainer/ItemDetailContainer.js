import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import Loader from "../Loader/Loader";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/config";



const ItemDetailContainer = () => {
    
    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)
    const {itemId} = useParams()
    
    useEffect(() => {
        
        setLoading(true)
        
        const itemRef = doc(db, 'items', itemId)
        
        getDoc(itemRef)
            .then((doc) => {
                console.log({id: doc.id, ...doc.data()})
                
                setItem({id: doc.id, ...doc.data()})
            })

            .finally( () => {
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