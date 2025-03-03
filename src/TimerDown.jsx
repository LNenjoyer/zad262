import React,{useState,useEffect} from "react";

function TimerDown(){

    const [seconds, setSeconds] = useState(66);
    const [wynik, setWynik] = useState(false);


    useEffect(() => {
        if(wynik&&seconds>0){
        const interval = setInterval(() => {
          setSeconds(seconds => seconds - 1);
        }, 1000);
        
        return () => clearInterval(interval);}
      }, [wynik,seconds]);
    
    function handleWynik(){
        setWynik(wynik?false:true);
    }
    function handleS(event){
        setSeconds(event.target.value);
    }

    return(
        <div>
            <p>{seconds}</p>
            <input defaultValue={seconds} type="number" onChange={handleS}/>
            <button onClick={()=>handleWynik()}>Start/Stop</button>
        </div>
    );
}
export default TimerDown