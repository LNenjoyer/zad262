import React,{useState} from "react";
function Modal(){

    const [sw,setSw]=useState(false)
    function handleModal(){
        setSw(sw===false? true: false);
    }
    return(
        <div>
            <button onClick={()=>handleModal()}>{sw===false?
                    "Otwórz modal":"Zamknij modal"}</button>
            <p>{sw===false?"":"To jest okno modalne"}</p>

        </div>
    );

}
export default Modal