import React, { createContext, useState} from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [card, setCard] = useState([]);
        setCard();

    const addItem = (productId) => {
        const updateProduct = card.map((producto) => {
            productId === producto.id ? { ...producto, cantidad: producto.cantidad + 1} : producto;
        }); 

    setCard (updateProduct);

    };

    //const deleteProduct = () => {

        return (
            <CartContext.Provider value={{card, addItem}}>
                {children}
            </CartContext.Provider>
            
            
    
        );
        
    }


   
