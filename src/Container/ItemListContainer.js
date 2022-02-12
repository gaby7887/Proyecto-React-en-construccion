import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../Component/ItemList/ItemList';


const ItemListContainer = () => {
    const [product, setProduct] = useState ([]);
//useParams devuelve un objeto
//las llaves son para obtener el atributo que yo quiero de ese objeto
const { categoria } = useParams();


    useEffect(() => {
        const check = async() => {
        let response = await fetch('/listadoProductos.json');
        let json = await response.json();        
        let aux = await json
        setProduct(categoria ? aux.filter(j=>j.categoria===categoria): aux)
        }
        check();
        
    }, [categoria]);
        
    return (

        <>
            <ItemList product={product} />
        </>
        
    )
};

export default ItemListContainer;
