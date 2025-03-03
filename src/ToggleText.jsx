import React,{useState} from "react";
function ToggleText(){

    const [toggleText,setToggleText]=useState(1)
    function handleToggleText(){
    setToggleText(toggleText*-1);
    }
    return(
        <>
        <p>{toggleText===1?"Witaj, świecie!":"Hello, World!"}</p>
        <button onClick={()=> handleToggleText()}>zmien</button>
        </>
    );
}
export default ToggleText