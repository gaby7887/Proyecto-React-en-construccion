import * as React from 'react';
import './Item.css';
import {Card, CardContent, CardMedia, Typography} from '@mui/material';
import { Link } from 'react-router-dom';
 
const Item = ({productoData}) => {
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
    <CardContent >
        <Link to={`/detail/${productoData.id}`} className="btn shop">Ver info</Link>
    </CardContent>
      </CardContent>
    </Card> 
  );
};

export default Item;