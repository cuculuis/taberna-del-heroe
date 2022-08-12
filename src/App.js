import logo from './assest/loguito.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          ¡Que bueno verte de vuelta, toma un descanso!.
        </p>
        <a
          className="App-link"
          href="https://youtu.be/axxDdYlVegg"
          target="_blank"
          rel="noopener noreferrer"
        >
          Musiquita de Youtube
        </a>
      </header>
    </div>
  );
}

export default App;
