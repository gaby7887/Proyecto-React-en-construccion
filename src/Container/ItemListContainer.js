import React, {useState, useEffect} from 'react';
import ItemList from '../Component/ItemList/ItemList';
import loading from '../Imagenes/loading.gif';

//FIREBASE - FIRESTORE
import { collection, query, getDocs } from 'firebase/firestore';
import { db} from '../Component/firebase/firebaseConfig';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
    const [productosData, setProductosData] = useState([]);
    const {categoria} = useParams();

    useEffect (() => {
        const getProductos = async () =>{
            const q = query(collection(db, 'tienda'));
            const docs = [];
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                docs.push({...doc.data(), id: doc.id});
            });

            const filtroCategoria = categoria ? docs.filter(docs => docs.categoria === categoria) : docs;
             
             setProductosData(filtroCategoria)     
        };
        getProductos();
    }, [categoria] );
    
    return productosData.length === 0 ? <img src={loading} alt='logo' className="loading" /> : <ItemList productosData={productosData} />;                 
}


////////
/*FUNCION PARA TRAER MI API (JSON)
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
};*/

export default ItemListContainer;
