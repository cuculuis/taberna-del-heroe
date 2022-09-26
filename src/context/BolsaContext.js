import { createContext } from "react";
import { useState } from "react";
import Swal from 'sweetalert2';



export const BolsaContext = createContext()

export const BolsaProvider = ({children}) => {
    const [bolsa, setBolsa] = useState([])

    const addToBolsa = (item) => {
        setBolsa( [...bolsa, item] )
    }
    
    const removeToBolsa = (id) => {
        setBolsa( bolsa.filter((item) => item.id !== id) )
    }

    const isInBolsa = (id) => {
        return bolsa.some((item) => item.id === id)
    }
    
    const bolsaQuantity = () => {
        return bolsa.reduce((acc, item) => acc + item.cantidad, 0)
    }  

    const bolsaTotal = () => {
        return bolsa.reduce((acc, item) => acc + item.cantidad * item.precio, 0)
    }

    const vaciarBolsa = () => {
        Swal.fire({
            title: '¿Estas segur@?',
            text: "No podrás revertir esta acción,",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, vaciala'
            }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    '¡Bolsa vaciada!',
                    'Tu bolsa ha sido vaciada',
                    'success'
                    )
                    setBolsa([])
            }
        })
    }

    return (
        <BolsaContext.Provider value={ {
            bolsa,
            addToBolsa,
            removeToBolsa,
            isInBolsa,
            bolsaQuantity,
            bolsaTotal,
            vaciarBolsa
        }
        } >
            {children}


        </BolsaContext.Provider>
    )
}