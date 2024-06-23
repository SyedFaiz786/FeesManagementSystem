import React from 'react'
import axios from 'axios'
import {useEffect,useState} from 'react'

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
      <nav className="navbar navbar-expand">
        <div className="container">
          <a className="navbar-brand" href="#" >SVCN</a>
          <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="#"  data-toggle="tooltip" title="Student"><span className="material-symbols-outlined">school</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#"  data-toggle="tooltip" title="Mentor"><span className="material-symbols-outlined">group</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#"  data-toggle="tooltip" title="Admin"><span className="material-symbols-outlined">shield_person</span></a>
          </li>
          </ul>
        </div>
      </nav>
      <div className="container mt-4">
        <h2>Student Profile</h2>
        <div className="card mt-3">
          <div className="card-body">
            <h5 className="card-title">Student Information</h5>
            <p className="card-text"><strong>Name: </strong>{username&&username.name}</p>
            <p className="card-text"><strong>Roll Number: </strong> {username&&username.roll}</p>
          </div>
        </div>
        <h2 className="mt-4">Fee Details</h2>
        <div className="card mt-3">
          <div className="card-body">
            <h5 className="card-title">Fee Details</h5>
            <p className="card-text"><strong>Tuition Fee:</strong> {username&&username.tutionfee}</p>
            <p className="card-text"><strong>Hostel Fee:</strong> {username&&username.hostelfee}</p>
            <p className="card-text"><strong>University Fee:</strong>{username&&username.universityfee}</p>
            <p className="card-text"><strong>Skill Development Fee:</strong>{username&&username.skilldevfee}</p>
            <p className="card-text"><strong>Total Fee:</strong>{username&&username.totalfee} </p>
            <p className="card-text"><strong>Paid Fee:</strong> {username&&username.paidfee}</p>
            <p className="card-text"><strong>Balance Fee:</strong> {username&&username.balance}</p>
            <a href="/updatefees" className="btn btn-primary w-20">Update Fee Details</a>
          </div>
        </div>
      </div>
    </>
  );
  
}

export default Studentdetails