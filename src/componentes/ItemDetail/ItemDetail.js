import { useEffect, useState } from "react";

const ItemDetail = () => {
    
    const [objeto, setObjeto] = useState()
    const [id, setId] = useState(201)
    const [cargando, setCargando] = useState(true);

    
    const siguienteObj = () => {
        setId(id+1)
    }
    
    const atrasObj = () => {
        if(id > 201) {
            setId(id-1)
        }
    }

    console.log(objeto)
// INICIO DE LA PROMESA

useEffect(() => {
    
    fetch(`https://botw-compendium.herokuapp.com/api/v2/entry/${id}`)
        .then((resp) => resp.json())
        .then((data) => {
            setObjeto(data);
            setCargando(false)
            })
        .catch(error => {setCargando(false);
                        console.log(error)})
        
    }, [id])
// FIN DE LA PROMESA  



    return ( 
        <div className="container my-5">
            <h2>Items de aventura</h2>
            <hr />

            {
                cargando?
                    <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                    </div>
                :
                    <div className="card" >
                        <img src={objeto.data.image} className="card-img-top" alt={objeto.data.name} />
                        <div className="card-body">
                            <h3>{objeto.data.name}</h3>
                            <p className="card-text">Categoria: {objeto.data.category}</p>
                            <p className="card-text">Ataque: {objeto.data.attack}</p>
                            <p className="card-text">Defensa: {objeto.data.defense}</p>
                            <p className="card-text">Descripción: {objeto.data.description}</p>
                            <button onClick={atrasObj} disabled={id === 201} className="btn btn-primary">Atras</button>
                            <button onClick={siguienteObj} className="btn btn-primary">Siguiente</button>
                        </div>
                    </div>
}

        </div>
)

}

export default ItemDetail;