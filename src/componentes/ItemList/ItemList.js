import Item from "../Item/Item"



export const ItemList = ( {producto = []}) => {
    return (
        <div className="container my-5">
            <div className="card-body row">
            { producto.map((prod) => <Item producto={prod} key={prod.id}/>)}
            </div>
        </div>
)}