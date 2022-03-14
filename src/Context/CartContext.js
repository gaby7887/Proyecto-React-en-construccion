import React, { createContext, useState, useContext} from "react";

export const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext)

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const isInCart = (id) => {
        const enElCart = cart.some(x => x.id === id)  

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

    const contador=()=>{
        return cart.reduce((acc,el)=> acc + el.qty, 0);   
    }

    const removeItems=(id,toast)=>{
        const newItems = cart.filter(x=> x.id !== id)
        setCart(newItems)
        toast.error("Producto Removido", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            icon: "❌",
            theme: "colored",
          });
    }

    const clearItems=()=>{
        setCart([])
    }

        return (
            <CartContext.Provider value={{cart, addItem, removeItems, clearItems, total, contador}}>
                {children}
            </CartContext.Provider>
        );
    }


   
