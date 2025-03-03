import React,{useState} from "react";
function Counter(){

    const [count, setCount]=useState(1);

    function handleCount(){
        setCount(c=>c+1);
    }
    function handleReset(){
        setCount(1);
    }
    return(
        <>
        <button onClick={()=>handleCount()}>{count}</button>
        <button onClick={()=>handleReset()}>reset</button>

        </>
    );
}
export default Counter