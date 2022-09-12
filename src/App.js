// import { ItemListContainer } from './componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import BarraNav from './componentes/NavBar/Navbar';
// import ZeldaApi from './componentes/ZeldaApi/ZeldaApi';

function App() {
  return (
    <div className="App">
      <BarraNav />
      <ItemDetailContainer />
      {/* <ItemListContainer /> */}
    </div>
  );
}

export default App;
