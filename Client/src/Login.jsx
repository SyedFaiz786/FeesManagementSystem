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
        {/* // Updated hamburger button
        // <a href="#parent"><button className="login-btn">Login</button></a>

        // <div className="container-1">
        //         <img src="svcn-2.jpg" alt="college-Svcn" />
        //         <img className="overlay" src="svcn-1.jpg" alt="Svcn-tags " />
        // </div>
        // <div className="content">
        //     <h1 className="tag">
        //         "Empowering Tomorrow's Innovators: Where Excellence Meets Engineering at Sree Venkateshwara college."</h1>
        //     <a href="#" className="click">Click Me</a>
        // </div>
            
        //         <section>

        //             <div className="parent" id="parent">
        //                 <div className="wrapper">
        //                     <form action="">
        //                         <h2>Student Login</h2>
        //                         <div className="input-box">
        //                             <span className="icon"><ion-icon name="person-outline"></ion-icon></span>
        //                             <input type="text" placeholder="username" onChange={(e)=>updateName(e.target.value)} required />
        //                         </div>
        //                         <div className="input-box">
        //                             <span className="icon"><ion-icon name="lock-closed-outline"></ion-icon></span>
        //                             <input type="password" placeholder="password"  onChange={(e)=>updatePassword(e.target.value)} required />
        //                         </div>
        //                         <div className="forget-pass">
        //                             <a href="#forget.html">Forget password.?</a>
        //                         </div>
        //                         <br/>
        //                         <div className="studreg">
        //                             <a href="./stdreg">Sign up/Register</a>
        //                         </div>
        //                         <button className="btn" onClick={handleClick}>Submit</button>

        //                     </form>
        //                 </div>
        //                 <div className="wrapper">
        //                     <form action="">
        //                         <h2>Mentor Login</h2>
        //                         <div className="input-box">
        //                             <span className="icon"><ion-icon name="person-outline"></ion-icon></span>
        //                             <input type="text" onChange={(e)=>{updateName(e.target.value)}} placeholder="username" required />
        //                         </div>
        //                         <div className="input-box">
        //                             <span className="icon"><ion-icon name="lock-closed-outline"></ion-icon></span>
        //                             <input type="password" onChange={(e)=>{updatePassword(e.target.value)}} placeholder="password" required />
        //                         </div>
        //                         <div className="forget-pass">
        //                             <a href="#forget.html" >Forget password.?</a>
        //                         </div>
        //                         <br/>
        //                         <div className="studreg">
        //                             <a href="./register">Sign up/Register</a>
        //                         </div>


        //                         <button className="btn" onClick={handleMentorSubmit}>Submit</button>

        //                     </form>
        //                 </div>
        //                 <div className="wrapper">
        //                     <form action="">
        //                         <h2>Admin Login</h2>
        //                         <div className="input-box">
        //                             <span className="icon"><ion-icon name="person-outline"></ion-icon></span>
        //                             <input type="text" placeholder="username" required />
        //                         </div>
        //                         <div className="input-box">
        //                             <span className="icon"><ion-icon name="lock-closed-outline"></ion-icon></span>
        //                             <input type="password" placeholder="password" required />
        //                         </div>
        //                         <div className="forget-pass">
        //                             <a href="#forget.html">Forget password.?</a>
        //                         </div>
        //                         <button className="btn">Submit</button>

        //                     </form>
        //                 </div>






        //             </div>



        //         </section>

        //         <footer id="social-icons">
        //             <div className="social-icons">
        //                 <a href="#" target="_blank"><i className="fa-brands fa-facebook"></i>Facebook</a>
        //                 <a href="#" target="_blank"><i className="fa-brands fa-x-twitter"></i>Twitter</a>
        //                 <a href="#" target="_blank"><i className="fa-brands fa-instagram"></i>Instagram</a>
        //                 <a href="#" target="_blank"><i className="fa-brands fa-linkedin"></i>LinkedIn</a>
        //             </div>

        //             <div className="contact-info" id="contact-info">
        //                 <p>Phone: +1 (555) 123-4567</p>
        //                 <p>Email: Svcn@example.com</p>
        //                 <p>Address: 123 Main St, City, Country</p>
        //             </div>

        //             <div className="copyright">
        //                 <p>&copy; 2023 SREE VENKATESHWARA COLLEGE OF ENGINEERING . All rights reserved.</p>
        //             </div>
        //         </footer>
        //         <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
        //         <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script> */}
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
                    
                            < a href="/stdreg" className='text-primary'>Sign Up/Register</a>
                            <br/>
                            <br/>
                            < a href="#" className='text-danger'>Forget Password</a>
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
                            < a href="/register" className='text-primary'>Sign Up/Register</a>
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
                            < a href="/students" className='text-primary'>Sign Up/Register</a>
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