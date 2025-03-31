import React, {useState} from 'react'
import Shopping from './Shopping'
function Home({user}) {
    let[toggle, setToggle] = useState(false)
    if(toggle){
        return(
            <Shopping user ={user} />
        )
    }
    const update=()=>{
        setToggle(true)
    }
  return (
    <div>
        <h2>Home Component</h2>
        <p>Username: {user.username}, Balance: {user.balance}, Password: {user.password}</p>
        <button onClick ={update} >Shopping</button>

    </div>
  )
}

export default Home