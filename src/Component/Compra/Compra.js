import React, { useState} from 'react';
import './Compra.css'; 
import { useCartContext } from '../../Context/CartContext';

//FIREBASE
import { collection, doc, setDoc, updateDoc, increment } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';

import TextField from '@mui/material/TextField';

const Compra = () => {
    const initialState = {
        name: '',
        phone: '',
        email: '',
    };

    const [values, setValues] = useState(initialState);
    const {total, cart, clearItems} = useCartContext();
   
    const onChange = (e) => {
        const {value, name} = e.target;
        setValues({...values, [name]: value})
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        console.log(values);   
        createOrder()  
        }

        const createOrder = () => {
            let order = {
                buyer: {
                    name: values.name,
                    email: values.email,
                    phone: values.phone,
                    dateBuy: new Date()
                },
                item: cart.map((item) => ({
                    id: item.id,
                    title: item.titulo,
                    price: item.precio,
                    qty: item.qty,
                })),
                total: parseFloat(total()),
            }
            console.log(order)

        const orderInFires = async () => {
            const newOrderRef = doc(collection(db, "purchase"));
            await setDoc(newOrderRef, order);
        }
        orderInFires()
        .then((res) =>
        alert(`Compra Confirmada! Su id de compra es: ${res.id}`)
        )
        .catch((err) => console.log(err));

    cart.forEach(async (item) => {
        const itemRef = doc(db, "tienda", item.id);
        await updateDoc(itemRef, {
            stock: increment(-item.qty),
        });
    });
    clearItems();
}       
        
        return (
            <>
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
          </div>
          </>
        )
    }
    
export default Compra