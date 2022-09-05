import Item from "../Item/Item"



export const ItemList = ( {producto = []}) => {
    return (
        <div className="container">
            <div className="card-body col">
            { producto.map((prod) => <Item producto={prod} key={prod.id}/>)}
            </div>
        </div>
)}