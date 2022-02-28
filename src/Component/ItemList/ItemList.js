import React from "react";
import Item from "../Item/Item";

const ItemList = ({productosData}) => {


  return (
    <div className="listaProductos">
        {productosData.map((productoData) => 

            <div key={productoData.id}>
                <Item productoData={productoData} />
            </div>
        )}

    </div>
    )
};

export default ItemList;
