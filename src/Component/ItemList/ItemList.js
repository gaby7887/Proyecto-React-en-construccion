import React from "react";
import Item from "../Item/Item";

const ItemList = ({product}) => {
    
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
