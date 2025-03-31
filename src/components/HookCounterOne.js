import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
function HookCounterOne() {
    const [count, setCount] = useState(0)
    useEffect(()=>{
        document.title=`You Clicked ${count} times`
    })
  return (
    <div>
        <button onClick={()=>setCount(count+1)}>Counter {count} times</button>
    </div>
  )
}

export default HookCounterOne