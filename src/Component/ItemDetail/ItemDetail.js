import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import {Card, CardContent, CardMedia, Typography} from '@mui/material';


 
const ItemDetail = ({productoData, onAdd, open}) => {

  const {stock} = productoData;
  
  
  return (

    <Card className="card" style={{margin: 80}} sx={{ maxWidth: 345 }}>
    <CardContent className="cardInd">
      <CardMedia className='img'
          component="img"
          height="180"
          image={productoData.img}
          alt={productoData.titulo}
      />
      <Typography gutterBottom variant="h5"  component="div">
        {productoData.titulo}
      </Typography>
      <Typography variant="h5" color="text.secondary">
        ${productoData.precio}
      </Typography>
      <Typography variant="h6" color="text.secondary">
        Stock: {productoData.stock}
      </Typography>
      <Typography>
        
        {
          open ? <ItemCount stock={stock} initial={1} onAdd={onAdd} />
          :
          <Link to='/cart'><button>Terminar compra</button></Link>
        }
        
      </Typography>
    </CardContent>
  </Card>
  
  )
};

export default ItemDetail;


