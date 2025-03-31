import React, {useState} from 'react'
import Cart from './Cart'

function Shopping({user}) {
    let[toggle, setToggle] = useState(false)
    if(toggle){
        return(
            <Cart user={user}/>
        )
    }
    const update =()=>{
        setToggle(true)
    }
  return (
    <div>
        <h1>Shopping Component</h1>
        <button onClick ={update} >Cart</button>
    </div>
  )
}

export default Shopping