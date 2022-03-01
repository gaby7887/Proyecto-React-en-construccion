import React, { useState, useEffect} from 'react';
//REACT ROUTER DOM
import { useParams } from 'react-router-dom';
//FIREBASE
import { db } from '../firebase/firebaseConfig';
import { collection, query, where, getDocs } from 'firebase/firestore';
//COMPONENTS
import Dropdown from '../dropdown/Dropdown';

const MenuDropdown = () => {
    const [categoriaData, setCategoriaData] = useState([]);

    console.log(categoriaData)
    const {categoria} = useParams()

    useEffect (() => {
        const getCategoriaData = async () =>{
            const q = query(collection(db, 'tienda'), where('categoria', "==", categoria));
            const docs = [];
            const querySnapshot = await getDocs(q);
            //console.log(querySnapshot);
            querySnapshot.forEach((doc) => {
                docs.push({...doc.data(), id: doc.id});
    
            });
            setCategoriaData(docs);
        };
        getCategoriaData();
    }, [categoria]);

    return (
        <div>{categoriaData.map((data) => {
            return <Dropdown categoriaData={data} key={data.id} />;
        })}</div>
    )

}

export default MenuDropdown