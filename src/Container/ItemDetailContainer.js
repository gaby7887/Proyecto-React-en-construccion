import React, { useContext, useEffect, useState } from 'react';
import ItemDetail from '../Component/ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { useCartContext } from '../Context/CartContext';
import loading from '../Imagenes/loading.gif';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//FIREBASE - FIRESTORE
import { collection, query, where, getDocs, documentId } from 'firebase/firestore';
import { db } from '../Component/firebase/firebaseConfig';
import { CartContext  } from '../Context/CartContext';

const ItemDetailContainer = () => {
    const [productoData, setProductoData] = useState([]);
    const id = useParams();
    
    let productoId = id.id;
    
    const [open, setOpen] = useState(true);
    const {addItem} = useCartContext(productoData);
    const {cart} = useContext(CartContext)

    useEffect (() => {
        const getProductoData = async () =>{
            const q = query(collection(db, 'tienda'), where(documentId(), "==", productoId));
            const docs = [];
            const querySnapshot = await getDocs(q)
            //console.log(querySnapshot);
            querySnapshot.forEach((doc) => {
                docs.push({...doc.data(), id: doc.id});
            });
            setProductoData(docs[0]);
        };
        getProductoData();

        cart.length === 0 && setOpen(true)
    }, [productoId, cart]);

    const onAdd = (count) => {
      addItem(productoData,count);
      setOpen(false) 
      
      toast.success('😁 Producto Agregado', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored"
        });
       
    };
    
    return ( 
      <>
        <ToastContainer />
        <div>    
          {productoData.length === 0 ? <img src={loading} alt='Logo' className='loading'/> 
          :
          <ItemDetail 
          productoData={productoData} 
          key={productoData.id} 
          product={productoData} 
          onAdd={onAdd} 
          open={open} />
          };
        </div>
      </> 
    )  
}

/* FUNCION USANDO FETCH PARA TRAER MI PRODUCTO (con mi json) 
const ItemDetailContainer = () => {
    const [product, setProduct] = useState ({});
    const [open, setOpen] = useState(true)

    const {addItem} = useCartContext()

    const {id} = useParams();

    useEffect(() => {
      const aux = async() => {
        let response = await fetch('/listadoProductos.json')
        let json = await response.json()
        let auxi = await json.find(j=>j.id===id)
        setProduct(auxi)
      }  
      aux();
        
    }, [id]);

    const onAdd = (count) => {
      addItem(product,count);
      setOpen(false)
    }

  return (
    <div>
        <Link to={`/detail/${product.id}`} className='Link'> 
            <ItemDetail product={product} onAdd={onAdd} open={open} />
        </Link>
        <p>{product.title}</p>
        <p>{product.precio}</p>
    </div>  
  )
  };*/


export default ItemDetailContainer;