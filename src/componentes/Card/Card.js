export const Card = ({product, price}) => {
    return (
        <div className="container">
            <div className="card-body col-md-3">
                <h3>
                    {product}
                </h3>
                <h4>
                    {price}
                </h4>  
            </div>
        </div>
)}