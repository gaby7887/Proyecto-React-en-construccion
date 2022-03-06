import React, { useEffect, useState} from 'react';
import './Compra.css';
import SliderCart from '../CartWidget/SliderCart';
import { useCartContext } from '../../Context/CartContext';

//FIREBASE
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';

import TextField from '@mui/material/TextField';
import MessageSuccess from '../MessageSuccess/MessageSuccess';

const Compra = () => {
    const initialState = {
        name: '',
        phone: '',
        email: '',
    };
    const [productoCompra, setProductoCompra] = useState([]);
    const [values, setValues] = useState(initialState);
    const {addItem, precioTotal} = useCartContext();
    //este estado guarda el id de la compra
    const [purchaseID, setPurchaseID] = useState('');

    useEffect(() => {
        const getProductoCompra = async () =>{
        const docRef = await addDoc(collection(db, "purchase"), {
            addItem,
            precioTotal,
            values
          });
          console.log("Document written with ID: ", docRef.id);
          setProductoCompra([addItem, precioTotal, values]);      
    }
    getProductoCompra()
})
    const onChange = (e) => {
        const {value, name} = e.target;
        setValues({...values, [name]: value})
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        console.log(values);     
        }
        setPurchaseID();
        setValues(initialState);   
        
        
        /* STOCK DE PRODUCTOS
        productosData.map( x => { 
        let stocked = parseInt(x.cantidad);
        let productsUpdated = doc(db, "products")
        updateDoc(productsUpdated, {
        stock: (x.stock - stocked)
        })
        
        })*/
        
        
        return (
            <>
            <SliderCart productoCompra={productoCompra} />
      
          <div>
              <h2 className='tituloForm'>Completar el Formulario</h2>
              <form className='formContainer' onSubmit={onSubmit}>
                  <TextField
                  placeholder='Name'
                  name='name'
                  value={values.name}
                  onChange={onChange}
                  style={{margin:10, width: 400}}/>
      
                  <TextField
                  placeholder='Phone'
                  name='phone'
                  value={values.phone}
                  onChange={onChange}
                  style={{margin:10, width: 400}}/>
      
                  <TextField
                  placeholder='Email'
                  name='email'
                  value={values.email}
                  onChange={onChange}
                  style={{margin:10, width: 400}}/>              
              <button className='btnFormulario'>Send</button>
              </form>
              {purchaseID && <MessageSuccess purchaseID={purchaseID}/>}
          </div>
          </>
        )
    }
    


/*const initialState = {
    name: '',
    phone: '',
    email: '',
};


const Compra = () => {
    const [values, setValues] = useState(initialState);
    //este estado guarda el id de la compra
    const [purchaseID, setPurchaseID] = useState('');

    const onChange = (e) => {
        const {value, name} = e.target;
        setValues({...values, [name]: value})
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        //console.log(values);
        const docRef = await addDoc(collection(db, "purchases"), {
            values,
        });
        console.log("Document written with ID: ", docRef.id);
        setPurchaseID(docRef.id);
        setValues(initialState);       
    }

  return (
    <div>
        <h2 className='tituloForm'>Completar el Formulario</h2>
        <form className='formContainer' onSubmit={onSubmit}>
            <TextField
            placeholder='Name'
            name='name'
            value={values.name}
            onChange={onChange}
            style={{margin:10, width: 400}}/>

            <TextField
            placeholder='Phone'
            name='phone'
            value={values.phone}
            onChange={onChange}
            style={{margin:10, width: 400}}/>

            <TextField
            placeholder='Email'
            name='email'
            value={values.email}
            onChange={onChange}
            style={{margin:10, width: 400}}/>
            
        <button className='btnFormulario'>Send</button>
        </form>
        {purchaseID && <MessageSuccess purchaseID={purchaseID}/>}
    </div>
  )
}*/

export default Compra