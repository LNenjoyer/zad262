import React,{useState} from "react";
function ItemList(){

    const [items,setItems] = useState[{n:"Jabłko",id:1},{n:"Banan",id:2},{n:"Gruszka",id:3}]; 
    //const [selectedIndex, setSelectedIndex] = useState(-1); 
    function handleCh(id){
        setItems(c=>({...c,id:(id*-1)}));
    }
    return ( 
        <ul> 
            {items.map((item) => ( 
                <li 
                    key={item.id} 
                    className={item.id<0 ? "active" : ""} 
                    onClick={()=>handleCh(item.id)} 
                > 
                    {item.n} 
                </li> 
            ))} 
        </ul> 
    ); 
}
export default ItemList