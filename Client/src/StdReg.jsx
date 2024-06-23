import React, { useState, useEffect,} from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import './StdReg.css';

function StdReg() {
    const [name, updateName] = useState('');
    const [roll, updateRoll] = useState('');
    const [admission, updateAdmission] = useState('');
    const [isjvd, updateIsjvd] = useState('');
    const [tutionfee, updateTutionfee] = useState(35000);
    const [transportfee, updateTransportfee] = useState(0);
    const [hostelfee, updateHostelfee] = useState(0);
    const [paidfee, updatePaid] = useState(0);
    const [password, updatePassword] = useState('');
    const [balance, updateBalance] = useState(0);
    const [mentorId, setMentorId] = useState('');
    const [Accommodation,updateacomodation]=useState('')
    const [transportenrolled,updateTransportenrolled]=useState('')
    const [universityfee, setuniversityfee] = useState(4500);
    const [skilldevfee, setskilldevfee] = useState(5000);
    const [paiduniversityfee, setpaiduniversityfee] = useState(0);
    const [paidskilldevfee, setpaidskilldevfee] = useState(0);
    const [paidtutionfee, setpaidtutionfee] = useState(0);
    const [paidtransportfee, setpaidtransportfee] = useState(0);
    const [paidhostelfee, setpaidhostelfee] = useState(0)
    const [totalfee, updateTotalfee] = useState(0)
    const [mentorData, setMentorData] = useState([]);
    const [tution, setpaytution] = useState(0);
    const [transport, setpaytransport] = useState(0);
    const [hostel, setpayhostel] = useState(0);
    const [skilldev, setpayskilldev] = useState(0);
    const [university, setpayuniversity] = useState(0);

    const navigate=useNavigate()



   




    useEffect(() => {
        const calculateTotalFee = () => {
            // Calculate the total fee based on the values of tutionfee, transportfee, hostelfee, universityfee, and skilldevfee
            const totalFees= parseInt(tutionfee||0) + parseInt(transportfee||0) + parseInt(hostelfee||0) + parseInt(universityfee||0) + parseInt(skilldevfee||0);
            const balanceamount=parseInt(totalFees)
            updateTotalfee(totalFees);
            updateBalance(balanceamount);
        };
    

        calculateTotalFee();
    }, [tutionfee, transportfee, hostelfee, universityfee, skilldevfee,paidhostelfee,paiduniversityfee,paidtransportfee,paidskilldevfee,paidtutionfee]);



    useEffect(() => {
        const getMentors = async () => {
            try {
                const response = await axios.get('http://localhost:3001/getAllMentors');
                setMentorData(response.data);
            } catch (error) {

            }
        }
        getMentors();
    }, [])


    const handleClick = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:3001/stdreg', {
            name,
            roll,
            admission,
            isjvd,
            tutionfee,
            transportfee,
            hostelfee,
            password,
            mentorId,
            totalfee,
            paidfee,
            balance,
            universityfee,
            skilldevfee,
            paiduniversityfee,
            paidskilldevfee,
            paidtransportfee,
            paidhostelfee,
            paidtutionfee,
            paymentdetails:{tution,
                transport,
                hostel,
                skilldev,
                university,
                new:false,}
        })
            .then(result => {
                console.log(result)
            }
            )
            .catch(err => console.log(err));
            navigate('/login')


    alert('registration successful')
    };




    return (
        <div id="container">
            <h2 >Student Registration Form</h2>
            <form id="feeForm">

               <b> <label htmlFor="name">Name:</label></b>
                <input type="text" id="name" name="name" onChange={(e) => { updateName(e.target.value) }} />

                <b><label htmlFor="rollNumber">Roll Number:</label></b>
                <input type="text" id="rollNumber" name="rollNumber" onChange={(e) => { updateRoll(e.target.value) }} />

                <fieldset>
                    <b><label>Type Of Admission:</label><br/></b>
                    <label htmlFor="cq">CQ</label>
                    <input type="radio" id="cq" name="admissionType" value="CQ" onChange={(e) => { updateAdmission(e.target.value) }} />
                    <label htmlFor="mq">MQ</label>
                    <input type="radio" id="mq" name="admissionType" value="MQ" onChange={(e) => { updateAdmission(e.target.value) }} />
                </fieldset>

                {admission === 'CQ' ?
                    <>
                        <div id="cqOptions" >
                            <fieldset>
                                <label>Is Eligible for JVD:</label><br/>
                                <label htmlFor="eligibleCQ">Eligible</label>
                                <input type="radio" id="eligibleCQ" name="cqEligibility" value="Eligible" onChange={(e) => { updateIsjvd(e.target.value) }} />
                                <label htmlFor="notEligibleCQ">Not Eligible</label>
                                <input type="radio" id="notEligibleCQ" name="cqEligibility" value="Not Eligible" onChange={(e) => { updateIsjvd(e.target.value) }} />
                            </fieldset>
                        </div>


                        <fieldset id="feeFieldset" >
                            <b><label>Tuition Fee:</label></b>
                            <input type="number" id="tuitionFee" name="tuitionFee" value='35000' placeholder="Tuition Fee" onChange={(e) => { updateTutionfee(e.target.value) }} />
                        </fieldset>
                    </>:
                    <fieldset id="feeFieldset" >
                    <b><label>Tuition Fee:</label></b>
                    <input type="number" id="tuitionFee" name="tuitionFee"  placeholder="Tuition Fee" onChange={(e) => { updateTutionfee(e.target.value) }} />
                </fieldset>

                }



                <fieldset>
                    <b><label>Transport Fee:</label><br/></b>
                    <label htmlFor="enrolledTransport">Enrolled</label>
                    <input type="radio" id="enrolledTransport" name="transportStatus" value="Enrolled" onChange={(e)=>{updateTransportenrolled(e.target.value)}}/>
                    <label htmlFor="notEnrolledTransport">Not Enrolled</label>
                    <input type="radio" id="notEnrolledTransport" name="transportStatus" value="NotEnrolled" onChange={(e) => { updateTransportenrolled(e.target.value) }} />
                    </fieldset>
                    {
                        transportenrolled==='Enrolled'&&
                    <input type="number" id="transportFee" name="transportFee" placeholder="Transport Fee" onChange={(e) => { updateTransportfee(e.target.value) }} />
                    }


                <fieldset>
                    <b><label>Accommodation Type:</label></b>
                    <select id="hostelType" onChange={(e)=>{updateacomodation(e.target.value)}} name="hostelType">
                        <option value="Dayscholar">Dayscholar</option>
                        <option value="Hostler">Hostler</option>
                    </select>
                    {
                        Accommodation==='Hostler'&&
                        <>
                    <input type="number" id="hostelFee" name="hostelFee" placeholder="Hostel Fee"  onChange={(e) => { updateHostelfee(e.target.value) }} />
                    </>}
                    </fieldset>
                    
             


                <b><label htmlFor="universityfee">universityfee:</label></b>
                <input type="number" id="univeristyfee" value={universityfee} name="paidFee" />


                <b><label htmlFor="skilldevfee">skilldevfee</label></b>
                <input type="number" id="skilldevfee" name="paidFee" value={skilldevfee} />
                                
                <b><label htmlFor="pswd">password</label></b>
                <input type="password" id="pswd" name="pswd" onChange={(e) => { updatePassword(e.target.value); }} />
                
                <fieldset>
                    <b><label>Mentor</label></b>
                    <select id="drpMentor" onChange={(e) => setMentorId(e.target.value)}>
                        <option value="null" disabled selected>---Select Mentor---</option>
                        {mentorData.length > 0 && mentorData.map((x, index) => (
                            <option key={`mentoroption_${index}`} value={x._id}>{x.name}</option>
                        ))};
                    </select>
                    <input type="number" id="hostelFee" name="hostelFee" placeholder="Hostel Fee" style={{ display: 'none' }} onChange={(e) => { updateHostelfee(e.target.value) }} />
                </fieldset>
      <button  value="Submit" onClick={handleClick} className='regsubmit col-5' >Submit</button>
            </form>
        </div>
    );
}

export default StdReg;
