import { useState } from "react";
import './ItemCount.css';

const ItemCount = ({stock, initial, onAdd}) => {
    const [counter, setCounter] = useState(initial);

    const handlerCounterUp = () => {
        if (counter < stock){
            setCounter(counter + 1);
        }
    };

    const handlerCounterDown = () => {
        if (counter > initial) {
            setCounter(counter - 1);
        }
    }


return (
    <div className="CounterSection">
        <div className="btnSection">
            <p>Counter: {counter}</p>
            <button className="btn"onClick={handlerCounterUp}>+</button>
            <button className="btn" onClick={handlerCounterDown}>-</button>
            <button className="btn"onClick={()=>onAdd(counter)}>Agregar al Carrito</button>
        </div>
    </div>
)
};

export default ItemCount;