import './App.css';
import './Components/Cabecera.jsx';
import Cabecera from './Components/Cabecera.jsx';
import Footer from './Components/Footer.jsx';
import Cuerpo from './Components/Cuerpo.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      
      <Cabecera/>

      <Cuerpo/>

      <Footer />

      
        
      </header>
    </div>
  );
}

export default App;
