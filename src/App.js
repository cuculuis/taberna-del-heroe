import { ItemListContainer } from './componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import BarraNav from './componentes/NavBar/Navbar';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Contacto from './componentes/Contacto/Contacto';
import Nosotros from './componentes/Nosotros/Nosotros';
import { BolsaProvider } from './context/BolsaContext'
import Bolsa from './componentes/Bolsa/Bolsa';


function App() {

  return (

      <BolsaProvider>
        <BrowserRouter>
          <BarraNav />

          <Routes>
            <Route path='/' element={ <ItemListContainer /> }/>
            <Route path='/productos/:categoryId' element={ <ItemListContainer /> }/>
            <Route path='/item/:itemId' element={ <ItemDetailContainer /> }/>

            <Route path='/Bolsa' element={ <Bolsa /> } />
            <Route path='/Nosotros' element={ <Nosotros /> }/>
            <Route path='/Contacto' element={ <Contacto /> }/>
            <Route path='*' element={ <Navigate to="/" /> }/>

          </Routes>
          
        
        </BrowserRouter>
      </BolsaProvider>

    
  );
}

export default App;
