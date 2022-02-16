import React, { useContext } from "react";
import Item from "../Item/Item";
import { CartContext } from "../../Context/CartContext";

const ItemList = ({product}) => {



const producto = useContext(CartContext);
    console.log(producto);
    
  return (
    <div className="listaProductos">
        {product.map((product) => 

            <div key={product.id}>
                <Item product={product} />
            </div>
        )}

    </div>
    )
};

export default ItemList;
