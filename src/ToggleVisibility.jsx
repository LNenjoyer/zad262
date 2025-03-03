import React,{useState} from "react";
function ToggleVisibility(){

    const [showText,setShowText]=useState(false);
    const [pass,setPass]=useState();
    function handlePass(event){
        setPass(event.target.value);
    }

    function handleShowText (){
        setShowText(showText ===false? true: false);
    }
    return(
        <div>
            <button onClick={()=>handleShowText()}>{showText===false?
                    "Pokaż":"Ukryj"}</button>
            <p>{showText ===true?<input type="text" defaultValue={pass} onChange={handlePass}/>:""}</p>
        </div>
    );

}
export default ToggleVisibility