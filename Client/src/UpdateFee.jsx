// import React from 'react'
// import { useState, useEffect } from 'react'
// import axios from 'axios'
// import { useNavigate } from 'react-router-dom'; 
// import './UpdateFee.css'

// function UpdateFee() {
    
//   const navigate = useNavigate();
//   const [user, setUser] = useState(null);
//   const [newtutionfee, updatenewtutionfee] = useState(0)
//   const [newhostelfee, updatenewhostelfee] = useState(0)
//   const [newtransportfee, updatenewtransportfee] = useState(0)
//   const [newskilldevfee, updatenewskilldevfee] = useState(0)
//   const [newuniversityfee, updatenewuniversityfee] = useState(0)
//   const [tutionfee, paidtutionfee] = useState(0)
//   const [transportfee, paidtransportfee] = useState(0)
//   const [skilldevfee, paidskilldevfee] = useState(0)
//   const [universityfee, paiduniversityfee] = useState(0)
//   const [hostelfee, paidhostelfee] = useState(0)
//   const [paidfee, updatepaidfee] = useState(0)
//   const [balance, updatebalance] = useState(0)
//   const [displaytransport, updatedisplaytransport] = useState(false)
//   const [displaytution, updatedisplaytution] = useState(false)
//   const [displayuniversity, updatedisplayuniversity] = useState(false)
//   const [displayskill, updatedisplayskill] = useState(false)
//   const [displayhostel, updatedisplayhostel] = useState(false)

//   useEffect(() => {

//     const getLocalStorageValue = async () => {
//       try {
//         const storedValue = JSON.parse(localStorage.getItem('user'))
//         const response = await axios.get(`https://fees-management-system.onrender.com/getstudents?id=${storedValue.id}`)
//         setUser(response.data);
//       } catch (error) {
//         console.error('Error retrieving value from localStorage:', error);
//       }
//     }

//     getLocalStorageValue();
//   }, []);

//   const handlefees = () => { 
//     const getLocalStorageValue = async () => {
//       try {
//         const storedValue = JSON.parse(localStorage.getItem('user'))
//         const response = await axios.put(`https://fees-management-system.onrender.com/updatevalue?id=${storedValue.id}`,{
//         newtutionfee,
//         newtransportfee,
//         newskilldevfee,
//         newuniversityfee,
//         newhostelfee,
//         paidfee,
//         balance,
//       });
      
//       } catch (error) {
//         console.error('Error retrieving value from localStorage:', error);
//       }
//     }
//     getLocalStorageValue()

//     navigate('/studentdetails')
//     alert('updated successfully')
//   }




//   return (
//     <div className="update-fee-container">
//       <h1>{user && user.name}</h1>
//       <div className="checkbox-container">
//         <input type="checkbox" onClick={() => updatedisplaytransport(!displaytransport)} />
//         <label>updatetransport</label>
//         {displaytransport &&
//           <>
//           <br/>
//             <input type="number" placeholder='update transport fee' onChange={(e) => updatenewtransportfee(e.target.value)} />
//           </>
//         }
//       </div>

//       <div className="checkbox-container">
//         <input type="checkbox" onClick={() => updatedisplaytution(!displaytution)} />
//         <label>updatetution</label>
//         {displaytution &&
//           <input type="text" placeholder='update tution fee' onChange={(e) => { updatenewtutionfee(e.target.value) }} />}
//       </div>

//       <div className="checkbox-container">
//         <input type="checkbox" onClick={() => updatedisplayuniversity(!displayuniversity)} />
//         <label>university</label>
//         {displayuniversity &&
//           <input type="text" placeholder='update university fee' onChange={(e) => { updatenewuniversityfee(e.target.value) }} />}
//       </div>

//       <div className="checkbox-container">
//         <input type="checkbox" onClick={() => updatedisplayhostel(!displayhostel)} />
//         <label>hostels</label>
//         {displayhostel &&
//           <input type="text" placeholder="update hostelfee" onChange={(e) => { updatenewhostelfee(e.target.value) }} />}
//       </div>

//       <div className="checkbox-container">
//         <input type="checkbox" onClick={() => updatedisplayskill(!displayskill)} />
//         <label>skill</label>
//         {displayskill &&
//           <input type="text" placeholder='update skill development fee' onChange={(e) => { updatenewskilldevfee(e.target.value) }} />}
//       </div>
      
//       {user && user.isApproved === true && user.paymentdetails.new === false &&
//         <button className="small-button" onClick={handlefees}>UpdateFee</button>}
//     </div>
//   )
// }
// export default UpdateFee

import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'; 
import './UpdateFee.css'

function UpdateFee() {

    const navigate = useNavigate();
    const [displaytution,displayupdatetution]=useState(false)
    const [displaytransport,displayupdatetransport]=useState(false)
    const [displayhostel,displayupdatehostel]=useState(false)
    const [displayskilldev,displayupdateskilldev]=useState(false)
    const [displayuniversity,displayupdateuniversity]=useState(false)
      const [user, setUser] = useState('');
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




    useEffect(() => {

            const getLocalStorageValue = async () => {
              try {
                const storedValue = JSON.parse(localStorage.getItem('user'))
                const response = await axios.get(`https://fees-management-system.onrender.com/getstudents?id=${storedValue.id}`)
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
                const response = await axios.put(`https://fees-management-system.onrender.com/updatevalue?id=${storedValue.id}`,{
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








    return(
    <>
    <div className='maindiv col-6 pt-5 m-auto '>
     

    <div className=' row title'>
        <h2 className=" m-auto">Update fee details</h2>
    </div>

<div className='row mt-5 d-flex justify-content-around flex-wrap '>
    {user.paidtutionfee<user.tutionfee&&
    <div>
    <label htmlFor="tutionfee" >tutionfee:</label>
    <input type='checkbox' value='tutionfee' name="tutionfee"  onClick={()=>{displayupdatetution(!displaytution)}}/></div>}
    <div><label htmlFor="transportfee">transportfee</label>
    <input type='checkbox' value='transportfee' name="transportfee"  onClick={()=>{displayupdatetransport(!displaytransport)}}/></div>
    <div><label htmlFor="hostelfee">hostelfee</label>
    <input type='checkbox' value='hostelfee' name="hostelfee" onClick={()=>{displayupdatehostel(!displayhostel)}}/></div>
    <div><label htmlFor="universityfee">universityfee</label>
    <input type='checkbox' value='universityfee' name="universityfee" onClick={()=>{displayupdateuniversity(!displayuniversity)}}/></div>
    <div><label htmlFor="skilldevfee">skilldevfee</label>
    <input type='checkbox' value='skilldevfee' name="skilldevfee" onClick={()=>{displayupdateskilldev(!displayskilldev)}}/></div>
</div>

{displaytution&&
<div className='mt-3 div'>
<label htmlFor="tution">tutionfee</label><br/>
<input type="text" placeholder="tutionfee" name="tution"  onChange={(e) => { updatenewtutionfee(e.target.value) }} />
</div>}
{displaytransport&&
<div className='mt-3 div'>
<label htmlFor="transport">transportfee</label><br/>
<input type="text" placeholder="transportfee" name="transport" onChange={(e) => updatenewtransportfee(e.target.value)}/>
</div>}
{displayhostel&&
<div className='mt-3 div'>
<label htmlFor="hostel">hostelfee</label><br/>
<input type="text" placeholder="hostelfee" name="hostel" onChange={(e) => { updatenewhostelfee(e.target.value) }}/>
</div>}
{displayuniversity&&
<div className='mt-3 div'>
<label htmlFor="university">universityfee</label><br/>
<input type="text" placeholder="univeristyfee" name="univeristy" onChange={(e) => { updatenewuniversityfee(e.target.value) }} />
</div>}
{displayskilldev&&
<div className='mt-3 div'>
<label htmlFor="skilldev">skilldevfee</label><br/>
<input type="text" placeholder="skilldevfee" name="skilldev" onChange={(e) => { updatenewskilldevfee(e.target.value) }} />
</div>}


{user && user.isApproved === true && user.paymentdetails.new === false &&
<div className='row pl-3'>
    <button  className='submitupdates  mt-4' onClick={handlefees}>submit</button>
</div>}



        
    </div>

    </>)

}

export default UpdateFee