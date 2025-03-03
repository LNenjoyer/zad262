import React,{useState} from "react";
function LightSwitch(){

    const [sw,setSw]=useState(false)
    function handleLightSwitch(){
        setSw(sw===false? true: false);
    }
    return(
        <div className={sw===false?"lightOf":"lightOn"}>
            <p>{sw===false?"światło jest wyłaczone":"światło jest włączone"}</p>
            <button onClick={()=>handleLightSwitch()}>zmien</button>
        </div>
    );

}
export default LightSwitch