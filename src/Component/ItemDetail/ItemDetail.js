import React from 'react';
import ItemCount from '../ItemCount/ItemCount';

import {Card, CardContent, CardMedia, Typography} from '@mui/material';

const ItemDetail = ({product}) => {
  
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
        <ItemCount stock={6} initial={1}/>
      </Typography>
  
    </CardContent>
  </Card>

  
  )
};

export default ItemDetail;


