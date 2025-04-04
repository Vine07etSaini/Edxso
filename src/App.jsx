import { useState,useRef, } from 'react'
import './App.css'

function App() {
  
  const divRef=useRef([]);
  const divOranage = useRef([]);

  function handleColor(element){ 

    if(divOranage.current.length===0){
      divOranage.current.push(element);
      divRef.current[element].style.backgroundColor='green';
    }
    else if(divOranage.current.length>0 && divOranage.current.find((ele)=> ele===element)){
        alert("You have already clicked this element");
    }
    else  if(divOranage.current.length>0 && divOranage.current.find((ele)=> ele!==element)){
       divRef.current[element].style.backgroundColor = "green";
       divOranage.current.push(element);
    }
    
     if (divOranage.current.length === 9) {
       divOranage.current.forEach((ele, index) => {
         setTimeout(() => {
           divRef.current[ele].style.backgroundColor = "orange";
         }, index * 500); 
       });

       setTimeout(() => {
          divOranage.current = [];
          divRef.current.forEach((ele) => {
            ele.style.backgroundColor = "white";
          });
       }, divOranage.current.length * 500); 
    }
         
   } 

  return (
    <>
      <h1 className='heading'>Matrix Game</h1>
      <div className="outer-container">
        <div className="col">
          {[1, 2, 3].map((ele, index) => (
            <div
              key={index}
              className="element"
              ref={(el) => (divRef.current[ele] = el)}
              onClick={() => handleColor(ele)}
            ></div>
          ))}
        </div>
        <div className="col">
          {[4, 5, 6].map((ele, index) => (
            <div
              key={index}
              className="element"
              ref={(el) => (divRef.current[ele] = el)}
              onClick={() => handleColor(ele)}
            ></div>
          ))}
        </div>
        <div className="col">
          {[7, 8, 9].map((ele, index) => (
            <div
              key={index}
              className="element"
              ref={(el) => (divRef.current[ele] = el)}
              onClick={() => handleColor(ele)}
            ></div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App
