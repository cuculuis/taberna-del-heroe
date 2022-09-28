import { useContext, useState } from "react"
import { Navigate } from "react-router-dom"
import { BolsaContext } from "../../context/BolsaContext"
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../../firebase/config'


const Checkout = () => {
    
    const { bolsa, bolsaTotal, finalizarCompra } = useContext(BolsaContext)

    const [values, setValues] = useState({
        nombre: '',
        apellido: '',
        email: '',
        numTlf: '',
        direccion: '',
    })

    const handleCambioInput = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const enviadoDeForm = (e) => {
        e.preventDefault()

        
        const orden = {
            comprador: values,
            fecha: Date(),
            items: bolsa,
            total: bolsaTotal()
            }
        
        if (values.nombre.length < 2) {
            alert('Nombre incorrecto')
            return
        }

        if (values.email.length < 2) {
            alert('Email incorrecto')
            return
        }

        const ordenesRef = collection(db, 'ordenes')

        addDoc(ordenesRef, orden)
            .then((doc) => {
                console.log(doc.id)
                finalizarCompra(doc.id)
            })
    }

    if (bolsa.length === 0) {
        return <Navigate to="/"  />
    }
    
    return (  
        <div className="container my-3">
            <h2>Checkout</h2>
            <hr />

            <form onSubmit={enviadoDeForm} className="container">
                <div className="row">
                    <div className="col-6">
                        <input  
                                name="nombre"
                                value={values.nombre}
                                onChange={handleCambioInput}
                                type={'text'} 
                                className='my-3 form-control' 
                                placeholder="Nombre" 
                        />
                    </div>
                    <div className="col-6">
                        <input  
                                name="apellido"
                                value={values.apellido}
                                onChange={handleCambioInput}
                                type={'text'} 
                                className='my-3 form-control' 
                                placeholder="Apellido" 
                        />
                    </div>

                    
                </div>
                <div className="row">
                    <div className="col-6">
                        <input  
                                name="email"
                                value={values.email}
                                onChange={handleCambioInput}
                                type={'email'} 
                                className='col-8 my-3 form-control' 
                                placeholder="Email" 
                        />
                    </div>
                    <div className="col-6">
                        <input  
                                name="numTlf"
                                value={values.numTlf}
                                onChange={handleCambioInput}
                                type={'text'} 
                                className='col-4 my-3 form-control' 
                                placeholder="Numero de telefono" 
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="col-12">
                        <input  
                                name="direccion"
                                value={values.direccion}
                                onChange={handleCambioInput}
                                type={'text'} 
                                className='col-12 my-3 form-control' 
                                placeholder="Direccion" 
                        />
                    </div>
                </div>
                
                <button type="submit" className="btn btn-success">Enviar</button>
            </form>
            
        </div>

    );
}

export default Checkout;