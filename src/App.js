import { useState } from 'react';
import './App.css';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

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
          </Select> <br/>
          </FormControl>
        </Box>
      </div>
      <div className='input'>
        <TextField onChange={onChangeLinea1} margin="normal" id="outlined-basic" label="Linea 1" variant="outlined" /><br/>
        <TextField onChange={onChangeLinea2} id="outlined-basic" label="Linea 2" variant="outlined" />
      </div>

      <Button variant="outlined">Exportar</Button>

      <div>
        <span>{linea1}</span><br/>
        <span>{linea2}</span><br/>
        {imagen != '' 
          ? <img src={'/img/' + imagen} width={"500px"} />
          : <></>
        }
      </div>
    </div>
  );
}

export default App;
