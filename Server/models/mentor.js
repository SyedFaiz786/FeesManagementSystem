const mongoose=require('mongoose')
const StudentModel=new mongoose.Schema({
    name:String,
    password:String,
})

const newmodel=mongoose.model("mentortable",StudentModel)
module.exports=newmodel
