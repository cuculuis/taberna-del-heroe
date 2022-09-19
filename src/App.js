import { ItemListContainer } from './componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import BarraNav from './componentes/NavBar/Navbar';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Contacto from './componentes/Contacto/Contacto';
import Nosotros from './componentes/Nosotros/Nosotros';


function App() {

  return (

    
      <BrowserRouter>
        <BarraNav />

        <Routes>
          <Route path='/' element={ <ItemListContainer /> }/>
          <Route path='/productos/:categoryId' element={ <ItemListContainer /> }/>
          <Route path='/item/:itemId' element={ <ItemDetailContainer /> }/>

          <Route path='/Nosotros' element={ <Nosotros /> }/>
          <Route path='/Contacto' element={ <Contacto /> }/>
          <Route path='*' element={ <Navigate to="/" /> }/>

        </Routes>
        
      
      </BrowserRouter>

    
  );
}

export default App;
