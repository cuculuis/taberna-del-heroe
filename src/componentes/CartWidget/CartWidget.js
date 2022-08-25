import bolsa from '../../assest/bolsa-vacia.png'
import './cartwidget.css'

export const CartWidget = () => {
    return (
        <div className='contenedor-bolsita'>
            <img src={bolsa} alt='Bolsa de compras' className='bolsita'></img>
        </div>
    )
}