import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'; 
import './UpdateFee.css'

function UpdateFee() {
    
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [newtutionfee, updatenewtutionfee] = useState(0)
  const [newhostelfee, updatenewhostelfee] = useState(0)
  const [newtransportfee, updatenewtransportfee] = useState(0)
  const [newskilldevfee, updatenewskilldevfee] = useState(0)
  const [newuniversityfee, updatenewuniversityfee] = useState(0)
  const [tutionfee, paidtutionfee] = useState(0)
  const [transportfee, paidtransportfee] = useState(0)
  const [skilldevfee, paidskilldevfee] = useState(0)
  const [universityfee, paiduniversityfee] = useState(0)
  const [hostelfee, paidhostelfee] = useState(0)
  const [paidfee, updatepaidfee] = useState(0)
  const [balance, updatebalance] = useState(0)
  const [displaytransport, updatedisplaytransport] = useState(false)
  const [displaytution, updatedisplaytution] = useState(false)
  const [displayuniversity, updatedisplayuniversity] = useState(false)
  const [displayskill, updatedisplayskill] = useState(false)
  const [displayhostel, updatedisplayhostel] = useState(false)

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

  const handlefees = () => { 
    const getLocalStorageValue = async () => {
      try {
        const storedValue = JSON.parse(localStorage.getItem('user'))
        const response = await axios.put(`http://localhost:3001/updatevalue?id=${storedValue.id}`,{
        newtutionfee,
        newtransportfee,
        newskilldevfee,
        newuniversityfee,
        newhostelfee,
        paidfee,
        balance,
      });
      
      } catch (error) {
        console.error('Error retrieving value from localStorage:', error);
      }
    }
    getLocalStorageValue()

    navigate('/studentdetails')
    alert('updated successfully')
  }

  return (
    <div className="update-fee-container">
      <h1>{user && user.name}</h1>
      <div className="checkbox-container">
        <input type="checkbox" onClick={() => updatedisplaytransport(!displaytransport)} />
        <label>updatetransport</label>
        {displaytransport &&
          <>
          <br/>
            <input type="number" placeholder='update transport fee' onChange={(e) => updatenewtransportfee(e.target.value)} />
          </>
        }
      </div>

      <div className="checkbox-container">
        <input type="checkbox" onClick={() => updatedisplaytution(!displaytution)} />
        <label>updatetution</label>
        {displaytution &&
          <input type="text" placeholder='update tution fee' onChange={(e) => { updatenewtutionfee(e.target.value) }} />}
      </div>

      <div className="checkbox-container">
        <input type="checkbox" onClick={() => updatedisplayuniversity(!displayuniversity)} />
        <label>university</label>
        {displayuniversity &&
          <input type="text" placeholder='update university fee' onChange={(e) => { updatenewuniversityfee(e.target.value) }} />}
      </div>

      <div className="checkbox-container">
        <input type="checkbox" onClick={() => updatedisplayhostel(!displayhostel)} />
        <label>hostels</label>
        {displayhostel &&
          <input type="text" placeholder="update hostelfee" onChange={(e) => { updatenewhostelfee(e.target.value) }} />}
      </div>

      <div className="checkbox-container">
        <input type="checkbox" onClick={() => updatedisplayskill(!displayskill)} />
        <label>skill</label>
        {displayskill &&
          <input type="text" placeholder='update skill development fee' onChange={(e) => { updatenewskilldevfee(e.target.value) }} />}
      </div>
      
      {user && user.isApproved === true && user.paymentdetails.new === false &&
        <button className="small-button" onClick={handlefees}>UpdateFee</button>}
    </div>
  )
}
export default UpdateFee
