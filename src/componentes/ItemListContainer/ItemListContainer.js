import './itemlistcontainer.css'
import { useEffect, useState } from 'react'
import { pedirDatos } from '../../helpers/pedirDatos'
import { ItemList } from '../ItemList/ItemList'



export const ItemListContainer = () => {
    
    const [producto, setProducto] = useState([])
    
    useEffect(() => {
        pedirDatos()
            .then( (res) => {
                setProducto(res)
            } )
            .catch( (error) => {
                setProducto(error)
            } )
    }, [])

    
    return(
        <div className="container">
            <h2>Items</h2>

            <ItemList producto={producto} />

            
            {/* <div className="row">
                <div className="card col-md-4">
                <Card product="Posion Roja" price="50 Rupias"/>
                </div>
                <div className="card col-md-4">    
                <Card product="Posion Azul" price="40 Rupias"/>
                </div>
                <div className="card col-md-4">
                <Card product="Posion Verde" price="100 Rupias"/>
                </div>
            </div> */}
        </div>
        )
    }