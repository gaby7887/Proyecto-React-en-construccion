import React from 'react'
import Alert from '@mui/material/Alert';
import './MessageSuccess.css';

const MessageSuccess = ({purchaseID}) => {
  return (
    <Alert severity="success" className='alert'>
        Gracias por su compra! Su ID de transaccion es: {purchaseID}
    </Alert>
        
  )
}

export default MessageSuccess