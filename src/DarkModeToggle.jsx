import React,{useState} from "react";
function DarkModeToggle(){

    const [sw,setSw]=useState(false)
    function handleDarkModeToggle(){
        setSw(sw===false? true: false);
    }
    return(
        <div className={sw===false?"DarkModeOf":"DarkModeOn"}>
            <p>{sw===false?"Tryb ciemny":"Tryb jasny"}</p>
            <button onClick={()=>handleDarkModeToggle()}>zmien</button>
        </div>
    );

}
export default DarkModeToggle