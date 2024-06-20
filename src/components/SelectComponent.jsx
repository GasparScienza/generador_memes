import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const SelectComponent = ({onChangeImg}) => {
    
    const onChangeImagen = (img) =>{
        onChangeImg(img.target.value);
    }

    return ( 
        <div className='box-contenedor'>
            <Box className="box" sx={{ minWidth: 120, maxWidth: 300}}>
                <FormControl fullWidth >
                    <InputLabel id="demo-simple-select-label">Imagenes</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        onChange={onChangeImagen}  
                        label="Imagenes">
                        <MenuItem value="">...</MenuItem>
                        <MenuItem value="llamas.jpg">Casa en llamas</MenuItem>
                        <MenuItem value="futurama.jpg">Futurama</MenuItem>
                        <MenuItem value="Aliens.jpg">History</MenuItem>
                    </Select> 
                </FormControl>
            </Box>
      </div>
     );
}

export default SelectComponent;