import React,{useState,useEffect} from 'react'

function Counter() {

    const [count,setCount]=useState(0)
    const [count2,setCount2]=useState(0)

    useEffect(()=>{
        console.log('mounting,,,,,,,,,,,,');
      console.log('updating count 1.....'+count);

      console.log('updating count 2.....'+count2);
      
    },[count,count2])
  return (
    <div>
        <button onClick={()=>setCount(count+1)}>add</button>
       <h1>Counter 1: {count}</h1>
       <button onClick={()=>setCount2(count2+1)}>add</button>
       <h1>Counter 2: {count2}</h1>
    </div>
  )
}

export default Counter
