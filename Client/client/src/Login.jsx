import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import './Login.css'
import { useNavigate } from 'react-router-dom'
function Login() {

    const navigate = useNavigate()
    const [name, updateName] = useState()
    const [password, updatePassword] = useState()
   
    const handleClick = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/login', {
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
        axios.post('http://localhost:3001/login', {
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
        {/* Updated hamburger button */}
        <a href="#parent"><button class="login-btn">Login</button></a>

        <div class="container-1">
                <img src="svcn-2.jpg" alt="college-Svcn" />
                <img class="overlay" src="svcn-1.jpg" alt="Svcn-tags " />
        </div>
        <div class="content">
            <h1 class="tag">
                "Empowering Tomorrow's Innovators: Where Excellence Meets Engineering at Sree Venkateshwara college."</h1>
            <a href="#" class="click">Click Me</a>
        </div>
            
                <section>

                    <div class="parent" id="parent">
                        <div class="wrapper">
                            <form action="">
                                <h2>Student Login</h2>
                                <div class="input-box">
                                    <span class="icon"><ion-icon name="person-outline"></ion-icon></span>
                                    <input type="text" placeholder="username" onChange={(e)=>updateName(e.target.value)} required />
                                </div>
                                <div class="input-box">
                                    <span class="icon"><ion-icon name="lock-closed-outline"></ion-icon></span>
                                    <input type="password" placeholder="password"  onChange={(e)=>updatePassword(e.target.value)} required />
                                </div>
                                <div class="forget-pass">
                                    <a href="#forget.html">Forget password.?</a>
                                </div>
                                <br/>
                                <div class="studreg">
                                    <a href="./stdreg">Sign up/Register</a>
                                </div>
                                <button className="btn" onClick={handleClick}>Submit</button>

                            </form>
                        </div>
                        <div class="wrapper">
                            <form action="">
                                <h2>Mentor Login</h2>
                                <div class="input-box">
                                    <span class="icon"><ion-icon name="person-outline"></ion-icon></span>
                                    <input type="text" onChange={(e)=>{updateName(e.target.value)}} placeholder="username" required />
                                </div>
                                <div class="input-box">
                                    <span class="icon"><ion-icon name="lock-closed-outline"></ion-icon></span>
                                    <input type="password" onChange={(e)=>{updatePassword(e.target.value)}} placeholder="password" required />
                                </div>
                                <div class="forget-pass">
                                    <a href="#forget.html" >Forget password.?</a>
                                </div>
                                <br/>
                                <div class="studreg">
                                    <a href="./register">Sign up/Register</a>
                                </div>


                                <button className="btn" onClick={handleMentorSubmit}>Submit</button>

                            </form>
                        </div>
                        <div class="wrapper">
                            <form action="">
                                <h2>Admin Login</h2>
                                <div class="input-box">
                                    <span class="icon"><ion-icon name="person-outline"></ion-icon></span>
                                    <input type="text" placeholder="username" required />
                                </div>
                                <div class="input-box">
                                    <span class="icon"><ion-icon name="lock-closed-outline"></ion-icon></span>
                                    <input type="password" placeholder="password" required />
                                </div>
                                <div class="forget-pass">
                                    <a href="#forget.html">Forget password.?</a>
                                </div>
                                <button className="btn">Submit</button>

                            </form>
                        </div>






                    </div>



                </section>

                <footer id="social-icons">
                    <div class="social-icons">
                        <a href="#" target="_blank"><i class="fa-brands fa-facebook"></i>Facebook</a>
                        <a href="#" target="_blank"><i class="fa-brands fa-x-twitter"></i>Twitter</a>
                        <a href="#" target="_blank"><i class="fa-brands fa-instagram"></i>Instagram</a>
                        <a href="#" target="_blank"><i class="fa-brands fa-linkedin"></i>LinkedIn</a>
                    </div>

                    <div class="contact-info" id="contact-info">
                        <p>Phone: +1 (555) 123-4567</p>
                        <p>Email: Svcn@example.com</p>
                        <p>Address: 123 Main St, City, Country</p>
                    </div>

                    <div class="copyright">
                        <p>&copy; 2023 SREE VENKATESHWARA COLLEGE OF ENGINEERING . All rights reserved.</p>
                    </div>
                </footer>
                <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
                <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
        </>
    )
}

export default Login