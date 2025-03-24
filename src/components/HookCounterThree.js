import React from 'react'
import { useState } from 'react'
function HookCounterThree() {
    const [name, setName] = useState({firstName:"", lastName:""})
  return (
    <div>
      <form>
        <label>FirstName: </label>
        <input type="text" 
                value={name.firstName}
                onChange={e=>setName({...name,firstName: e.target.value})}/>
        <br/>
        <label>LastName: </label>
        <input type="text"
                value={name.lastName}
                onChange={(e)=>setName({...name, lastName:e.target.value})} />
        <h3>FirstName : {name.firstName}</h3>
        <h3>LastName : {name.lastName}</h3>
      </form>
    </div>
  );
}

export default HookCounterThree