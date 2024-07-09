// import {useState} from 'react'
// import axios from 'axios'
// import { useNavigate } from 'react-router-dom'

// import './register.css'


// function Register(){
//     const navigate = useNavigate()
//     const [name,updateName]=useState()
//     const [password,updatePassword]=useState()

//     const handleClick=(e)=>{
//         e.preventDefault()
//         axios.post('https://fees-management-system.onrender.com/register',{name,password})
//         .then(answer=>{console.log(answer)
//             navigate('/login')
//                 alert('successful')
//         })
//         .catch(err=>{console.log(err)})

//     }
//     return(
//         <>
//         <div className='maindivision col-9 m-auto p-4'>

//         <h2 style={{borderBottom:'2px solid black'}}>Register</h2>
  

//         <label className='col-10 offset-2' htmlFor="name">Name</label><br/>
//         <input style={{background:'white'}} className='col-9 offset-2' placeholder='name' type="text" name='name' onChange={(e)=>{updateName(e.target.value)}}></input><br/>

//         <label  className='col-10 offset-2' htmlFor="password" >Password</label><br/>
//         <input  className='col-9 offset-2' type="password" name='password' placeholder='password' onChange={(e)=>{updatePassword(e.target.value)}}></input><br/>

//         <button onClick={handleClick} className='col-5 offset-4 mt-5 bg-white'>submit</button>

//         </div>
//         </>
//     )
// }
// export default Register

import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './register.css';

function Register() {
    const navigate = useNavigate();
    const [name, updateName] = useState('');
    const [password, updatePassword] = useState('');
    const [error, setError] = useState('');

    const handleMentorCheck = async () => {
        try {
            const response = await axios.get('https://fees-management-system.onrender.com/checkMentor', {
                params: { name }
            });
            return response.data.exists;
        } catch (error) {
            console.error('Error checking mentor name:', error);
            return false;
        }
    };

    const handleClick = async (e) => {
        e.preventDefault();
        const mentorExists = await handleMentorCheck();
        if (mentorExists) {
            setError('Mentor name already exists.');
        } else {
            setError('');
            axios.post('https://fees-management-system.onrender.com/register', { name, password })
                .then(answer => {
                    console.log(answer);
                    navigate('/login');
                    alert('successful');
                })
                .catch(err => {
                    console.log(err);
                });
        }
    };

    return (
        <>
            <div className='maindivision col-9 m-auto p-4'>
                <h2 style={{ borderBottom: '2px solid black' }}>Register</h2>

                <label className='col-10 offset-2' htmlFor="name">Name</label><br />
                <input style={{ background: 'white' }} className='col-9 offset-2' placeholder='name' type="text" name='name' onChange={(e) => { updateName(e.target.value) }} /><br />

                {error && <p style={{ color: 'red' }}>{error}</p>}

                <label className='col-10 offset-2' htmlFor="password">Password</label><br />
                <input className='col-9 offset-2' type="password" name='password' placeholder='password' onChange={(e) => { updatePassword(e.target.value) }} /><br />

                <button onClick={handleClick} className='col-5 offset-4 mt-5 bg-white'>submit</button>
            </div>
        </>
    );
}

export default Register;
