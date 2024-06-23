const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const UserModel = require('./models/mentor')
const StudentModel2 = require('./models/student')

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect('mongodb://127.0.0.1:27017/FMS');

app.listen(3001, () => {
    console.log("server is running")
})


app.post('/register', (req, res) => {
    UserModel.create(req.body)
        .then(newtable => res.json(newtable))
        .catch(err => res.json(err))
})


app.put('/approve',async (req,res)=>{
    const {id}=req.query 
    const student=await StudentModel2.findOneAndUpdate({_id:id},{isApproved:true})
    res.send(student)
})


app.delete('/disapprove',async(req,res)=>{
    const {id}=req.query
    const student=await StudentModel2.findOneAndDelete({_id:id},{notapproved:true})
})


app.put('/updatevalue',async (req,res)=>{
    const {id}=req.query;
    const {newtutionfee,newtransportfee,newskilldevfee,newuniversityfee,newhostelfee,paidfee,balance}=req.body;
    console.log(newtutionfee)
    const studentdetails=await StudentModel2.findOneAndUpdate({_id:id},{paymentdetails:{transport:newtransportfee,hostel:newhostelfee,tution:newtutionfee,skilldev:newskilldevfee,university:newuniversityfee,new:true}})
    res.send(studentdetails)
})


app.put('/newupdates',async (req,res)=>{
    const {id}=req.query;
    const {newtransport,newtution,newhostel,newskilldev,newuniversity,balance,paid,payuniversity,payskilldev,paytransport,paytution,payhostel}=req.body;
    const student=await StudentModel2.findOneAndUpdate({_id:id},{paidtutionfee:newtution,paidtransportfee:newtransport,paidhostelfee:newhostel,paidskilldevfee:newskilldev,paiduniversityfee:newuniversity,balance:balance,paidfee:paid,paymentdetails:{transport:0,tution:0,hostel:0,skilldev:0,university:0,new:false}})
    res.send("successful")

})



app.put('/disapproveupdates',async (req,res)=>{
    const {id}=req.query;
    const student=await StudentModel2.findOneAndUpdate({_id:id},{new:false})
    res.send("successful")

})



app.post('/stdreg', async (req, res) => {
    console.log(req)
    const studentdetails = await StudentModel2.create(req.body);
    res.json(studentdetails)
})



app.post('/login', async (req, res) => {
    const { name, password, role } = req.body;
    const user = (role === 's' ? await StudentModel2.findOne({ name: name, password: password }) : await UserModel.findOne({ name: name, password: password }));

    if (user) {
        res.status(200).send({ id: user._id, name: user.name });
    }
    else {
        res.status(500).send({ msg: "no record exist" })
    }
})






app.get('/getAllStudents', async (req, res) => {
    const { id } = req.query; 
    const userList = await StudentModel2.find({ mentorId: id }); 

    if (userList) {
        res.json(userList);
    }
    else {
        res.status(500).send({ msg: "no record exist" })
    }
});


app.get('/getstudents',async (req,res)=>{
    const {id}=req.query;
    const studentdetails=await StudentModel2.findOne({_id:id})
    if(studentdetails){
        res.send(studentdetails);
    }
    else {
        res.status(500).send({ msg: "no record exist" })
    }
})








app.get('/getAllMentors', async (req, res) => {
    // const { id } = req.query; 
    const mentorList = await UserModel.find(); 

    if (mentorList) {
        res.json(mentorList);
    }
    else {
        res.status(500).send({ msg: "no record exist" })
    }
});









