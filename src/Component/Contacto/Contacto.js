import React, { useState} from 'react';
import './Contacto.css';

//FIREBASE
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';

import TextField from '@mui/material/TextField';
import MessageSuccess from '../MessageSuccess/MessageSuccess';

const initialState = {
    name: '',
    phone: '',
    email: '',
};


const Contacto = () => {
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
}

export default Contacto