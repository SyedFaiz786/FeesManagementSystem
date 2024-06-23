import React from 'react'
import axios from 'axios'
import {useEffect,useState} from 'react'
import './studentdetails.css'

function Studentdetails() {
    const [username, setUser]= useState(null);

    useEffect(() => {

      const getLocalStorageValue = async () => {
        try {
  
          const storedValue = JSON.parse(localStorage.getItem('user'))
          const response = await axios.get(`http://localhost:3001/getstudents?id=${storedValue.id}`)
          
          setUser(response.data);
  
  
        } catch (error) {
          console.error('Error retrieving value from localStorage:', error);
        }
      }
  
  
      getLocalStorageValue();
    }, []);
    

  return (
    <>
      <head>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"/>
      </head>
      <nav class="navbar navbar-expand">
        <div class="container">
          <a class="navbar-brand" href="#" >SVCN</a>
          <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link" href="#"  data-toggle="tooltip" title="Student"><span class="material-symbols-outlined">school</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"  data-toggle="tooltip" title="Mentor"><span class="material-symbols-outlined">group</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"  data-toggle="tooltip" title="Admin"><span class="material-symbols-outlined">shield_person</span></a>
          </li>
          </ul>
        </div>
      </nav>
      <div class="container mt-4">
        <h2>Student Profile</h2>
        <div class="card mt-3">
          <div class="card-body">
            <h5 class="card-title">Student Information</h5>
            <p class="card-text"><strong>Name: </strong>{username&&username.name}</p>
            <p class="card-text"><strong>Roll Number: </strong> {username&&username.roll}</p>
     
          </div>
        </div>
        <h2 class="mt-4">Fee Details</h2>
        <div class="card mt-3">
          <div class="card-body">
            <h5 class="card-title">Fee Details</h5>
            <p class="card-text"><strong>Tuition Fee:</strong> {username&&username.tutionfee}</p>
            <p class="card-text"><strong>Hostel Fee:</strong> {username&&username.hostelfee}</p>
            <p class="card-text"><strong>University Fee:</strong>{username&&username.universityfee}</p>
            <p class="card-text"><strong>Skill Development Fee:</strong>{username&&username.skilldevfee}</p>
            <p class="card-text"><strong>Total Fee:</strong>{username&&username.totalfee} </p>
            <p class="card-text"><strong>Paid Fee:</strong> {username&&username.paidfee}</p>
            <p class="card-text"><strong>Balance Fee:</strong> {username&&username.balance}</p>
            <a href="/updatefees" class="btn btn-primary">Update Fee Details</a>
          </div>
        </div>
      </div>
    </>
  );
  
}

export default Studentdetails