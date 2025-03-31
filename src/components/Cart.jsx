import React,{useState} from 'react'
import Payment from './Payment'

function Cart({user}) {
    let[toggle, setToggle] = useState(false)
    if(toggle){
        return (
            <Payment user ={user}/>
        )
    }
    const update =()=>{
        setToggle(true)
    }
  return (
    <div>
        <h2>Cart Component</h2>
        <button onClick ={update} >Payment</button>
    </div>
  )
}

export default Cart