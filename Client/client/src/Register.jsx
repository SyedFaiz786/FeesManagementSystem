import {useState} from 'react'
import axios from 'axios'
function Register(){
    
    const [name,updateName]=useState()
    const [password,updatePassword]=useState()

    const handleClick=(e)=>{
        e.preventDefault()
        axios.post('http://localhost:3001/register',{name,password})
        .then(answer=>{console.log(answer)})
        .catch(err=>{console.log(err)})

    }
    return(
        <>
        <h1>register</h1>
        <label htmlFor="name">name</label><br/>
        <input type="text" onChange={(e)=>{updateName(e.target.value)}}></input><br/>
        <label htmlFor="password" >password</label><br/>
        <input type="password" onChange={(e)=>{updatePassword(e.target.value)}}></input><br/>
        <button onClick={handleClick} type="submit">submit</button>
        </>
    )
}
export default Register