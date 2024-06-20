import { useState } from 'react';
import './App.css';
import html2canvas from 'html2canvas';
import SelectComponent from './components/SelectComponent';
import ImputsMeme from './components/ImputsMeme';
import Meme from './components/Meme';

function App() {

  const [linea1, setLinea1] = useState('');
  const [linea2, setLinea2] = useState('');
  const [imagen, setImagen] = useState('');

  const onChangeLinea1 = function(valor){
    setLinea1(valor);
  }
  const onChangeLinea2 = function(valor){
    setLinea2(valor);
  }

  const onChangeImagen = function(img){
    setImagen(img);
  }
  const exportar = (e) => {
    html2canvas(document.querySelector("#meme")).then(canvas => {
      let img = canvas.toDataURL("image/png");
      let link = document.createElement('a');
      link.download = "meme.png";
      link.href = img;
      link.click();
    });
  }

  return (
    <div className="App">
      <div className='contenedor'>
        <SelectComponent onChangeImg={onChangeImagen}/>
        <ImputsMeme img={imagen} linea1={onChangeLinea1} linea2={onChangeLinea2} exportMeme={exportar}/>
        <Meme img={imagen} l1={linea1} l2={linea2}/>
      </div>
    </div>
  );
}

export default App;
