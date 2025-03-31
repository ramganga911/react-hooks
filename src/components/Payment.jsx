import React,{useState} from 'react'

function Payment({user}) {
    let[toggle, setToggle] =useState(false)
    if(toggle){
        return(
        <div>
        <h2>Change</h2>
        <p>Username: {user.username}, Remaining Balance: {user.balance - 500}, Password: {user.password}</p>  
        </div>
        )
    }
    const update =()=>{
        setToggle(true)
    }
  return (
    <div>
        <h1>Payment Component</h1>
        <p>Username: {user.username}, Balance: {user.balance}, Password: {user.password}</p>
        <button onClick = {update} >Pay</button>
    </div>
  )
}

export default Payment