import { useState } from 'react';
import './App.css';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import html2canvas from 'html2canvas';

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
      <div className='box-contenedor'>
        <Box className="box" sx={{ minWidth: 120, maxWidth: 300}}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Imagenes</InputLabel>
            <Select 
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                onChange={onChangeImagen}  
                label="Imagenes">
              <MenuItem value="llamas.jpg">Casa en llamas</MenuItem>
              <MenuItem value="futurama.jpg">Futurama</MenuItem>
              <MenuItem value="Aliens.jpg">History</MenuItem>
          </Select> 
          </FormControl>
        </Box>
      </div>

      <div className='input'>
        <TextField onChange={onChangeLinea1} margin="normal" id="outlined-basic" label="Linea 1" variant="outlined" /><br/>
        <TextField onChange={onChangeLinea2} id="outlined-basic" label="Linea 2" variant="outlined" /><br/>
        <br/><Button variant="outlined" onClick={exportar}>Exportar</Button>
      </div>

      <div className='meme' id='meme'>
        <span className='linea1'>{linea1}</span>
        <span className='linea2'>{linea2}</span>
        {imagen !== '' ? <img src={'/img/' + imagen} width={"100%"} alt={imagen}/> : <></>}
      </div>
    </div>
  );
}

export default App;
