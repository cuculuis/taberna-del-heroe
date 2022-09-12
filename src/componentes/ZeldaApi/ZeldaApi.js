import { useEffect, useState } from "react";

const ZeldaApi = () => {
    
    const [objeto, setObjeto] = useState(null)
    const [id, setId] = useState(201)

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
            setObjeto(data)
            })
        .catch(err => console.error(err));
        
    }, [id])
// FIN DE LA PROMESA  



    return ( 
        <div className="container my-5">
            <h2>Items de aventura</h2>
            <hr />

            {
                objeto
                ?
                <>
                    <img src={objeto.data.image} alt={objeto.data.name} />
                    <h3>{objeto.data.name}</h3>
                    <p>{objeto.data.description}</p>
                    <button onClick={atrasObj} disabled={id === 201} className="btn btn-primary">Atras</button>
                    <button onClick={siguienteObj} className="btn btn-primary">Siguiente</button>
                </>
                : null
            }
            {/* <h2>Nombre: {objeto.name}</h2> */}

        </div>
    )
}

export default ZeldaApi;