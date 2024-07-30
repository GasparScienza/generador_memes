import { Button, TextField } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'

function ImputsMeme ({ linea1, linea2, exportMeme, img }) {
  const onChangeLinea1 = (e) => {
    linea1(e.target.value)
  }

  const onChangeLinea2 = (e) => {
    linea2(e.target.value)
  }
  const exportar = (e) => {
    exportMeme(e)
  }

  return (
    <div className='input'>
      <TextField onChange={onChangeLinea1} margin='normal' id='outlined-basic' label='Linea 1' variant='outlined' /><br />
      <TextField onChange={onChangeLinea2} id='outlined-basic' label='Linea 2' variant='outlined' /><br />
      <br />
      {img !== ''
        ? <Button variant='outlined' onClick={exportar} color='success' endIcon={<SendIcon />}>Exportar</Button>
        : <Button variant='outlined' color='error'>Exportar</Button>}
    </div>
  )
}

export default ImputsMeme
