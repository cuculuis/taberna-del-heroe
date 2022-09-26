import './itemlistcontainer.css'
import { useEffect, useState } from 'react'
import { pedirDatos } from '../../helpers/pedirDatos'
import { ItemList } from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'



export const ItemListContainer = () => {
    
    const { categoryId } = useParams()

    const [producto, setProducto] = useState([])
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        setLoading(true)
        
        pedirDatos()
            .then( (res) => {
                if (!categoryId) {
                    setProducto(res)
                } else {
                    setProducto( res.filter((prod) => prod.category === categoryId) )
                }
            } )
            .catch( (error) => {
                setProducto(error)
            } )
            .finally(() => {
                setLoading(false)
            })
    }, [categoryId])

    
    return(
        <div className="container">
            <h2>Items</h2>
            {
                loading 
                ?   <>
                        <h2>Cargando...</h2>
                        <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                        </div>
                    </>
                : 
                    <ItemList producto={producto} className="row" />

            }

            
        </div>
        )
    }