import React,{useState} from "react";
function TextToggle(){

    const [showText,setShowText]=useState(false)

    function handleShowText (){
        setShowText(showText ===false? true: false);
    }
    return(
        <div>
            <button onClick={()=>handleShowText()}>{showText===false?
                    "Pokaż":"Ukryj"}</button>
            <p>{showText ===true?"dodatkowy text":""}</p>
        </div>
    );

}
export default TextToggle