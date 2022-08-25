import './itemlistcontainer.css'
import { Card } from '../Card/Card'

export const ItemListContainer = () => {
    return(
        <div className="container">
            <div className="row">
                <div className="card col-md-6">
                <Card product="Posion Roja" price="50 Rupias"/>
                </div>
                <div className="card col-md-6">    
                <Card product="Posion Azul" price="40 Rupias"/>
                </div>
                <div className="card col-md-6">
                <Card product="Posion Verde" price="100 Rupias"/>
                </div>
            </div>
        </div>
        )
    }