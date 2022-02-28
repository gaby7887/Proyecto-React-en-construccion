import React, {useState, useEffect} from 'react';
import ItemList from '../Component/ItemList/ItemList';

//FIREBASE - FIRESTORE
import { collection, query, getDocs } from 'firebase/firestore';
import { db} from '../Component/firebase/firebaseConfig';


const ItemListContainer = () => {
    const [productosData, setProductosData] = useState([]);

    useEffect (() => {
        const getProductos = async () =>{
            const q = query(collection(db, 'tienda'));
            const docs = [];
            const querySnapshot = await getDocs(q);
            //console.log('DATA:', querySnapshot);
            querySnapshot.forEach((doc) => {
                docs.push({...doc.data(), id: doc.id});
    
            });
            setProductosData(docs);
        };
        getProductos();
    }, []);

    return (
        <div>{productosData.map((data) => {
            return <ItemList productosData={productosData} />;
        })}</div>
    )
    
}


//////////
/*const ItemListContainer = () => {
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
