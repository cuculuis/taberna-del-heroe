import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import bolsaVacia from '../../assest/bolsa-vacia.png'
import bolsaLlena from '../../assest/bolsa-llena.png'
import { BolsaContext } from '../../context/BolsaContext'
import './cartwidget.css'

export const CartWidget = () => {

    const { bolsaQuantity } = useContext(BolsaContext)

    const [llena, setLlena ] = useState(false)


    useEffect(() => {
        if (bolsaQuantity() > 0) {
            setLlena(true)
        } else {
            setLlena(false)
        }

    }, [bolsaQuantity]) 

    return (
        <Link to="/Bolsa">
            <div className='contenedor-bolsita'>
                <img src={llena ? bolsaLlena : bolsaVacia} alt='Bolsa de compras' className='bolsita'></img>
                <span className='m-3 align-center'>{bolsaQuantity()}</span>
            </div>
        </Link>
    )
}