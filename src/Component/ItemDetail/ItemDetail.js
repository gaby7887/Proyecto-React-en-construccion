import {useState} from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import {Card, CardContent, CardMedia, Typography} from '@mui/material';

 
const ItemDetail = ({product, onAdd}) => {

  const {stock} = product
  
  
  return (

    <Card className="card" style={{margin: 80}} sx={{ maxWidth: 345 }}>
    <CardContent className="cardInd">
      <CardMedia className='img'
          component="img"
          height="180"
          image={product.imagen}
          alt={product.title}
      />
      <Typography gutterBottom variant="h5"  component="div">
        {product.title}
      </Typography>
      <Typography variant="h5" color="text.secondary">
        {product.precio}
      </Typography>
      <Typography>
        <ItemCount> stock={stock} initial={1} onAdd={onAdd}</ItemCount>
        <Link to='/cart'><button>Terminar compra</button></Link>
      </Typography>
    </CardContent>
  </Card>
  
  )
};

export default ItemDetail;


