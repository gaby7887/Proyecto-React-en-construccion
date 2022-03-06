import { useState } from "react";

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
            <button className="btn shop" onClick={handlerCounterDown}>-</button>
            <button className="btn shop"onClick={()=>onAdd(counter)}>Agregar al Carrito</button>
            <button className="btn shop"onClick={handlerCounterUp}>+</button>
        </div>
    </div>
)
};

export default ItemCount;