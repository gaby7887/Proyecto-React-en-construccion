import React, {useState, useEffect} from 'react';
import ItemList from '../Component/ItemList/ItemList';


const ItemListContainer = () => {
    const [product, SetProduct] = useState ([]);

    useEffect(() => {
        fetch('/listadoProductos.json')
        .then(response => response.json())
        .then((json) => SetProduct(json));
        
    }, []);
  
    return (
        <>
            <ItemList product={product} />;
            
        </>

    )
};



export default ItemListContainer;
