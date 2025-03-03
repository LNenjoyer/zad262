import React,{useState} from "react";
function Counter(){

    const [count, setCount]=useState(0);

    function handleCountUp(){
        setCount(c=>c+1);
    }
    function handleCountDown(){
        setCount(c=>c-1);
    }
    function handleReset(){
        setCount(0);
    }
    return(
        <>
        <p>{count}</p>
        <button onClick={()=>handleCountUp()}>Up</button>
        <button onClick={()=>handleCountDown()}>Down</button>

        <button onClick={()=>handleReset()}>reset</button>

        </>
    );
}
export default Counter