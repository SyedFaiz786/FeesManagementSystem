import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {

    const [name, updateName] = useState()
    const [roll, updateRoll] = useState()
    const [section, updateSection] = useState()
    const Navigate=useNavigate()

    const handleClick = (e) => {
        e.preventDefault()
        const user = JSON.parse(localStorage.getItem('user'));
        axios.post('http://localhost:3001/home', {
            id: user.id,
            name,
            roll,
            section,
        })
            .then(answer => { console.log(answer) })
            .catch(err => { console.log(err) })
            Navigate('/students')
    }


    return (
        <>
        </>
    )
}

export default Home