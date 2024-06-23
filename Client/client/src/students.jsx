import react from 'react'

import axios from 'axios';
import React from 'react'
import { useState, useEffect } from 'react'
import './students.css'







const Students = () => {



  class PrintSection {
    static printSection() {
      const printableArea = document.getElementById('details');
      const printContents = printableArea.innerHTML;
      const originalContents = document.body.innerHTML;
      
      document.body.innerHTML = printContents;
  
      window.print();
  
      document.body.innerHTML = originalContents;
    }
  }






  const [studentList, setStudentList] = useState([]);
  const [approvedList, setApprovedList] = useState([]);
  const [type, updateType] = useState('all')
  const [length, updatelength] = useState([])
  const [payment,updatepayment]=useState(0)
  const [roll, updateroll] = useState('')
  const [newtransport,updatenewtransport]=useState(0)
const [number,updatenumber]=useState([])



  useEffect(() => {
    const getStudents = async () => {
      const user = JSON.parse(localStorage.getItem('user'));
      const response = await axios.get(`http://localhost:3001/getAllStudents?id=${user.id}`);
      setStudentList(response.data);

    }
    getStudents();
  }, [])



  useEffect(() => {
    const getApprovedList = async () => {
      const list = studentList.filter(x => x.isApproved === true);
      setApprovedList(list);

    }
    getApprovedList();
  }, [studentList])



  useEffect(() => {
    const getApprovedList = async () => {
      const list = studentList.filter(x => x.isApproved != true && x.isApproved != false);
      updatelength(list);

    }
    getApprovedList();
  }, [studentList])


  
  useEffect(() => {
    const getApprovedList = async () => {
      const list = studentList.filter(x => x.paymentdetails.new===true);
      updatenumber(list);
    }
    getApprovedList();
  }, [studentList])


  const approve = async (item) => {

    console.log(JSON.stringify(studentList))
    console.log(item)
  
    const res = await axios.put(`http://localhost:3001/approve?id=${item._id}`)
    setApprovedList([...approvedList, res.data]);

    // delete approved record in studentList 
    const filterItems = studentList.filter(x => x._id !== item._id);
    setStudentList(filterItems);
    window.location.reload();
  }


  const disapprove = async (item) => {
    const res = await axios.delete(`http://localhost:3001/disapprove?id=${item._id}`)
    setApprovedList([...approvedList,res.data]);
    const filterItems = studentList.filter(x => x._id !== item._id);
    setStudentList(filterItems);
  }

  
   const handledisapprove = async (item) => {
    const value = await axios.put(`http://localhost:3001/disaproveupdates?id=${item._id}`)
   }


  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }

  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }


  function openNav1() {
    document.getElementById("mySidenav1").style.width = "250px";
  }

  function closeNav1() {
    document.getElementById("mySidenav1").style.width = "0";
  }
  

const handleButtonClick=async(item)=>{
  // updatenumber(item)
  const paytransport = item.paymentdetails.transport;
  const paytution=item.paymentdetails.tution;
  const payhostel=item.paymentdetails.hostel;
  const payskilldev=item.paymentdetails.skilldev;
  const payuniversity=item.paymentdetails.university;

  const newtransport=parseFloat(item.paidtransportfee)+parseFloat(item.paymentdetails.transport)
  const newtution=parseFloat(item.paidtutionfee)+parseFloat(item.paymentdetails.tution)
  const newhostel=parseFloat(item.paidhostelfee)+parseFloat(item.paymentdetails.hostel)
  const newskilldev=parseFloat(item.paidskilldevfee)+parseFloat(item.paymentdetails.skilldev)
  const newuniversity=parseFloat(item.paiduniversityfee)+parseFloat(item.paymentdetails.university)
  const paid=parseFloat(item.paidtutionfee)+parseFloat(item.paidtransportfee)+parseFloat(item.paidhostelfee)+parseFloat(item.paidskilldevfee)+parseFloat(item.paiduniversityfee)+parseFloat(paytution)+parseFloat(paytransport)+parseFloat(payhostel)+parseFloat(payskilldev)+parseFloat(payuniversity);
  const balance=parseFloat(item.totalfee)-paid
  const value=await axios.put(`http://localhost:3001/newupdates?id=${item._id}`,{
    paytransport,
    paytution,
    payhostel,
    payskilldev,
    payuniversity,
    newtransport,
    newtution,
    newhostel,
    newskilldev,
    newuniversity,
    paid,
    balance,
  })
  window.location.reload()
}














  return (
    <>
      <head>
        
      </head>
      <nav class="navbar navbar-expand">

        <div class="container">
          <a class="navbar-brand" href="#" >SVCN</a>
          <ul class="navbar-nav ml-auto">

          <li class="nav-item" >
<a class="nav-link" data-toggle="toottip" title='Update'>
<div id="mySidenav1" className="sidenav1">
  <a className="closebtn1" onClick={closeNav1}>x</a>
  <div className="login-container1">

      {approvedList.length>0&&approvedList.map((item) => (
        
       item.paymentdetails.new === true &&
        <>
 <div  className='approvediv1 mt-4'>
                        <h5><pre>Name : <span >{item.name}</span></pre></h5>
                        <h5><pre>Roll : <span >{item.roll}</span></pre></h5>
                        {
                          item.paymentdetails.transport!=0&&
                          <h5><pre>transportfee : <span >{item.paymentdetails.transport}</span></pre></h5>
                        }
                           {
                          item.paymentdetails.tution!=0&&
                          <h5><pre>tutionfee : <span >{item.paymentdetails.tution}</span></pre></h5>
                        }
                           {
                          item.paymentdetails.hostel!=0&&
                          <h5><pre>hostelfee : <span >{item.paymentdetails.hostel}</span></pre></h5>
                        }
                           {
                          item.paymentdetails.skilldev!=0&&
                          <h5><pre>skilldevfee : <span >{item.paymentdetails.skilldev}</span></pre></h5>
                        }
                           {
                          item.paymentdetails.university!=0&&
                          <h5><pre>universityfee : <span >{item.paymentdetails.university}</span></pre></h5>
                        }



                        <div className='d-flex'>
                        <button className=" bg-success" onClick={() =>{handleButtonClick(item);closeNav1()}}>Approve</button>
                        <button className=" bg-success" onClick={() => {handledisapprove(item);closeNav1()}}>dis-Approve</button>
                      </div>
                      </div>

          </>
        ))}
      
  </div>
</div>

<span onClick={openNav1} className="notification">{number.length>0 &&
              <i className="material-symbols-outlined">notifications_active<sup className="notify">{number.length}</sup></i>
            }
            {number.length==0 &&
            <i className="material-symbols-outlined">notifications_none</i>}</span>:<span onClick={openNav1} className="notification1"></span> 
</a>
</li>

            <li class="nav-item">
              <a class="nav-link" data-toggle="toottip" title='Reg'>
              <div id="mySidenav" className="sidenav">
                <a className="closebtn" onClick={closeNav}>x</a>
                <div className="login-container">

                  {
                    studentList.length > 0 && studentList.map((student, index) => (
                      !student.isApproved &&
                      !student.notapproved &&
                      <div  key={student._id} className='approvediv mt-4'>
                        <h5><pre>Name : <span >{student.name}</span></pre></h5>
                        <h5><pre>Roll : <span >{student.roll}</span></pre></h5>
                        <h5><pre>admission : <span >{student.admission}</span></pre></h5>
                        <div className='d-flex'>
                        <button className=" bg-success" onClick={() => approve(student)}>Approve</button>
                        <button className=" bg-success" onClick={() => disapprove(student)}>dis-Approve</button>
                        </div>
                      </div>

                    ))
                  }
                </div>
              </div>
              <span onClick={openNav} className="notification">{length.length>0 &&
              <i className="material-symbols-outlined">notifications_active<sup className="notify">{length.length}</sup></i>
            }
            {length.length==0 &&
            <i className="material-symbols-outlined">notifications_none</i>}</span>
            </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" data-toggle="tooltip" title="Student"><span class="material-symbols-outlined">school</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" data-toggle="tooltip" title="Mentor"><span class="material-symbols-outlined">group</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" data-toggle="tooltip" title="Admin"><span class="material-symbols-outlined">shield_person</span></a>
            </li>
          </ul>
        </div>
      </nav>
      <div class="row">
        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-6 offset-xl-4 offset-lg-4 offset-md-3 offset-sm-3 offset-xs-3">
          <br />
          <form>
            <label for="rollnumber">Roll Number:</label>
            <input type="text" id="rollno" name="rollnumber"/>
            <div>
              <center><button type="button" name="submit" value='roll' onClick={(e)=>{updateType(e.target.value);
              const rollnum= document.getElementById('rollno').value
              updateroll(rollnum);
              }}>submit</button></center>
            </div>
            <br />
            <center>OR SEARCH BY:</center>

            <br />
            <div class="row">
              <div class="col-4">
                <label for="admission">Admission Type</label>
              </div>
              <span>:</span>
              <div class="col-7">
                <select id="admission" name="year" onChange={(e) => updateType(e.target.value)} required>
                  <option value="">Select Admission Type</option>
                  <option value="all">All</option>
                  <option value="cq" >CQ</option>
                  <option value="mq" >MQ</option>
                </select>
              </div>
            </div>
          </form>
        </div>


        <div class="col-xl-12 col-lg-12 col-md-12" id="details">
          <br />
          <table class="table">
            <thead class="thead">
              <tr>
                <th>Roll Number</th>
                <th>Name of the candidate</th>
                <th>Type of admission</th>
                <th>Applicable for JVD</th>
                <th>Tution fee</th>
                <th>Transport fee</th>
                <th>Hostel fee</th>
                <th>Fee paid</th>
                <th>Balance</th>
              </tr>
            </thead>
            <tbody>


              {
                type === 'mq' &&
                approvedList.length > 0 && approvedList.map((x, index) => (
                  x.admission === 'MQ' &&
                  <tr key={index}>
                    <td>{x.roll}</td>
                    <td> {x.name}</td>
                    <td>{x.admission}</td>
                    <td>Not Eligible</td>
                    <td>{x.tutionfee}</td>
                    <td>{x.transportfee}</td>
                    <td>{x.hostelfee}</td>
                    <td>{x.paidfee}</td>
                    <td>{x.balance}</td>
                  </tr>
                ))
              }
              {
                type === 'cq' &&
                approvedList.length > 0 && approvedList.map((x, index) => (
                  x.admission === 'CQ' &&
                  <tr key={index}>
                    <td>{x.roll}</td>
                    <td> {x.name}</td>
                    <td>{x.admission}</td>
                    <td>{x.isjvd}</td>
                    <td>{x.tutionfee}</td>
                    <td>{x.transportfee}</td>
                    <td>{x.hostelfee}</td>
                    <td>{x.paidfee}</td>
                    <td>{x.balance}</td>
                  </tr>
                ))
              }

              {
                type === 'all' &&
                  approvedList.length > 0 && approvedList.map((x, i) => (
                    <tr key={i}>
                      <td>{x.roll}</td>
                      <td>{x.name}</td>
                      <td>{x.admission}</td>
                      {x.isjvd==="Eligible"? 
                      <td>Eligible</td>:<td>Not Eligible</td>}
                      <td>{x.tutionfee}</td>
                      <td>{x.transportfee}</td>
                      <td>{x.hostelfee}</td>
                      <td>{x.paidfee}</td>
                      <td>{x.balance}</td>
                    </tr>
                  ))
}
                 

              {
                type === 'roll' &&
                approvedList.length > 0 && approvedList.map((x, index) => (
                  x.roll === roll &&
                  <tr key={index}>
                    <td>{x.roll}</td>
                    <td>{x.name}</td>
                    <td>{x.admission}</td>
                    {x.isjvd==="Eligible"? 
                      <td>Eligible</td>:<td>Not Eligible</td>}
                    <td>{x.tutionfee}</td>
                    <td>{x.transportfee}</td>
                      <td>{x.hostelfee}</td>
                      <td>{x.paidfee}</td>
                      <td>{x.balance}</td>
                    </tr>
                ))
              }

            </tbody>
          </table>
        </div>
          <button className="print" onClick={PrintSection.printSection}>Print</button>
      </div>
      <div>


 
</div>


      
    </>
  )
}
export default Students