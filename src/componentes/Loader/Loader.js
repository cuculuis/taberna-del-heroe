import navi from "../../assest/navi.gif"
import "./loader.css"

const Loader = () => {
    return ( 

        <div className="cargando">
            <img src={navi} className="" alt="Navi Cargando"/>
            <h2>Cargando...</h2>
        </div>

    );
}

export default Loader