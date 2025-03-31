import React,{useState} from 'react'
import Home from './Home'

function Index() {
    const[toggle, setToggle] = useState(true)
    let user ={
        username:"Ramganga",
        password:123456,
        balance:2500,
    }
    const update=()=>{
        setToggle(false)
    }
    if(!toggle){
        return (
            <Home user= {user} />
        )
    }
  return (
    <div>
        <h1>Index Component</h1>
        <button onClick= {update} >Home</button>
    </div>
  )
}

export default Index