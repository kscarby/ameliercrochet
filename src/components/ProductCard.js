import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';


import '../styles/ProductCard.css';
import Img from '../assets/carousel/img2.jpg'
import Img2 from '../assets/carousel/img1.jpg'
import Img3 from '../assets/carousel/img4.jpg'
import Img4 from '../assets/carousel/img12.jpg'
import Img5 from '../assets/carousel/img8.jpg'

const ProductCard = () => {

  const [img, setImg] = useState(Img);
  const [img2, setImg2] = useState(Img2);
  const [img3, setImg3] = useState(Img3);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    height: 450,
    width: 350,
    border: 'none' ,
    outline: 0
  };


  return (
    <div className='app'>
      <div className='card-newproduct'>
          <img className='img-newproduct' src={img} onClick={handleOpen}></img>
          <p className='new-p'>Lançamento</p>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <img className='img-newproduct-modal' src={Img}></img>
            </Box>
          </Modal>
          <div className='card-price'>
            <h1>Produto</h1>
            <h2>R$ 380,00</h2>
            <p>R$ 300,00 à vista com desconto ou 6x R$ 59,80 Sem juros</p>
            <div className='card-buy'>
              <button className='button-buy'>Comprar</button>   
            </div>
          </div>
      </div>
      <div className='card-newproduct'>
          <img className='img-newproduct' src={img2} onClick={() => setImg2(Img4)}></img>
          <p className='new-p'>Lançamento</p>
          <div className='card-price'>
            <h1>Produto</h1>
            <h2>R$ 380,00</h2>
            <p>R$ 300,00 à vista com desconto ou 6x R$ 59,80 Sem juros</p>
            <div className='card-buy'>
              <button className='button-buy'>Comprar</button>   
            </div>    
          </div>
      </div>
      <div className='card-newproduct'>
          <img className='img-newproduct' src={img3} onClick={() => setImg3(Img5)}></img>
          <p className='new-p'>Lançamento</p>
          <div className='card-price'>
            <h1>Produto</h1>
            <h2>R$ 380,00</h2>
            <p>R$ 300,00 à vista com desconto ou 6x R$ 59,80 Sem juros</p>
            <div className='card-buy'>
              <button className='button-buy'>Comprar</button>   
            </div>      
          </div>
      </div>
    </div>
  )
}

export default ProductCard