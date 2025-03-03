import React,{useState,useEffect} from "react";
function CharacterCounter(){

    const [pass,setPass]=useState("");

    function handlePass(event){
        setPass(event.target.value);    
    }

    
    return(
        <div>
            <input type="text" onChange={handlePass}/>
            <p >{pass.length}</p>
        </div>
    )
}
export default CharacterCounter