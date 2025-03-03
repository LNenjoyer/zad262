import React,{useState} from "react";
function PasswordToggle(){

    const [sw,setSw]=useState(false)
    const [pass,setPass]=useState();
    function handlePasswordToggle(){
        setSw(sw===false? true: false);
    }
    function handlePasswordChange(event){
        setPass(event.target.value);
    }
    return(
        <div>
            
            <input type={sw===false?"password": "text"} onChange={handlePasswordChange}/>
            <button onClick={()=>handlePasswordToggle()}>{sw===false?
                    "Pokaż":"Ukryj"}</button>
        </div>
    );

}
export default PasswordToggle