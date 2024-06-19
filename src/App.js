import { useState } from 'react';
import './App.css';

function App() {

  const [linea1, setLinea1] = useState('');
  const [linea2, setLinea2] = useState('');
  const [imagen, setImagen] = useState('');

  const onChangeLinea1 = function(valor){
    setLinea1(valor.target.value);
  }
  const onChangeLinea2 = function(valor){
    setLinea2(valor.target.value);
  }

  const onChangeImagen = function(img){
    setImagen(img.target.value)
  }

  return (
    <div className="App">
      <select onChange={onChangeImagen}>
        <option value="llamas">Casa en llamas</option>
        <option value="futurama">Futurama</option>
        <option value="Aliens">History</option>
      </select> <br/>
      <input onChange={onChangeLinea1} type='text' placeholder='Linea 1'/><br/>
      <input onChange={onChangeLinea2} type='text' placeholder='Linea 2'/><br/>
      <button>Exportar</button>

      <div>
        <span>{linea1}</span><br/>
        <span>{linea2}</span><br/>
        <img src={'/img/' + imagen +'.jpg'} />
      </div>
    </div>
  );
}

export default App;
