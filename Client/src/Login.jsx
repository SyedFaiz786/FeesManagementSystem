import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import './Login.css'
import { useNavigate ,Link} from 'react-router-dom'
function Login() {

    const navigate = useNavigate()
    const [name, updateName] = useState()
    const [password, updatePassword] = useState()
    const [login , updateLogin] = useState('student')
   
    const handleClick = (e) => {
        e.preventDefault()
        axios.post('https://fees-management-system.onrender.com/login', {
            name,
            password,
            role:'s',
        })
            .then(result => {
                localStorage.setItem('user', JSON.stringify(result.data))
                navigate('/studentdetails')
                alert('successful')

            })
            .catch(err =>
                alert(err.response.data.msg)
            )
            
    }

     
    const newFun=()=>{
       document.querySelector('.nav-links').style.display = 
       (document.querySelector('.nav-links').style.display == 'none') ? 'block' : 'none';
     };

     

     
    const handleMentorSubmit = (e) => {
        e.preventDefault()
        axios.post('https://fees-management-system.onrender.com/login', {
            name,
            password,
            role :'m',
        })
            .then(result => {
                localStorage.setItem('user', JSON.stringify(result.data))
                navigate('/students')


            })
            .catch(err =>
                alert(err.response.data.msg)
            )
            alert('login successful')
    }


    return (
        <>
<div id="log">
    <div className="container mt-4">
        <div className="row justify-content-center">
            <div className="col-md-6">
                <div className="card" id="crd">

                    <center><div><img className="svcn-img" src="./svcn-logo.jpg"/></div></center>
                    <div className='d-flex align-center mt-4'>
                        <div style={{ marginRight: '15px', marginLeft:'23%'}}>
                            <h5>Role :</h5>
                        </div> 
                        <div style={{width:'50%'}}>
                            <select value={login} onChange={(e)=>{updateLogin(e.target.value)}}>
                            <option value="student" >Student</option>
                            <option value="mentor" >Mentor</option>
                            <option value="admin" >Admin</option>
                            </select>
                        </div>
                    </div>

               
                    <div className="">
                    {login=='student'&&
                        <form id="feeForm">
                            <center><h4 style={{background:'black',color:'white', padding:'10px',borderRadius:'20px'}} >Student Login</h4></center>
                            <div className="form-group mt-4">
                                <label htmlFor="studentName">User Name</label>
                                <input type="text" className="form-control" id="studentName" name="studentName" onChange={(e)=>updateName(e.target.value)} required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">password</label>
                                <input type="password" className="form-control" id="studentID" name="studentID" onChange={(e)=>{updatePassword(e.target.value)}} required/>
                            </div>
                    
                            <Link to="/stdreg" className='text-primary'>Sign Up/Register</Link>
                            <br/>
                            <br/>
                            <Link to="#" className='text-danger'>Forget Password</Link>
                            <br/>
                            <br/>
                            <button type="submit" className="btn btn-success" onClick={handleClick}>Submit</button>
                        </form>
    }
    {login=='mentor'&&
                        <form id="feeForm">
                            <center><h4 style={{background:'black',color:'white',borderRadius: '25px', padding:'10px'}} >Mentor Login</h4></center>
                            <div className="form-group mt-4">
                                <label for="studentName">User Name</label>
                                <input type="text" className="form-control" id="studentName" name="studentName" onChange={(e)=>updateName(e.target.value)}  required/>
                            </div>
                            <div className="form-group">
                                <label for="password">password</label>
                                <input type="password" className="form-control" id="studentID" name="studentID" onChange={(e)=>{updatePassword(e.target.value)}} required/>
                            </div>
                            <Link to="/register" className='text-primary'>Sign Up/Register</Link>
                            <br/>
                            <br/>
                            < a href="#" className='text-danger'>Forget Password</a>
                            <br/>
                            <br/>
                            <button type="submit" className="btn btn-success" onClick={handleMentorSubmit}>Submit</button>
                        </form>
    }
    {login=='admin'&&
                        <form id="feeForm">
                            <center><h4>Admin Login</h4></center>
                            <div className="form-group mt-4">
                                <label for="studentName">User Name</label>
                                <input type="text" className="form-control" id="studentName" name="studentName" required/>
                            </div>
                            <div className="form-group">
                                <label for="password">password</label>
                                <input type="password" className="form-control" id="studentID" name="studentID" required/>
                            </div>
                            < Link to="#" className='text-primary'>Sign Up/Register</Link>
                            <br/>
                            <br/>
                            < a href="#" className='text-dark'>Forget Password</a>
                            <br/>
                            <br/>
                            <button  className="btn btn-dark">Submit</button>
                        </form>
    }
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</>
    )
}

export default Login