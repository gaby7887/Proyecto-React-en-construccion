import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ItemDetail from '../Component/ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState ({});

    const {id} = useParams();

    console.log(id);

    console.log(product); 

    useEffect(() => {
      const aux = async() => {
        let response = await fetch('/listadoProductos.json')
        let json = await response.json()
        let auxi = await json.find(j=>j.id===id)
        console.log(auxi)
      }  
      aux();
        
    }, [id]);

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