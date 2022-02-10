import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ItemDetail from '../Component/ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const [product, SetProduct] = useState ({});

    let id = useParams();

    let userID = id.id;

    console.log(userID);
    console.log(product);

    useEffect(() => {
        fetch(`/listadoProductos.json/${userID}`)
        .then(response => response.json())
        .then((json) => SetProduct(json));
        
    }, [userID]);

  return (
    <div>
        <Link to={`/detail/${product.id}`} className='Link'> 
            <ItemDetail product={product} />
        </Link>

        <p>{product.title}</p>
        <p>{product.precio}</p>
    </div>
    
  )

  };


export default ItemDetailContainer;