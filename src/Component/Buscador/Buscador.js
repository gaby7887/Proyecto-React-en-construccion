/*import { useState } from 'react'
import { TextField } from '@mui/material';

const Buscador = () => {
    const [value, setValues] = useState('');
    const [user, setUser] = useState({});

    const onChangeValue = (e) => {    //evento x convencion es = e
        //console.log(e.target.value);
        setValues(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(user);
        const userInput = value.toLowerCase().replace(/ /g, ''); //Sanitizamos la variable para quitarle los espacios en blanco (expresiones regulares)
        //console.log(userInput);
        if(userInput){           
                fetch(`/listadoProductos.json/${userInput}`)
                    .then(response => response.json())
                    .then(json => console.log(json));
        }
        setValues('');
    }
    
  return (
    <form className='Form' onSubmit={onSubmit}>
    <TextField className='FormBuscar' placeholder='Buscar Producto' variant="outlined" onChange={onChangeValue} value={value}/>
    {/*<Button className='FormBuscar' size='large' variant="contained">Buscar</Button> */}
    //<button>Buscar</button>
//</form> 
//{user.id ? <ItemCard data={user} /> : null}
    
//  );
//}

//export default Buscador */