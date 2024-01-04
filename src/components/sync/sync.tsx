import React, { FC } from 'react';
import './sync.css';
import { useState } from "react";

const useStateWithCallback = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const setValueAndCallback = (newValue, callback) => {
      setValue(() => {
          if (callback) {
              callback( newValue);
          }
          return newValue;
      });
  };

  return [value, setValueAndCallback];
}

interface SyncProps {}

const Sync: FC<SyncProps> = () => {
  
 

  const[count,setCount]=useStateWithCallback(0);
  const[clicks,setClicks]=useState(1);

  const changeClicks=()=>{
    let newvalue;
    setClicks(prevValue=>{
       newvalue=prevValue+1;
      console.log(newvalue)
      return newvalue
    })
  }
  const onClicking=()=>{
        setCount(count+1,(newValue)=>{
          console.log(newValue)
        })
  }

  return(
    <div className='sync'>
      
      <button onClick={onClicking}>ClickMeForSyncState</button>
      <p>You clicked button {count} times</p>
      <br></br>
      <button onClick={changeClicks}>ClickHereForValidatingPrevState</button>
      <p>You have Clicked the button {clicks} times</p>
    </div>
  )
}

export default Sync;
