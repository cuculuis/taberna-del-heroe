import './itemlistcontainer.css'
import { useEffect, useState } from 'react'
import { ItemList } from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import Loader from '../Loader/Loader'
import { collection, doc, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../firebase/config'



export const ItemListContainer = () => {
    
    const { categoryId } = useParams()

    const [producto, setProducto] = useState([])
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        setLoading(true)
        
        const productosRef = collection(db, 'items')
        const q = categoryId
                    ? query(productosRef, where('category', '==', categoryId))
                    : productosRef

        getDocs(q)
            .then((resp) => {
                const productosDB = resp.docs.map( (doc) => ({id: doc.id, ...doc.data()}) )
                console.log(resp.docs.map( (doc) => ({id: doc.id, ...doc.data()}) ))
                
                setProducto(productosDB)
            })

            .finally( () => {
                setLoading(false)
            })


        
    }, [categoryId])

    
    return(
        <div className="container">
            
            {
                loading 
                ?   <>
                        <Loader />
                    </>
                : 
                    <ItemList producto={producto} className="row" />

            }

            
        </div>
        )
    }