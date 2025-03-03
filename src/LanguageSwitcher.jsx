import React,{useState} from "react";
function LanguageSwitcher(){

    const [LanguageSwitcher,setLanguageSwitcher]=useState(1)
    function handleLanguageSwitcher(){
    setLanguageSwitcher(LanguageSwitcher*-1);
    }
    return(
        <>
        <p>{LanguageSwitcher===1?"Witaj, świecie!":"Hello, World!"}</p>
        <button onClick={()=> handleLanguageSwitcher()}>przetłumacz</button>
        </>
    );
}
export default LanguageSwitcher