import React, {useLayoutEffect, useState} from "react";

export default function Counter(props) {
    const [count, setCount] = useState(0);
  
    function rollOverCount(){
      if (count > 10){
        setCount(0);
      }
    }

    const buttonStyle = {
      backgroundColor: "black",
      color: "white",
      padding: `${props.size}rem`,  // Ensure props.size is a number
      borderRadius: "10px"
    };

    useLayoutEffect(() => {rollOverCount();}, [count]);

    if (props.name == "Counter2"){
      return (
        <div>
          <p>Count: {count}</p>
          <button style = {buttonStyle} onClick={() => setCount(count + 2)}>Increment</button>
        </div>
      );
   }else{
      return (
        <div>
          <p>Count: {count}</p>
          <button style = {buttonStyle} onClick={() => setCount(count + 1)}>Increment</button>
        </div>
      );
   }
  }
