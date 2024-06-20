import './Meme.css';

function Meme({img, l1, l2}) {
    return ( 
        <div className='meme' id='meme'>
        <span className='linea1'>{img !== '' ? l1 : <></>}</span>
        <span className='linea2'>{img !== '' ? l2 : <></>}</span>
        {img !== '' ? <img src={'/img/' + img} width={"100%"} alt={img}/> : <></>}
      </div>
     );
}

export default Meme;