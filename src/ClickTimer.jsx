import React,{useState,useEffect} from "react";

function ClickTimer(){

    const [seconds, setSeconds] = useState(0);
    const [wynik, setWynik] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
          setSeconds(seconds => seconds + 1);
        }, 1000);
        return () => clearInterval(interval);
      }, []);


    function handleSeconds(){
        setWynik(seconds);
        setSeconds(0);
    }

    return(
        <div>
            <p>{wynik}</p>
            <p>{seconds}</p>



            <button onClick={()=>handleSeconds()}>Start/Stop</button>


        </div>
    );
}
export default ClickTimer