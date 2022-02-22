import React, { createContext, useState, useContext} from "react";

export const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext)

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const isInCart = (id) => {
        const enElCart = cart.some(x => x.id === id)  
        console.log(enElCart);
        return enElCart
    }

    const getQuantity=(product,count)=>{
        const filtro = [...cart]
        filtro.forEach(i=>{
            if(i.id === product.id){
                i.qty += count
            }
        })

        setCart(filtro)
    }

    const addItem = (product,count) => {
        if(isInCart(product.id)) {
            getQuantity(product, count)
        }else{
            setCart([...cart,{...product,qty:count}])
        }
    };

    const total=()=>{
        const precioTotal = cart.reduce((acc,el)=> acc + (Number(el.precio) * el.qty),0)
        return precioTotal
    }

    const removeItems=(id)=>{
        const newItems = cart.filter(x=> x.id !== id)
        setCart(newItems)
    }

    const clearItems=()=>{
        setCart([])
    }

    console.log(cart)

        return (
            <CartContext.Provider value={{cart, addItem, removeItems, clearItems, total}}>
                {children}
            </CartContext.Provider>
            
            
    
        );
        
    }


   
