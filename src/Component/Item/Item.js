import * as React from 'react';
import './Item.css';
import {Card, CardContent, CardMedia, Typography} from '@mui/material';
import { Link } from 'react-router-dom';
 
const Item = ({product}) => {
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
    <CardContent >
        <Link to={`/detail/${product.id}`} className="repo">Repo</Link>
    </CardContent>
      </CardContent>
    </Card> 
  );
};

export default Item;